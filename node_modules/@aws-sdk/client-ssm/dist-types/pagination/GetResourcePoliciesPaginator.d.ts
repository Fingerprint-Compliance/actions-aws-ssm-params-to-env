import type { Paginator } from "@smithy/types";
import { GetResourcePoliciesCommandInput, GetResourcePoliciesCommandOutput } from "../commands/GetResourcePoliciesCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetResourcePolicies: (config: SSMPaginationConfiguration, input: GetResourcePoliciesCommandInput, ...rest: any[]) => Paginator<GetResourcePoliciesCommandOutput>;
