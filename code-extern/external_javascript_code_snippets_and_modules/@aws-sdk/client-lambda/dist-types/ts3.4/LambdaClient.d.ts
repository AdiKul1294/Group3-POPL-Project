import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
} from "@aws-sdk/middleware-host-header";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { Credentials as __Credentials } from "@aws-sdk/types";
import {
  RegionInputConfig,
  RegionResolvedConfig,
} from "@smithy/config-resolver";
import {
  EventStreamSerdeInputConfig,
  EventStreamSerdeResolvedConfig,
} from "@smithy/eventstream-serde-config-resolver";
import {
  EndpointInputConfig,
  EndpointResolvedConfig,
} from "@smithy/middleware-endpoint";
import {
  RetryInputConfig,
  RetryResolvedConfig,
} from "@smithy/middleware-retry";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EventStreamSerdeProvider as __EventStreamSerdeProvider,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";
import {
  AddLayerVersionPermissionCommandInput,
  AddLayerVersionPermissionCommandOutput,
} from "./commands/AddLayerVersionPermissionCommand";
import {
  AddPermissionCommandInput,
  AddPermissionCommandOutput,
} from "./commands/AddPermissionCommand";
import {
  CreateAliasCommandInput,
  CreateAliasCommandOutput,
} from "./commands/CreateAliasCommand";
import {
  CreateCodeSigningConfigCommandInput,
  CreateCodeSigningConfigCommandOutput,
} from "./commands/CreateCodeSigningConfigCommand";
import {
  CreateEventSourceMappingCommandInput,
  CreateEventSourceMappingCommandOutput,
} from "./commands/CreateEventSourceMappingCommand";
import {
  CreateFunctionCommandInput,
  CreateFunctionCommandOutput,
} from "./commands/CreateFunctionCommand";
import {
  CreateFunctionUrlConfigCommandInput,
  CreateFunctionUrlConfigCommandOutput,
} from "./commands/CreateFunctionUrlConfigCommand";
import {
  DeleteAliasCommandInput,
  DeleteAliasCommandOutput,
} from "./commands/DeleteAliasCommand";
import {
  DeleteCodeSigningConfigCommandInput,
  DeleteCodeSigningConfigCommandOutput,
} from "./commands/DeleteCodeSigningConfigCommand";
import {
  DeleteEventSourceMappingCommandInput,
  DeleteEventSourceMappingCommandOutput,
} from "./commands/DeleteEventSourceMappingCommand";
import {
  DeleteFunctionCodeSigningConfigCommandInput,
  DeleteFunctionCodeSigningConfigCommandOutput,
} from "./commands/DeleteFunctionCodeSigningConfigCommand";
import {
  DeleteFunctionCommandInput,
  DeleteFunctionCommandOutput,
} from "./commands/DeleteFunctionCommand";
import {
  DeleteFunctionConcurrencyCommandInput,
  DeleteFunctionConcurrencyCommandOutput,
} from "./commands/DeleteFunctionConcurrencyCommand";
import {
  DeleteFunctionEventInvokeConfigCommandInput,
  DeleteFunctionEventInvokeConfigCommandOutput,
} from "./commands/DeleteFunctionEventInvokeConfigCommand";
import {
  DeleteFunctionUrlConfigCommandInput,
  DeleteFunctionUrlConfigCommandOutput,
} from "./commands/DeleteFunctionUrlConfigCommand";
import {
  DeleteLayerVersionCommandInput,
  DeleteLayerVersionCommandOutput,
} from "./commands/DeleteLayerVersionCommand";
import {
  DeleteProvisionedConcurrencyConfigCommandInput,
  DeleteProvisionedConcurrencyConfigCommandOutput,
} from "./commands/DeleteProvisionedConcurrencyConfigCommand";
import {
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput,
} from "./commands/GetAccountSettingsCommand";
import {
  GetAliasCommandInput,
  GetAliasCommandOutput,
} from "./commands/GetAliasCommand";
import {
  GetCodeSigningConfigCommandInput,
  GetCodeSigningConfigCommandOutput,
} from "./commands/GetCodeSigningConfigCommand";
import {
  GetEventSourceMappingCommandInput,
  GetEventSourceMappingCommandOutput,
} from "./commands/GetEventSourceMappingCommand";
import {
  GetFunctionCodeSigningConfigCommandInput,
  GetFunctionCodeSigningConfigCommandOutput,
} from "./commands/GetFunctionCodeSigningConfigCommand";
import {
  GetFunctionCommandInput,
  GetFunctionCommandOutput,
} from "./commands/GetFunctionCommand";
import {
  GetFunctionConcurrencyCommandInput,
  GetFunctionConcurrencyCommandOutput,
} from "./commands/GetFunctionConcurrencyCommand";
import {
  GetFunctionConfigurationCommandInput,
  GetFunctionConfigurationCommandOutput,
} from "./commands/GetFunctionConfigurationCommand";
import {
  GetFunctionEventInvokeConfigCommandInput,
  GetFunctionEventInvokeConfigCommandOutput,
} from "./commands/GetFunctionEventInvokeConfigCommand";
import {
  GetFunctionUrlConfigCommandInput,
  GetFunctionUrlConfigCommandOutput,
} from "./commands/GetFunctionUrlConfigCommand";
import {
  GetLayerVersionByArnCommandInput,
  GetLayerVersionByArnCommandOutput,
} from "./commands/GetLayerVersionByArnCommand";
import {
  GetLayerVersionCommandInput,
  GetLayerVersionCommandOutput,
} from "./commands/GetLayerVersionCommand";
import {
  GetLayerVersionPolicyCommandInput,
  GetLayerVersionPolicyCommandOutput,
} from "./commands/GetLayerVersionPolicyCommand";
import {
  GetPolicyCommandInput,
  GetPolicyCommandOutput,
} from "./commands/GetPolicyCommand";
import {
  GetProvisionedConcurrencyConfigCommandInput,
  GetProvisionedConcurrencyConfigCommandOutput,
} from "./commands/GetProvisionedConcurrencyConfigCommand";
import {
  GetRuntimeManagementConfigCommandInput,
  GetRuntimeManagementConfigCommandOutput,
} from "./commands/GetRuntimeManagementConfigCommand";
import {
  InvokeAsyncCommandInput,
  InvokeAsyncCommandOutput,
} from "./commands/InvokeAsyncCommand";
import {
  InvokeCommandInput,
  InvokeCommandOutput,
} from "./commands/InvokeCommand";
import {
  InvokeWithResponseStreamCommandInput,
  InvokeWithResponseStreamCommandOutput,
} from "./commands/InvokeWithResponseStreamCommand";
import {
  ListAliasesCommandInput,
  ListAliasesCommandOutput,
} from "./commands/ListAliasesCommand";
import {
  ListCodeSigningConfigsCommandInput,
  ListCodeSigningConfigsCommandOutput,
} from "./commands/ListCodeSigningConfigsCommand";
import {
  ListEventSourceMappingsCommandInput,
  ListEventSourceMappingsCommandOutput,
} from "./commands/ListEventSourceMappingsCommand";
import {
  ListFunctionEventInvokeConfigsCommandInput,
  ListFunctionEventInvokeConfigsCommandOutput,
} from "./commands/ListFunctionEventInvokeConfigsCommand";
import {
  ListFunctionsByCodeSigningConfigCommandInput,
  ListFunctionsByCodeSigningConfigCommandOutput,
} from "./commands/ListFunctionsByCodeSigningConfigCommand";
import {
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput,
} from "./commands/ListFunctionsCommand";
import {
  ListFunctionUrlConfigsCommandInput,
  ListFunctionUrlConfigsCommandOutput,
} from "./commands/ListFunctionUrlConfigsCommand";
import {
  ListLayersCommandInput,
  ListLayersCommandOutput,
} from "./commands/ListLayersCommand";
import {
  ListLayerVersionsCommandInput,
  ListLayerVersionsCommandOutput,
} from "./commands/ListLayerVersionsCommand";
import {
  ListProvisionedConcurrencyConfigsCommandInput,
  ListProvisionedConcurrencyConfigsCommandOutput,
} from "./commands/ListProvisionedConcurrencyConfigsCommand";
import {
  ListTagsCommandInput,
  ListTagsCommandOutput,
} from "./commands/ListTagsCommand";
import {
  ListVersionsByFunctionCommandInput,
  ListVersionsByFunctionCommandOutput,
} from "./commands/ListVersionsByFunctionCommand";
import {
  PublishLayerVersionCommandInput,
  PublishLayerVersionCommandOutput,
} from "./commands/PublishLayerVersionCommand";
import {
  PublishVersionCommandInput,
  PublishVersionCommandOutput,
} from "./commands/PublishVersionCommand";
import {
  PutFunctionCodeSigningConfigCommandInput,
  PutFunctionCodeSigningConfigCommandOutput,
} from "./commands/PutFunctionCodeSigningConfigCommand";
import {
  PutFunctionConcurrencyCommandInput,
  PutFunctionConcurrencyCommandOutput,
} from "./commands/PutFunctionConcurrencyCommand";
import {
  PutFunctionEventInvokeConfigCommandInput,
  PutFunctionEventInvokeConfigCommandOutput,
} from "./commands/PutFunctionEventInvokeConfigCommand";
import {
  PutProvisionedConcurrencyConfigCommandInput,
  PutProvisionedConcurrencyConfigCommandOutput,
} from "./commands/PutProvisionedConcurrencyConfigCommand";
import {
  PutRuntimeManagementConfigCommandInput,
  PutRuntimeManagementConfigCommandOutput,
} from "./commands/PutRuntimeManagementConfigCommand";
import {
  RemoveLayerVersionPermissionCommandInput,
  RemoveLayerVersionPermissionCommandOutput,
} from "./commands/RemoveLayerVersionPermissionCommand";
import {
  RemovePermissionCommandInput,
  RemovePermissionCommandOutput,
} from "./commands/RemovePermissionCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput,
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAliasCommandInput,
  UpdateAliasCommandOutput,
} from "./commands/UpdateAliasCommand";
import {
  UpdateCodeSigningConfigCommandInput,
  UpdateCodeSigningConfigCommandOutput,
} from "./commands/UpdateCodeSigningConfigCommand";
import {
  UpdateEventSourceMappingCommandInput,
  UpdateEventSourceMappingCommandOutput,
} from "./commands/UpdateEventSourceMappingCommand";
import {
  UpdateFunctionCodeCommandInput,
  UpdateFunctionCodeCommandOutput,
} from "./commands/UpdateFunctionCodeCommand";
import {
  UpdateFunctionConfigurationCommandInput,
  UpdateFunctionConfigurationCommandOutput,
} from "./commands/UpdateFunctionConfigurationCommand";
import {
  UpdateFunctionEventInvokeConfigCommandInput,
  UpdateFunctionEventInvokeConfigCommandOutput,
} from "./commands/UpdateFunctionEventInvokeConfigCommand";
import {
  UpdateFunctionUrlConfigCommandInput,
  UpdateFunctionUrlConfigCommandOutput,
} from "./commands/UpdateFunctionUrlConfigCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
} from "./endpoint/EndpointParameters";
import { RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";
export { __Client };
export type ServiceInputTypes =
  | AddLayerVersionPermissionCommandInput
  | AddPermissionCommandInput
  | CreateAliasCommandInput
  | CreateCodeSigningConfigCommandInput
  | CreateEventSourceMappingCommandInput
  | CreateFunctionCommandInput
  | CreateFunctionUrlConfigCommandInput
  | DeleteAliasCommandInput
  | DeleteCodeSigningConfigCommandInput
  | DeleteEventSourceMappingCommandInput
  | DeleteFunctionCodeSigningConfigCommandInput
  | DeleteFunctionCommandInput
  | DeleteFunctionConcurrencyCommandInput
  | DeleteFunctionEventInvokeConfigCommandInput
  | DeleteFunctionUrlConfigCommandInput
  | DeleteLayerVersionCommandInput
  | DeleteProvisionedConcurrencyConfigCommandInput
  | GetAccountSettingsCommandInput
  | GetAliasCommandInput
  | GetCodeSigningConfigCommandInput
  | GetEventSourceMappingCommandInput
  | GetFunctionCodeSigningConfigCommandInput
  | GetFunctionCommandInput
  | GetFunctionConcurrencyCommandInput
  | GetFunctionConfigurationCommandInput
  | GetFunctionEventInvokeConfigCommandInput
  | GetFunctionUrlConfigCommandInput
  | GetLayerVersionByArnCommandInput
  | GetLayerVersionCommandInput
  | GetLayerVersionPolicyCommandInput
  | GetPolicyCommandInput
  | GetProvisionedConcurrencyConfigCommandInput
  | GetRuntimeManagementConfigCommandInput
  | InvokeAsyncCommandInput
  | InvokeCommandInput
  | InvokeWithResponseStreamCommandInput
  | ListAliasesCommandInput
  | ListCodeSigningConfigsCommandInput
  | ListEventSourceMappingsCommandInput
  | ListFunctionEventInvokeConfigsCommandInput
  | ListFunctionUrlConfigsCommandInput
  | ListFunctionsByCodeSigningConfigCommandInput
  | ListFunctionsCommandInput
  | ListLayerVersionsCommandInput
  | ListLayersCommandInput
  | ListProvisionedConcurrencyConfigsCommandInput
  | ListTagsCommandInput
  | ListVersionsByFunctionCommandInput
  | PublishLayerVersionCommandInput
  | PublishVersionCommandInput
  | PutFunctionCodeSigningConfigCommandInput
  | PutFunctionConcurrencyCommandInput
  | PutFunctionEventInvokeConfigCommandInput
  | PutProvisionedConcurrencyConfigCommandInput
  | PutRuntimeManagementConfigCommandInput
  | RemoveLayerVersionPermissionCommandInput
  | RemovePermissionCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAliasCommandInput
  | UpdateCodeSigningConfigCommandInput
  | UpdateEventSourceMappingCommandInput
  | UpdateFunctionCodeCommandInput
  | UpdateFunctionConfigurationCommandInput
  | UpdateFunctionEventInvokeConfigCommandInput
  | UpdateFunctionUrlConfigCommandInput;
export type ServiceOutputTypes =
  | AddLayerVersionPermissionCommandOutput
  | AddPermissionCommandOutput
  | CreateAliasCommandOutput
  | CreateCodeSigningConfigCommandOutput
  | CreateEventSourceMappingCommandOutput
  | CreateFunctionCommandOutput
  | CreateFunctionUrlConfigCommandOutput
  | DeleteAliasCommandOutput
  | DeleteCodeSigningConfigCommandOutput
  | DeleteEventSourceMappingCommandOutput
  | DeleteFunctionCodeSigningConfigCommandOutput
  | DeleteFunctionCommandOutput
  | DeleteFunctionConcurrencyCommandOutput
  | DeleteFunctionEventInvokeConfigCommandOutput
  | DeleteFunctionUrlConfigCommandOutput
  | DeleteLayerVersionCommandOutput
  | DeleteProvisionedConcurrencyConfigCommandOutput
  | GetAccountSettingsCommandOutput
  | GetAliasCommandOutput
  | GetCodeSigningConfigCommandOutput
  | GetEventSourceMappingCommandOutput
  | GetFunctionCodeSigningConfigCommandOutput
  | GetFunctionCommandOutput
  | GetFunctionConcurrencyCommandOutput
  | GetFunctionConfigurationCommandOutput
  | GetFunctionEventInvokeConfigCommandOutput
  | GetFunctionUrlConfigCommandOutput
  | GetLayerVersionByArnCommandOutput
  | GetLayerVersionCommandOutput
  | GetLayerVersionPolicyCommandOutput
  | GetPolicyCommandOutput
  | GetProvisionedConcurrencyConfigCommandOutput
  | GetRuntimeManagementConfigCommandOutput
  | InvokeAsyncCommandOutput
  | InvokeCommandOutput
  | InvokeWithResponseStreamCommandOutput
  | ListAliasesCommandOutput
  | ListCodeSigningConfigsCommandOutput
  | ListEventSourceMappingsCommandOutput
  | ListFunctionEventInvokeConfigsCommandOutput
  | ListFunctionUrlConfigsCommandOutput
  | ListFunctionsByCodeSigningConfigCommandOutput
  | ListFunctionsCommandOutput
  | ListLayerVersionsCommandOutput
  | ListLayersCommandOutput
  | ListProvisionedConcurrencyConfigsCommandOutput
  | ListTagsCommandOutput
  | ListVersionsByFunctionCommandOutput
  | PublishLayerVersionCommandOutput
  | PublishVersionCommandOutput
  | PutFunctionCodeSigningConfigCommandOutput
  | PutFunctionConcurrencyCommandOutput
  | PutFunctionEventInvokeConfigCommandOutput
  | PutProvisionedConcurrencyConfigCommandOutput
  | PutRuntimeManagementConfigCommandOutput
  | RemoveLayerVersionPermissionCommandOutput
  | RemovePermissionCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAliasCommandOutput
  | UpdateCodeSigningConfigCommandOutput
  | UpdateEventSourceMappingCommandOutput
  | UpdateFunctionCodeCommandOutput
  | UpdateFunctionConfigurationCommandOutput
  | UpdateFunctionEventInvokeConfigCommandOutput
  | UpdateFunctionUrlConfigCommandOutput;
export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  requestHandler?: __HttpHandler;
  sha256?: __ChecksumConstructor | __HashConstructor;
  urlParser?: __UrlParser;
  bodyLengthChecker?: __BodyLengthCalculator;
  streamCollector?: __StreamCollector;
  base64Decoder?: __Decoder;
  base64Encoder?: __Encoder;
  utf8Decoder?: __Decoder;
  utf8Encoder?: __Encoder;
  runtime?: string;
  disableHostPrefix?: boolean;
  serviceId?: string;
  useDualstackEndpoint?: boolean | __Provider<boolean>;
  useFipsEndpoint?: boolean | __Provider<boolean>;
  region?: string | __Provider<string>;
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;
  defaultUserAgentProvider?: Provider<__UserAgent>;
  maxAttempts?: number | __Provider<number>;
  retryMode?: string | __Provider<string>;
  logger?: __Logger;
  extensions?: RuntimeExtension[];
  eventStreamSerdeProvider?: __EventStreamSerdeProvider;
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}
export type LambdaClientConfigType = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  EventStreamSerdeInputConfig &
  ClientInputEndpointParameters;
export interface LambdaClientConfig extends LambdaClientConfigType {}
export type LambdaClientResolvedConfigType =
  __SmithyResolvedConfiguration<__HttpHandlerOptions> &
    Required<ClientDefaults> &
    RuntimeExtensionsConfig &
    RegionResolvedConfig &
    EndpointResolvedConfig<EndpointParameters> &
    RetryResolvedConfig &
    HostHeaderResolvedConfig &
    AwsAuthResolvedConfig &
    UserAgentResolvedConfig &
    EventStreamSerdeResolvedConfig &
    ClientResolvedEndpointParameters;
export interface LambdaClientResolvedConfig
  extends LambdaClientResolvedConfigType {}
export declare class LambdaClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  LambdaClientResolvedConfig
> {
  readonly config: LambdaClientResolvedConfig;
  constructor(
    ...[configuration]: __CheckOptionalClientConfig<LambdaClientConfig>
  );
  destroy(): void;
}
