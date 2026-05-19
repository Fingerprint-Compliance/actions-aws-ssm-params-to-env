import {
  AwsSdkSigV4AuthInputConfig,
  AwsSdkSigV4AuthResolvedConfig,
  AwsSdkSigV4PreviouslyResolved,
} from "@aws-sdk/core/httpAuthSchemes";
import {
  HandlerExecutionContext,
  HttpAuthScheme,
  HttpAuthSchemeParameters,
  HttpAuthSchemeParametersProvider,
  HttpAuthSchemeProvider,
  Provider,
} from "@smithy/types";
import { SSMClientResolvedConfig } from "../SSMClient";
export interface SSMHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}
export interface SSMHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    SSMClientResolvedConfig,
    HandlerExecutionContext,
    SSMHttpAuthSchemeParameters,
    object
  > {}
export declare const defaultSSMHttpAuthSchemeParametersProvider: (
  config: SSMClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
) => Promise<SSMHttpAuthSchemeParameters>;
export interface SSMHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<SSMHttpAuthSchemeParameters> {}
export declare const defaultSSMHttpAuthSchemeProvider: SSMHttpAuthSchemeProvider;
export interface HttpAuthSchemeInputConfig extends AwsSdkSigV4AuthInputConfig {
  authSchemePreference?: string[] | Provider<string[]>;
  httpAuthSchemes?: HttpAuthScheme[];
  httpAuthSchemeProvider?: SSMHttpAuthSchemeProvider;
}
export interface HttpAuthSchemeResolvedConfig
  extends AwsSdkSigV4AuthResolvedConfig {
  readonly authSchemePreference: Provider<string[]>;
  readonly httpAuthSchemes: HttpAuthScheme[];
  readonly httpAuthSchemeProvider: SSMHttpAuthSchemeProvider;
}
export declare const resolveHttpAuthSchemeConfig: <T>(
  config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved
) => T & HttpAuthSchemeResolvedConfig;
