import type { Paginator } from "@smithy/types";
import { DescribeMaintenanceWindowTasksCommandInput, DescribeMaintenanceWindowTasksCommandOutput } from "../commands/DescribeMaintenanceWindowTasksCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeMaintenanceWindowTasks: (config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowTasksCommandInput, ...rest: any[]) => Paginator<DescribeMaintenanceWindowTasksCommandOutput>;
