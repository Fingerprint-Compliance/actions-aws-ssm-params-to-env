import type { Paginator } from "@smithy/types";
import { DescribeInstanceAssociationsStatusCommandInput, DescribeInstanceAssociationsStatusCommandOutput } from "../commands/DescribeInstanceAssociationsStatusCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeInstanceAssociationsStatus: (config: SSMPaginationConfiguration, input: DescribeInstanceAssociationsStatusCommandInput, ...rest: any[]) => Paginator<DescribeInstanceAssociationsStatusCommandOutput>;
