import type { Paginator } from "@smithy/types";
import { GetParametersByPathCommandInput, GetParametersByPathCommandOutput } from "../commands/GetParametersByPathCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetParametersByPath: (config: SSMPaginationConfiguration, input: GetParametersByPathCommandInput, ...rest: any[]) => Paginator<GetParametersByPathCommandOutput>;
