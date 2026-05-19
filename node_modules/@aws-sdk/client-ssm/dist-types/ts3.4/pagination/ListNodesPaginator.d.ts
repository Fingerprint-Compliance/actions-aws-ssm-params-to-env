import { Paginator } from "@smithy/types";
import {
  ListNodesCommandInput,
  ListNodesCommandOutput,
} from "../commands/ListNodesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateListNodes: (
  config: SSMPaginationConfiguration,
  input: ListNodesCommandInput,
  ...rest: any[]
) => Paginator<ListNodesCommandOutput>;
