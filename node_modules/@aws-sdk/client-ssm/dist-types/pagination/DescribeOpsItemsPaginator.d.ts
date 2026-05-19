import type { Paginator } from "@smithy/types";
import { DescribeOpsItemsCommandInput, DescribeOpsItemsCommandOutput } from "../commands/DescribeOpsItemsCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeOpsItems: (config: SSMPaginationConfiguration, input: DescribeOpsItemsCommandInput, ...rest: any[]) => Paginator<DescribeOpsItemsCommandOutput>;
