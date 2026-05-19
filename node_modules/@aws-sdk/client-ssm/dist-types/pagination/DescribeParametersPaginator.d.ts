import type { Paginator } from "@smithy/types";
import { DescribeParametersCommandInput, DescribeParametersCommandOutput } from "../commands/DescribeParametersCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeParameters: (config: SSMPaginationConfiguration, input: DescribeParametersCommandInput, ...rest: any[]) => Paginator<DescribeParametersCommandOutput>;
