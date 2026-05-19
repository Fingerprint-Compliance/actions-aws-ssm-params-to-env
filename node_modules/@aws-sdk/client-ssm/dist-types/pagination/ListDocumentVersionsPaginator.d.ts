import type { Paginator } from "@smithy/types";
import { ListDocumentVersionsCommandInput, ListDocumentVersionsCommandOutput } from "../commands/ListDocumentVersionsCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListDocumentVersions: (config: SSMPaginationConfiguration, input: ListDocumentVersionsCommandInput, ...rest: any[]) => Paginator<ListDocumentVersionsCommandOutput>;
