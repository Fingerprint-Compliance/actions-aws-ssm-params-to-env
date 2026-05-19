import type { Paginator } from "@smithy/types";
import { ListDocumentsCommandInput, ListDocumentsCommandOutput } from "../commands/ListDocumentsCommand";
import type { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListDocuments: (config: SSMPaginationConfiguration, input: ListDocumentsCommandInput, ...rest: any[]) => Paginator<ListDocumentsCommandOutput>;
