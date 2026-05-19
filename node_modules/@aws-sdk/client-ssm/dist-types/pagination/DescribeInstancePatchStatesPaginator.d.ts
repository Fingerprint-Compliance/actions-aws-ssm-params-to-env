import type { Paginator } from "@smithy/types";
import { DescribeInstancePatchStatesCommandInput, DescribeInstancePatchStatesCommandOutput } from "../commands/DescribeInstancePatchStatesCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeInstancePatchStates: (config: SSMPaginationConfiguration, input: DescribeInstancePatchStatesCommandInput, ...rest: any[]) => Paginator<DescribeInstancePatchStatesCommandOutput>;
