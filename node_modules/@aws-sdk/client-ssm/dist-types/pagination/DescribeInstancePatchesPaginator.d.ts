import type { Paginator } from "@smithy/types";
import { DescribeInstancePatchesCommandInput, DescribeInstancePatchesCommandOutput } from "../commands/DescribeInstancePatchesCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeInstancePatches: (config: SSMPaginationConfiguration, input: DescribeInstancePatchesCommandInput, ...rest: any[]) => Paginator<DescribeInstancePatchesCommandOutput>;
