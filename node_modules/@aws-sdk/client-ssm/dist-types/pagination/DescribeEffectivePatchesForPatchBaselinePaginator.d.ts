import type { Paginator } from "@smithy/types";
import { DescribeEffectivePatchesForPatchBaselineCommandInput, DescribeEffectivePatchesForPatchBaselineCommandOutput } from "../commands/DescribeEffectivePatchesForPatchBaselineCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeEffectivePatchesForPatchBaseline: (config: SSMPaginationConfiguration, input: DescribeEffectivePatchesForPatchBaselineCommandInput, ...rest: any[]) => Paginator<DescribeEffectivePatchesForPatchBaselineCommandOutput>;
