import type { Paginator } from "@smithy/types";
import { GetOpsSummaryCommandInput, GetOpsSummaryCommandOutput } from "../commands/GetOpsSummaryCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetOpsSummary: (config: SSMPaginationConfiguration, input: GetOpsSummaryCommandInput, ...rest: any[]) => Paginator<GetOpsSummaryCommandOutput>;
