import type { Paginator } from "@smithy/types";
import { DescribeMaintenanceWindowExecutionsCommandInput, DescribeMaintenanceWindowExecutionsCommandOutput } from "../commands/DescribeMaintenanceWindowExecutionsCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeMaintenanceWindowExecutions: (config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowExecutionsCommandInput, ...rest: any[]) => Paginator<DescribeMaintenanceWindowExecutionsCommandOutput>;
