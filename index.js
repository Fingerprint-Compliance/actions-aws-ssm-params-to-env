import { getInput, debug, setFailed, setSecret, exportVariable } from '@actions/core';
import { getParameters } from './ssm-helper.js';

async function run_action()
{
    try
    {
        const ssmPath = getInput('ssm-path', { required: true });
        const getChildren = getInput('get-children') === 'true';
        const prefix = getInput('prefix');
        const region = process.env.AWS_DEFAULT_REGION;
        const decryption = getInput('decryption') === 'true';
        const maskValues = getInput('mask-values') === 'true';
        const disableExpandJson = getInput('disable-expand-json') === 'true';

        const params = await getParameters(ssmPath, getChildren, decryption, region);
        
        for (let param of params)
        {
            const parsedValue = parseValue(param.Value);
            if (typeof(parsedValue) === 'object' && !disableExpandJson) // Assume JSON object
            {
                debug(`parsedValue: ${JSON.stringify(parsedValue)}`);
                // Assume basic JSON structure
                for (var key in parsedValue)
                {
                    setEnvironmentVar(prefix + key, parsedValue[key], maskValues);
                }
            }
            else
            {
                debug(`parsedValue: ${parsedValue}`);
                // Set environment variable with ssmPath name as the env variable
                var split = param.Name.split('/');
                var envVarName = prefix + split[split.length - 1];
                debug(`Using prefix + end of ssmPath for env var name: ${envVarName}`);
                setEnvironmentVar(envVarName, parsedValue, maskValues);
            }
        }
    }
    catch (e)
    {
        setFailed(e.message);
    }
}


function parseValue(val)
{
    try
    {
        return JSON.parse(val);
    }
    catch
    {
        debug('JSON parse failed - assuming parameter is to be taken as a string literal');
        return val;
    }
}

function setEnvironmentVar(key, value, maskValue)
{
    if (maskValue) {
        setSecret(value);
    }
    exportVariable(key, value);
}

run_action();
