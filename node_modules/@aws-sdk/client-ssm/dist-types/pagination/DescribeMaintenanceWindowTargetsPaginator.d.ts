import type { Paginator } from "@smithy/types";
import { DescribeMaintenanceWindowTargetsCommandInput, DescribeMaintenanceWindowTargetsCommandOutput } from "../commands/DescribeMaintenanceWindowTargetsCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeMaintenanceWindowTargets: (config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowTargetsCommandInput, ...rest: any[]) => Paginator<DescribeMaintenanceWindowTargetsCommandOutput>;
