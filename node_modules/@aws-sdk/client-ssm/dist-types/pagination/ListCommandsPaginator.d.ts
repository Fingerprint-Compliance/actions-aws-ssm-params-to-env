import type { Paginator } from "@smithy/types";
import { ListCommandsCommandInput, ListCommandsCommandOutput } from "../commands/ListCommandsCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListCommands: (config: SSMPaginationConfiguration, input: ListCommandsCommandInput, ...rest: any[]) => Paginator<ListCommandsCommandOutput>;
