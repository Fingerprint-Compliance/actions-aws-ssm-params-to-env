import type { Paginator } from "@smithy/types";
import { DescribeActivationsCommandInput, DescribeActivationsCommandOutput } from "../commands/DescribeActivationsCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeActivations: (config: SSMPaginationConfiguration, input: DescribeActivationsCommandInput, ...rest: any[]) => Paginator<DescribeActivationsCommandOutput>;
