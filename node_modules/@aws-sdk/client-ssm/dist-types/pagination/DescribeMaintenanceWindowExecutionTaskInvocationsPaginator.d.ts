import type { Paginator } from "@smithy/types";
import { DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput, DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput } from "../commands/DescribeMaintenanceWindowExecutionTaskInvocationsCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeMaintenanceWindowExecutionTaskInvocations: (config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput, ...rest: any[]) => Paginator<DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput>;
