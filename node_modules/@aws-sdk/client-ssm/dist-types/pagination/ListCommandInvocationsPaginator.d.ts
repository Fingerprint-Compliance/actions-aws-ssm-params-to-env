import type { Paginator } from "@smithy/types";
import { ListCommandInvocationsCommandInput, ListCommandInvocationsCommandOutput } from "../commands/ListCommandInvocationsCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListCommandInvocations: (config: SSMPaginationConfiguration, input: ListCommandInvocationsCommandInput, ...rest: any[]) => Paginator<ListCommandInvocationsCommandOutput>;
