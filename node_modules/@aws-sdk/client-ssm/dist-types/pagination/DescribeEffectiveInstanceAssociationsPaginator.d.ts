import type { Paginator } from "@smithy/types";
import { DescribeEffectiveInstanceAssociationsCommandInput, DescribeEffectiveInstanceAssociationsCommandOutput } from "../commands/DescribeEffectiveInstanceAssociationsCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeEffectiveInstanceAssociations: (config: SSMPaginationConfiguration, input: DescribeEffectiveInstanceAssociationsCommandInput, ...rest: any[]) => Paginator<DescribeEffectiveInstanceAssociationsCommandOutput>;
