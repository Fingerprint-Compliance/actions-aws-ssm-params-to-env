import type { Paginator } from "@smithy/types";
import { DescribeInventoryDeletionsCommandInput, DescribeInventoryDeletionsCommandOutput } from "../commands/DescribeInventoryDeletionsCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeInventoryDeletions: (config: SSMPaginationConfiguration, input: DescribeInventoryDeletionsCommandInput, ...rest: any[]) => Paginator<DescribeInventoryDeletionsCommandOutput>;
