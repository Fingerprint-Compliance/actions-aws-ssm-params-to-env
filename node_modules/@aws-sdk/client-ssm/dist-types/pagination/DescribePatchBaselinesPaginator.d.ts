import type { Paginator } from "@smithy/types";
import { DescribePatchBaselinesCommandInput, DescribePatchBaselinesCommandOutput } from "../commands/DescribePatchBaselinesCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribePatchBaselines: (config: SSMPaginationConfiguration, input: DescribePatchBaselinesCommandInput, ...rest: any[]) => Paginator<DescribePatchBaselinesCommandOutput>;
