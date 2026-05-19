import type { Paginator } from "@smithy/types";
import { DescribeMaintenanceWindowsCommandInput, DescribeMaintenanceWindowsCommandOutput } from "../commands/DescribeMaintenanceWindowsCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeMaintenanceWindows: (config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowsCommandInput, ...rest: any[]) => Paginator<DescribeMaintenanceWindowsCommandOutput>;
