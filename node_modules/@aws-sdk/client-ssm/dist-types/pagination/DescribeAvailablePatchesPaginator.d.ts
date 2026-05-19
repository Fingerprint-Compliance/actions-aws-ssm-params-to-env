import type { Paginator } from "@smithy/types";
import { DescribeAvailablePatchesCommandInput, DescribeAvailablePatchesCommandOutput } from "../commands/DescribeAvailablePatchesCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeAvailablePatches: (config: SSMPaginationConfiguration, input: DescribeAvailablePatchesCommandInput, ...rest: any[]) => Paginator<DescribeAvailablePatchesCommandOutput>;
