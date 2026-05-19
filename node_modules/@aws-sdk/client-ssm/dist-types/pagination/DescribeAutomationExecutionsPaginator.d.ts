import type { Paginator } from "@smithy/types";
import { DescribeAutomationExecutionsCommandInput, DescribeAutomationExecutionsCommandOutput } from "../commands/DescribeAutomationExecutionsCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeAutomationExecutions: (config: SSMPaginationConfiguration, input: DescribeAutomationExecutionsCommandInput, ...rest: any[]) => Paginator<DescribeAutomationExecutionsCommandOutput>;
