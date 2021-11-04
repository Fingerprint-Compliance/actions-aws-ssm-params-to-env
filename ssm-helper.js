import * as AWS from '@aws-sdk/client-ssm';

const getParameters = async (ssmPath, getChildren, decryption, region) => {
  const ssm = new AWS.SSM({ region });

  const promise = getChildren
    ? await ssm.getParametersByPath({
    Path: ssmPath,
    WithDecryption: decryption,
  }) : await ssm.getParameters({
    Names: [ssmPath],
    WithDecryption: decryption,
  })
  return promise.Parameters;
};

module.exports = {getParameters};
