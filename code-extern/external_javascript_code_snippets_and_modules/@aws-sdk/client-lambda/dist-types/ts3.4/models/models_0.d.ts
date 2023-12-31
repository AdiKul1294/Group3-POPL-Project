import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { StreamingBlobTypes } from "@smithy/types";
import { LambdaServiceException as __BaseException } from "./LambdaServiceException";
export interface AccountLimit {
  TotalCodeSize?: number;
  CodeSizeUnzipped?: number;
  CodeSizeZipped?: number;
  ConcurrentExecutions?: number;
  UnreservedConcurrentExecutions?: number;
}
export interface AccountUsage {
  TotalCodeSize?: number;
  FunctionCount?: number;
}
export interface AddLayerVersionPermissionRequest {
  LayerName: string | undefined;
  VersionNumber: number | undefined;
  StatementId: string | undefined;
  Action: string | undefined;
  Principal: string | undefined;
  OrganizationId?: string;
  RevisionId?: string;
}
export interface AddLayerVersionPermissionResponse {
  Statement?: string;
  RevisionId?: string;
}
export declare class InvalidParameterValueException extends __BaseException {
  readonly name: "InvalidParameterValueException";
  readonly $fault: "client";
  Type?: string;
  constructor(
    opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>
  );
}
export declare class PolicyLengthExceededException extends __BaseException {
  readonly name: "PolicyLengthExceededException";
  readonly $fault: "client";
  Type?: string;
  constructor(
    opts: __ExceptionOptionType<PolicyLengthExceededException, __BaseException>
  );
}
export declare class PreconditionFailedException extends __BaseException {
  readonly name: "PreconditionFailedException";
  readonly $fault: "client";
  Type?: string;
  constructor(
    opts: __ExceptionOptionType<PreconditionFailedException, __BaseException>
  );
}
export declare class ResourceConflictException extends __BaseException {
  readonly name: "ResourceConflictException";
  readonly $fault: "client";
  Type?: string;
  constructor(
    opts: __ExceptionOptionType<ResourceConflictException, __BaseException>
  );
}
export declare class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException";
  readonly $fault: "client";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>
  );
}
export declare class ServiceException extends __BaseException {
  readonly name: "ServiceException";
  readonly $fault: "server";
  Type?: string;
  Message?: string;
  constructor(opts: __ExceptionOptionType<ServiceException, __BaseException>);
}
export declare const ThrottleReason: {
  readonly CallerRateLimitExceeded: "CallerRateLimitExceeded";
  readonly ConcurrentInvocationLimitExceeded: "ConcurrentInvocationLimitExceeded";
  readonly ConcurrentSnapshotCreateLimitExceeded: "ConcurrentSnapshotCreateLimitExceeded";
  readonly FunctionInvocationRateLimitExceeded: "FunctionInvocationRateLimitExceeded";
  readonly ReservedFunctionConcurrentInvocationLimitExceeded: "ReservedFunctionConcurrentInvocationLimitExceeded";
  readonly ReservedFunctionInvocationRateLimitExceeded: "ReservedFunctionInvocationRateLimitExceeded";
};
export type ThrottleReason =
  (typeof ThrottleReason)[keyof typeof ThrottleReason];
export declare class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException";
  readonly $fault: "client";
  retryAfterSeconds?: string;
  Type?: string;
  Reason?: ThrottleReason;
  constructor(
    opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>
  );
}
export declare const FunctionUrlAuthType: {
  readonly AWS_IAM: "AWS_IAM";
  readonly NONE: "NONE";
};
export type FunctionUrlAuthType =
  (typeof FunctionUrlAuthType)[keyof typeof FunctionUrlAuthType];
export interface AddPermissionRequest {
  FunctionName: string | undefined;
  StatementId: string | undefined;
  Action: string | undefined;
  Principal: string | undefined;
  SourceArn?: string;
  SourceAccount?: string;
  EventSourceToken?: string;
  Qualifier?: string;
  RevisionId?: string;
  PrincipalOrgID?: string;
  FunctionUrlAuthType?: FunctionUrlAuthType;
}
export interface AddPermissionResponse {
  Statement?: string;
}
export interface AliasRoutingConfiguration {
  AdditionalVersionWeights?: Record<string, number>;
}
export interface AliasConfiguration {
  AliasArn?: string;
  Name?: string;
  FunctionVersion?: string;
  Description?: string;
  RoutingConfig?: AliasRoutingConfiguration;
  RevisionId?: string;
}
export interface AllowedPublishers {
  SigningProfileVersionArns: string[] | undefined;
}
export interface AmazonManagedKafkaEventSourceConfig {
  ConsumerGroupId?: string;
}
export declare const ApplicationLogLevel: {
  readonly Debug: "DEBUG";
  readonly Error: "ERROR";
  readonly Fatal: "FATAL";
  readonly Info: "INFO";
  readonly Trace: "TRACE";
  readonly Warn: "WARN";
};
export type ApplicationLogLevel =
  (typeof ApplicationLogLevel)[keyof typeof ApplicationLogLevel];
export declare const Architecture: {
  readonly arm64: "arm64";
  readonly x86_64: "x86_64";
};
export type Architecture = (typeof Architecture)[keyof typeof Architecture];
export interface CreateAliasRequest {
  FunctionName: string | undefined;
  Name: string | undefined;
  FunctionVersion: string | undefined;
  Description?: string;
  RoutingConfig?: AliasRoutingConfiguration;
}
export declare const CodeSigningPolicy: {
  readonly Enforce: "Enforce";
  readonly Warn: "Warn";
};
export type CodeSigningPolicy =
  (typeof CodeSigningPolicy)[keyof typeof CodeSigningPolicy];
export interface CodeSigningPolicies {
  UntrustedArtifactOnDeployment?: CodeSigningPolicy;
}
export interface CreateCodeSigningConfigRequest {
  Description?: string;
  AllowedPublishers: AllowedPublishers | undefined;
  CodeSigningPolicies?: CodeSigningPolicies;
}
export interface CodeSigningConfig {
  CodeSigningConfigId: string | undefined;
  CodeSigningConfigArn: string | undefined;
  Description?: string;
  AllowedPublishers: AllowedPublishers | undefined;
  CodeSigningPolicies: CodeSigningPolicies | undefined;
  LastModified: string | undefined;
}
export interface CreateCodeSigningConfigResponse {
  CodeSigningConfig: CodeSigningConfig | undefined;
}
export interface OnFailure {
  Destination?: string;
}
export interface OnSuccess {
  Destination?: string;
}
export interface DestinationConfig {
  OnSuccess?: OnSuccess;
  OnFailure?: OnFailure;
}
export declare const FullDocument: {
  readonly Default: "Default";
  readonly UpdateLookup: "UpdateLookup";
};
export type FullDocument = (typeof FullDocument)[keyof typeof FullDocument];
export interface DocumentDBEventSourceConfig {
  DatabaseName?: string;
  CollectionName?: string;
  FullDocument?: FullDocument;
}
export interface Filter {
  Pattern?: string;
}
export interface FilterCriteria {
  Filters?: Filter[];
}
export declare const FunctionResponseType: {
  readonly ReportBatchItemFailures: "ReportBatchItemFailures";
};
export type FunctionResponseType =
  (typeof FunctionResponseType)[keyof typeof FunctionResponseType];
export interface ScalingConfig {
  MaximumConcurrency?: number;
}
export declare const EndPointType: {
  readonly KAFKA_BOOTSTRAP_SERVERS: "KAFKA_BOOTSTRAP_SERVERS";
};
export type EndPointType = (typeof EndPointType)[keyof typeof EndPointType];
export interface SelfManagedEventSource {
  Endpoints?: Partial<Record<EndPointType, string[]>>;
}
export interface SelfManagedKafkaEventSourceConfig {
  ConsumerGroupId?: string;
}
export declare const SourceAccessType: {
  readonly BASIC_AUTH: "BASIC_AUTH";
  readonly CLIENT_CERTIFICATE_TLS_AUTH: "CLIENT_CERTIFICATE_TLS_AUTH";
  readonly SASL_SCRAM_256_AUTH: "SASL_SCRAM_256_AUTH";
  readonly SASL_SCRAM_512_AUTH: "SASL_SCRAM_512_AUTH";
  readonly SERVER_ROOT_CA_CERTIFICATE: "SERVER_ROOT_CA_CERTIFICATE";
  readonly VIRTUAL_HOST: "VIRTUAL_HOST";
  readonly VPC_SECURITY_GROUP: "VPC_SECURITY_GROUP";
  readonly VPC_SUBNET: "VPC_SUBNET";
};
export type SourceAccessType =
  (typeof SourceAccessType)[keyof typeof SourceAccessType];
export interface SourceAccessConfiguration {
  Type?: SourceAccessType;
  URI?: string;
}
export declare const EventSourcePosition: {
  readonly AT_TIMESTAMP: "AT_TIMESTAMP";
  readonly LATEST: "LATEST";
  readonly TRIM_HORIZON: "TRIM_HORIZON";
};
export type EventSourcePosition =
  (typeof EventSourcePosition)[keyof typeof EventSourcePosition];
export interface CreateEventSourceMappingRequest {
  EventSourceArn?: string;
  FunctionName: string | undefined;
  Enabled?: boolean;
  BatchSize?: number;
  FilterCriteria?: FilterCriteria;
  MaximumBatchingWindowInSeconds?: number;
  ParallelizationFactor?: number;
  StartingPosition?: EventSourcePosition;
  StartingPositionTimestamp?: Date;
  DestinationConfig?: DestinationConfig;
  MaximumRecordAgeInSeconds?: number;
  BisectBatchOnFunctionError?: boolean;
  MaximumRetryAttempts?: number;
  TumblingWindowInSeconds?: number;
  Topics?: string[];
  Queues?: string[];
  SourceAccessConfigurations?: SourceAccessConfiguration[];
  SelfManagedEventSource?: SelfManagedEventSource;
  FunctionResponseTypes?: FunctionResponseType[];
  AmazonManagedKafkaEventSourceConfig?: AmazonManagedKafkaEventSourceConfig;
  SelfManagedKafkaEventSourceConfig?: SelfManagedKafkaEventSourceConfig;
  ScalingConfig?: ScalingConfig;
  DocumentDBEventSourceConfig?: DocumentDBEventSourceConfig;
}
export interface EventSourceMappingConfiguration {
  UUID?: string;
  StartingPosition?: EventSourcePosition;
  StartingPositionTimestamp?: Date;
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
  ParallelizationFactor?: number;
  EventSourceArn?: string;
  FilterCriteria?: FilterCriteria;
  FunctionArn?: string;
  LastModified?: Date;
  LastProcessingResult?: string;
  State?: string;
  StateTransitionReason?: string;
  DestinationConfig?: DestinationConfig;
  Topics?: string[];
  Queues?: string[];
  SourceAccessConfigurations?: SourceAccessConfiguration[];
  SelfManagedEventSource?: SelfManagedEventSource;
  MaximumRecordAgeInSeconds?: number;
  BisectBatchOnFunctionError?: boolean;
  MaximumRetryAttempts?: number;
  TumblingWindowInSeconds?: number;
  FunctionResponseTypes?: FunctionResponseType[];
  AmazonManagedKafkaEventSourceConfig?: AmazonManagedKafkaEventSourceConfig;
  SelfManagedKafkaEventSourceConfig?: SelfManagedKafkaEventSourceConfig;
  ScalingConfig?: ScalingConfig;
  DocumentDBEventSourceConfig?: DocumentDBEventSourceConfig;
}
export declare class CodeSigningConfigNotFoundException extends __BaseException {
  readonly name: "CodeSigningConfigNotFoundException";
  readonly $fault: "client";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<
      CodeSigningConfigNotFoundException,
      __BaseException
    >
  );
}
export declare class CodeStorageExceededException extends __BaseException {
  readonly name: "CodeStorageExceededException";
  readonly $fault: "client";
  Type?: string;
  constructor(
    opts: __ExceptionOptionType<CodeStorageExceededException, __BaseException>
  );
}
export declare class CodeVerificationFailedException extends __BaseException {
  readonly name: "CodeVerificationFailedException";
  readonly $fault: "client";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<
      CodeVerificationFailedException,
      __BaseException
    >
  );
}
export interface FunctionCode {
  ZipFile?: Uint8Array;
  S3Bucket?: string;
  S3Key?: string;
  S3ObjectVersion?: string;
  ImageUri?: string;
}
export interface DeadLetterConfig {
  TargetArn?: string;
}
export interface Environment {
  Variables?: Record<string, string>;
}
export interface EphemeralStorage {
  Size: number | undefined;
}
export interface FileSystemConfig {
  Arn: string | undefined;
  LocalMountPath: string | undefined;
}
export interface ImageConfig {
  EntryPoint?: string[];
  Command?: string[];
  WorkingDirectory?: string;
}
export declare const LogFormat: {
  readonly Json: "JSON";
  readonly Text: "Text";
};
export type LogFormat = (typeof LogFormat)[keyof typeof LogFormat];
export declare const SystemLogLevel: {
  readonly Debug: "DEBUG";
  readonly Info: "INFO";
  readonly Warn: "WARN";
};
export type SystemLogLevel =
  (typeof SystemLogLevel)[keyof typeof SystemLogLevel];
export interface LoggingConfig {
  LogFormat?: LogFormat;
  ApplicationLogLevel?: ApplicationLogLevel;
  SystemLogLevel?: SystemLogLevel;
  LogGroup?: string;
}
export declare const PackageType: {
  readonly Image: "Image";
  readonly Zip: "Zip";
};
export type PackageType = (typeof PackageType)[keyof typeof PackageType];
export declare const Runtime: {
  readonly dotnet6: "dotnet6";
  readonly dotnetcore10: "dotnetcore1.0";
  readonly dotnetcore20: "dotnetcore2.0";
  readonly dotnetcore21: "dotnetcore2.1";
  readonly dotnetcore31: "dotnetcore3.1";
  readonly go1x: "go1.x";
  readonly java11: "java11";
  readonly java17: "java17";
  readonly java21: "java21";
  readonly java8: "java8";
  readonly java8al2: "java8.al2";
  readonly nodejs: "nodejs";
  readonly nodejs10x: "nodejs10.x";
  readonly nodejs12x: "nodejs12.x";
  readonly nodejs14x: "nodejs14.x";
  readonly nodejs16x: "nodejs16.x";
  readonly nodejs18x: "nodejs18.x";
  readonly nodejs20x: "nodejs20.x";
  readonly nodejs43: "nodejs4.3";
  readonly nodejs43edge: "nodejs4.3-edge";
  readonly nodejs610: "nodejs6.10";
  readonly nodejs810: "nodejs8.10";
  readonly provided: "provided";
  readonly providedal2: "provided.al2";
  readonly providedal2023: "provided.al2023";
  readonly python27: "python2.7";
  readonly python310: "python3.10";
  readonly python311: "python3.11";
  readonly python312: "python3.12";
  readonly python36: "python3.6";
  readonly python37: "python3.7";
  readonly python38: "python3.8";
  readonly python39: "python3.9";
  readonly ruby25: "ruby2.5";
  readonly ruby27: "ruby2.7";
  readonly ruby32: "ruby3.2";
};
export type Runtime = (typeof Runtime)[keyof typeof Runtime];
export declare const SnapStartApplyOn: {
  readonly None: "None";
  readonly PublishedVersions: "PublishedVersions";
};
export type SnapStartApplyOn =
  (typeof SnapStartApplyOn)[keyof typeof SnapStartApplyOn];
export interface SnapStart {
  ApplyOn?: SnapStartApplyOn;
}
export declare const TracingMode: {
  readonly Active: "Active";
  readonly PassThrough: "PassThrough";
};
export type TracingMode = (typeof TracingMode)[keyof typeof TracingMode];
export interface TracingConfig {
  Mode?: TracingMode;
}
export interface VpcConfig {
  SubnetIds?: string[];
  SecurityGroupIds?: string[];
  Ipv6AllowedForDualStack?: boolean;
}
export interface CreateFunctionRequest {
  FunctionName: string | undefined;
  Runtime?: Runtime;
  Role: string | undefined;
  Handler?: string;
  Code: FunctionCode | undefined;
  Description?: string;
  Timeout?: number;
  MemorySize?: number;
  Publish?: boolean;
  VpcConfig?: VpcConfig;
  PackageType?: PackageType;
  DeadLetterConfig?: DeadLetterConfig;
  Environment?: Environment;
  KMSKeyArn?: string;
  TracingConfig?: TracingConfig;
  Tags?: Record<string, string>;
  Layers?: string[];
  FileSystemConfigs?: FileSystemConfig[];
  ImageConfig?: ImageConfig;
  CodeSigningConfigArn?: string;
  Architectures?: Architecture[];
  EphemeralStorage?: EphemeralStorage;
  SnapStart?: SnapStart;
  LoggingConfig?: LoggingConfig;
}
export interface EnvironmentError {
  ErrorCode?: string;
  Message?: string;
}
export interface EnvironmentResponse {
  Variables?: Record<string, string>;
  Error?: EnvironmentError;
}
export interface ImageConfigError {
  ErrorCode?: string;
  Message?: string;
}
export interface ImageConfigResponse {
  ImageConfig?: ImageConfig;
  Error?: ImageConfigError;
}
export declare const LastUpdateStatus: {
  readonly Failed: "Failed";
  readonly InProgress: "InProgress";
  readonly Successful: "Successful";
};
export type LastUpdateStatus =
  (typeof LastUpdateStatus)[keyof typeof LastUpdateStatus];
export declare const LastUpdateStatusReasonCode: {
  readonly DisabledKMSKey: "DisabledKMSKey";
  readonly EFSIOError: "EFSIOError";
  readonly EFSMountConnectivityError: "EFSMountConnectivityError";
  readonly EFSMountFailure: "EFSMountFailure";
  readonly EFSMountTimeout: "EFSMountTimeout";
  readonly EniLimitExceeded: "EniLimitExceeded";
  readonly FunctionError: "FunctionError";
  readonly ImageAccessDenied: "ImageAccessDenied";
  readonly ImageDeleted: "ImageDeleted";
  readonly InsufficientRolePermissions: "InsufficientRolePermissions";
  readonly InternalError: "InternalError";
  readonly InvalidConfiguration: "InvalidConfiguration";
  readonly InvalidImage: "InvalidImage";
  readonly InvalidRuntime: "InvalidRuntime";
  readonly InvalidSecurityGroup: "InvalidSecurityGroup";
  readonly InvalidStateKMSKey: "InvalidStateKMSKey";
  readonly InvalidSubnet: "InvalidSubnet";
  readonly InvalidZipFileException: "InvalidZipFileException";
  readonly KMSKeyAccessDenied: "KMSKeyAccessDenied";
  readonly KMSKeyNotFound: "KMSKeyNotFound";
  readonly SubnetOutOfIPAddresses: "SubnetOutOfIPAddresses";
};
export type LastUpdateStatusReasonCode =
  (typeof LastUpdateStatusReasonCode)[keyof typeof LastUpdateStatusReasonCode];
export interface Layer {
  Arn?: string;
  CodeSize?: number;
  SigningProfileVersionArn?: string;
  SigningJobArn?: string;
}
export interface RuntimeVersionError {
  ErrorCode?: string;
  Message?: string;
}
export interface RuntimeVersionConfig {
  RuntimeVersionArn?: string;
  Error?: RuntimeVersionError;
}
export declare const SnapStartOptimizationStatus: {
  readonly Off: "Off";
  readonly On: "On";
};
export type SnapStartOptimizationStatus =
  (typeof SnapStartOptimizationStatus)[keyof typeof SnapStartOptimizationStatus];
export interface SnapStartResponse {
  ApplyOn?: SnapStartApplyOn;
  OptimizationStatus?: SnapStartOptimizationStatus;
}
export declare const State: {
  readonly Active: "Active";
  readonly Failed: "Failed";
  readonly Inactive: "Inactive";
  readonly Pending: "Pending";
};
export type State = (typeof State)[keyof typeof State];
export declare const StateReasonCode: {
  readonly Creating: "Creating";
  readonly DisabledKMSKey: "DisabledKMSKey";
  readonly EFSIOError: "EFSIOError";
  readonly EFSMountConnectivityError: "EFSMountConnectivityError";
  readonly EFSMountFailure: "EFSMountFailure";
  readonly EFSMountTimeout: "EFSMountTimeout";
  readonly EniLimitExceeded: "EniLimitExceeded";
  readonly FunctionError: "FunctionError";
  readonly Idle: "Idle";
  readonly ImageAccessDenied: "ImageAccessDenied";
  readonly ImageDeleted: "ImageDeleted";
  readonly InsufficientRolePermissions: "InsufficientRolePermissions";
  readonly InternalError: "InternalError";
  readonly InvalidConfiguration: "InvalidConfiguration";
  readonly InvalidImage: "InvalidImage";
  readonly InvalidRuntime: "InvalidRuntime";
  readonly InvalidSecurityGroup: "InvalidSecurityGroup";
  readonly InvalidStateKMSKey: "InvalidStateKMSKey";
  readonly InvalidSubnet: "InvalidSubnet";
  readonly InvalidZipFileException: "InvalidZipFileException";
  readonly KMSKeyAccessDenied: "KMSKeyAccessDenied";
  readonly KMSKeyNotFound: "KMSKeyNotFound";
  readonly Restoring: "Restoring";
  readonly SubnetOutOfIPAddresses: "SubnetOutOfIPAddresses";
};
export type StateReasonCode =
  (typeof StateReasonCode)[keyof typeof StateReasonCode];
export interface TracingConfigResponse {
  Mode?: TracingMode;
}
export interface VpcConfigResponse {
  SubnetIds?: string[];
  SecurityGroupIds?: string[];
  VpcId?: string;
  Ipv6AllowedForDualStack?: boolean;
}
export interface FunctionConfiguration {
  FunctionName?: string;
  FunctionArn?: string;
  Runtime?: Runtime;
  Role?: string;
  Handler?: string;
  CodeSize?: number;
  Description?: string;
  Timeout?: number;
  MemorySize?: number;
  LastModified?: string;
  CodeSha256?: string;
  Version?: string;
  VpcConfig?: VpcConfigResponse;
  DeadLetterConfig?: DeadLetterConfig;
  Environment?: EnvironmentResponse;
  KMSKeyArn?: string;
  TracingConfig?: TracingConfigResponse;
  MasterArn?: string;
  RevisionId?: string;
  Layers?: Layer[];
  State?: State;
  StateReason?: string;
  StateReasonCode?: StateReasonCode;
  LastUpdateStatus?: LastUpdateStatus;
  LastUpdateStatusReason?: string;
  LastUpdateStatusReasonCode?: LastUpdateStatusReasonCode;
  FileSystemConfigs?: FileSystemConfig[];
  PackageType?: PackageType;
  ImageConfigResponse?: ImageConfigResponse;
  SigningProfileVersionArn?: string;
  SigningJobArn?: string;
  Architectures?: Architecture[];
  EphemeralStorage?: EphemeralStorage;
  SnapStart?: SnapStartResponse;
  RuntimeVersionConfig?: RuntimeVersionConfig;
  LoggingConfig?: LoggingConfig;
}
export declare class InvalidCodeSignatureException extends __BaseException {
  readonly name: "InvalidCodeSignatureException";
  readonly $fault: "client";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<InvalidCodeSignatureException, __BaseException>
  );
}
export interface Cors {
  AllowCredentials?: boolean;
  AllowHeaders?: string[];
  AllowMethods?: string[];
  AllowOrigins?: string[];
  ExposeHeaders?: string[];
  MaxAge?: number;
}
export declare const InvokeMode: {
  readonly BUFFERED: "BUFFERED";
  readonly RESPONSE_STREAM: "RESPONSE_STREAM";
};
export type InvokeMode = (typeof InvokeMode)[keyof typeof InvokeMode];
export interface CreateFunctionUrlConfigRequest {
  FunctionName: string | undefined;
  Qualifier?: string;
  AuthType: FunctionUrlAuthType | undefined;
  Cors?: Cors;
  InvokeMode?: InvokeMode;
}
export interface CreateFunctionUrlConfigResponse {
  FunctionUrl: string | undefined;
  FunctionArn: string | undefined;
  AuthType: FunctionUrlAuthType | undefined;
  Cors?: Cors;
  CreationTime: string | undefined;
  InvokeMode?: InvokeMode;
}
export interface DeleteAliasRequest {
  FunctionName: string | undefined;
  Name: string | undefined;
}
export interface DeleteCodeSigningConfigRequest {
  CodeSigningConfigArn: string | undefined;
}
export interface DeleteCodeSigningConfigResponse {}
export interface DeleteEventSourceMappingRequest {
  UUID: string | undefined;
}
export declare class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException";
  readonly $fault: "client";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<ResourceInUseException, __BaseException>
  );
}
export interface DeleteFunctionRequest {
  FunctionName: string | undefined;
  Qualifier?: string;
}
export interface DeleteFunctionCodeSigningConfigRequest {
  FunctionName: string | undefined;
}
export interface DeleteFunctionConcurrencyRequest {
  FunctionName: string | undefined;
}
export interface DeleteFunctionEventInvokeConfigRequest {
  FunctionName: string | undefined;
  Qualifier?: string;
}
export interface DeleteFunctionUrlConfigRequest {
  FunctionName: string | undefined;
  Qualifier?: string;
}
export interface DeleteLayerVersionRequest {
  LayerName: string | undefined;
  VersionNumber: number | undefined;
}
export interface DeleteProvisionedConcurrencyConfigRequest {
  FunctionName: string | undefined;
  Qualifier: string | undefined;
}
export interface GetAccountSettingsRequest {}
export interface GetAccountSettingsResponse {
  AccountLimit?: AccountLimit;
  AccountUsage?: AccountUsage;
}
export interface GetAliasRequest {
  FunctionName: string | undefined;
  Name: string | undefined;
}
export interface GetCodeSigningConfigRequest {
  CodeSigningConfigArn: string | undefined;
}
export interface GetCodeSigningConfigResponse {
  CodeSigningConfig: CodeSigningConfig | undefined;
}
export interface GetEventSourceMappingRequest {
  UUID: string | undefined;
}
export interface GetFunctionRequest {
  FunctionName: string | undefined;
  Qualifier?: string;
}
export interface FunctionCodeLocation {
  RepositoryType?: string;
  Location?: string;
  ImageUri?: string;
  ResolvedImageUri?: string;
}
export interface Concurrency {
  ReservedConcurrentExecutions?: number;
}
export interface GetFunctionResponse {
  Configuration?: FunctionConfiguration;
  Code?: FunctionCodeLocation;
  Tags?: Record<string, string>;
  Concurrency?: Concurrency;
}
export interface GetFunctionCodeSigningConfigRequest {
  FunctionName: string | undefined;
}
export interface GetFunctionCodeSigningConfigResponse {
  CodeSigningConfigArn: string | undefined;
  FunctionName: string | undefined;
}
export interface GetFunctionConcurrencyRequest {
  FunctionName: string | undefined;
}
export interface GetFunctionConcurrencyResponse {
  ReservedConcurrentExecutions?: number;
}
export interface GetFunctionConfigurationRequest {
  FunctionName: string | undefined;
  Qualifier?: string;
}
export interface FunctionEventInvokeConfig {
  LastModified?: Date;
  FunctionArn?: string;
  MaximumRetryAttempts?: number;
  MaximumEventAgeInSeconds?: number;
  DestinationConfig?: DestinationConfig;
}
export interface GetFunctionEventInvokeConfigRequest {
  FunctionName: string | undefined;
  Qualifier?: string;
}
export interface GetFunctionUrlConfigRequest {
  FunctionName: string | undefined;
  Qualifier?: string;
}
export interface GetFunctionUrlConfigResponse {
  FunctionUrl: string | undefined;
  FunctionArn: string | undefined;
  AuthType: FunctionUrlAuthType | undefined;
  Cors?: Cors;
  CreationTime: string | undefined;
  LastModifiedTime: string | undefined;
  InvokeMode?: InvokeMode;
}
export interface GetLayerVersionRequest {
  LayerName: string | undefined;
  VersionNumber: number | undefined;
}
export interface LayerVersionContentOutput {
  Location?: string;
  CodeSha256?: string;
  CodeSize?: number;
  SigningProfileVersionArn?: string;
  SigningJobArn?: string;
}
export interface GetLayerVersionResponse {
  Content?: LayerVersionContentOutput;
  LayerArn?: string;
  LayerVersionArn?: string;
  Description?: string;
  CreatedDate?: string;
  Version?: number;
  CompatibleRuntimes?: Runtime[];
  LicenseInfo?: string;
  CompatibleArchitectures?: Architecture[];
}
export interface GetLayerVersionByArnRequest {
  Arn: string | undefined;
}
export interface GetLayerVersionPolicyRequest {
  LayerName: string | undefined;
  VersionNumber: number | undefined;
}
export interface GetLayerVersionPolicyResponse {
  Policy?: string;
  RevisionId?: string;
}
export interface GetPolicyRequest {
  FunctionName: string | undefined;
  Qualifier?: string;
}
export interface GetPolicyResponse {
  Policy?: string;
  RevisionId?: string;
}
export interface GetProvisionedConcurrencyConfigRequest {
  FunctionName: string | undefined;
  Qualifier: string | undefined;
}
export declare const ProvisionedConcurrencyStatusEnum: {
  readonly FAILED: "FAILED";
  readonly IN_PROGRESS: "IN_PROGRESS";
  readonly READY: "READY";
};
export type ProvisionedConcurrencyStatusEnum =
  (typeof ProvisionedConcurrencyStatusEnum)[keyof typeof ProvisionedConcurrencyStatusEnum];
export interface GetProvisionedConcurrencyConfigResponse {
  RequestedProvisionedConcurrentExecutions?: number;
  AvailableProvisionedConcurrentExecutions?: number;
  AllocatedProvisionedConcurrentExecutions?: number;
  Status?: ProvisionedConcurrencyStatusEnum;
  StatusReason?: string;
  LastModified?: string;
}
export declare class ProvisionedConcurrencyConfigNotFoundException extends __BaseException {
  readonly name: "ProvisionedConcurrencyConfigNotFoundException";
  readonly $fault: "client";
  Type?: string;
  constructor(
    opts: __ExceptionOptionType<
      ProvisionedConcurrencyConfigNotFoundException,
      __BaseException
    >
  );
}
export interface GetRuntimeManagementConfigRequest {
  FunctionName: string | undefined;
  Qualifier?: string;
}
export declare const UpdateRuntimeOn: {
  readonly Auto: "Auto";
  readonly FunctionUpdate: "FunctionUpdate";
  readonly Manual: "Manual";
};
export type UpdateRuntimeOn =
  (typeof UpdateRuntimeOn)[keyof typeof UpdateRuntimeOn];
export interface GetRuntimeManagementConfigResponse {
  UpdateRuntimeOn?: UpdateRuntimeOn;
  RuntimeVersionArn?: string;
  FunctionArn?: string;
}
export declare class EC2AccessDeniedException extends __BaseException {
  readonly name: "EC2AccessDeniedException";
  readonly $fault: "server";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<EC2AccessDeniedException, __BaseException>
  );
}
export declare class EC2ThrottledException extends __BaseException {
  readonly name: "EC2ThrottledException";
  readonly $fault: "server";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<EC2ThrottledException, __BaseException>
  );
}
export declare class EC2UnexpectedException extends __BaseException {
  readonly name: "EC2UnexpectedException";
  readonly $fault: "server";
  Type?: string;
  Message?: string;
  EC2ErrorCode?: string;
  constructor(
    opts: __ExceptionOptionType<EC2UnexpectedException, __BaseException>
  );
}
export declare class EFSIOException extends __BaseException {
  readonly name: "EFSIOException";
  readonly $fault: "client";
  Type?: string;
  Message?: string;
  constructor(opts: __ExceptionOptionType<EFSIOException, __BaseException>);
}
export declare class EFSMountConnectivityException extends __BaseException {
  readonly name: "EFSMountConnectivityException";
  readonly $fault: "client";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<EFSMountConnectivityException, __BaseException>
  );
}
export declare class EFSMountFailureException extends __BaseException {
  readonly name: "EFSMountFailureException";
  readonly $fault: "client";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<EFSMountFailureException, __BaseException>
  );
}
export declare class EFSMountTimeoutException extends __BaseException {
  readonly name: "EFSMountTimeoutException";
  readonly $fault: "client";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<EFSMountTimeoutException, __BaseException>
  );
}
export declare class ENILimitReachedException extends __BaseException {
  readonly name: "ENILimitReachedException";
  readonly $fault: "server";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<ENILimitReachedException, __BaseException>
  );
}
export declare class InvalidRequestContentException extends __BaseException {
  readonly name: "InvalidRequestContentException";
  readonly $fault: "client";
  Type?: string;
  constructor(
    opts: __ExceptionOptionType<InvalidRequestContentException, __BaseException>
  );
}
export declare class InvalidRuntimeException extends __BaseException {
  readonly name: "InvalidRuntimeException";
  readonly $fault: "server";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<InvalidRuntimeException, __BaseException>
  );
}
export declare class InvalidSecurityGroupIDException extends __BaseException {
  readonly name: "InvalidSecurityGroupIDException";
  readonly $fault: "server";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<
      InvalidSecurityGroupIDException,
      __BaseException
    >
  );
}
export declare class InvalidSubnetIDException extends __BaseException {
  readonly name: "InvalidSubnetIDException";
  readonly $fault: "server";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<InvalidSubnetIDException, __BaseException>
  );
}
export declare class InvalidZipFileException extends __BaseException {
  readonly name: "InvalidZipFileException";
  readonly $fault: "server";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<InvalidZipFileException, __BaseException>
  );
}
export declare const InvocationType: {
  readonly DryRun: "DryRun";
  readonly Event: "Event";
  readonly RequestResponse: "RequestResponse";
};
export type InvocationType =
  (typeof InvocationType)[keyof typeof InvocationType];
export declare const LogType: {
  readonly None: "None";
  readonly Tail: "Tail";
};
export type LogType = (typeof LogType)[keyof typeof LogType];
export interface InvocationRequest {
  FunctionName: string | undefined;
  InvocationType?: InvocationType;
  LogType?: LogType;
  ClientContext?: string;
  Payload?: Uint8Array;
  Qualifier?: string;
}
export interface InvocationResponse {
  StatusCode?: number;
  FunctionError?: string;
  LogResult?: string;
  Payload?: Uint8Array;
  ExecutedVersion?: string;
}
export declare class KMSAccessDeniedException extends __BaseException {
  readonly name: "KMSAccessDeniedException";
  readonly $fault: "server";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<KMSAccessDeniedException, __BaseException>
  );
}
export declare class KMSDisabledException extends __BaseException {
  readonly name: "KMSDisabledException";
  readonly $fault: "server";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<KMSDisabledException, __BaseException>
  );
}
export declare class KMSInvalidStateException extends __BaseException {
  readonly name: "KMSInvalidStateException";
  readonly $fault: "server";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<KMSInvalidStateException, __BaseException>
  );
}
export declare class KMSNotFoundException extends __BaseException {
  readonly name: "KMSNotFoundException";
  readonly $fault: "server";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<KMSNotFoundException, __BaseException>
  );
}
export declare class RecursiveInvocationException extends __BaseException {
  readonly name: "RecursiveInvocationException";
  readonly $fault: "client";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<RecursiveInvocationException, __BaseException>
  );
}
export declare class RequestTooLargeException extends __BaseException {
  readonly name: "RequestTooLargeException";
  readonly $fault: "client";
  Type?: string;
  constructor(
    opts: __ExceptionOptionType<RequestTooLargeException, __BaseException>
  );
}
export declare class ResourceNotReadyException extends __BaseException {
  readonly name: "ResourceNotReadyException";
  readonly $fault: "server";
  Type?: string;
  constructor(
    opts: __ExceptionOptionType<ResourceNotReadyException, __BaseException>
  );
}
export declare class SnapStartException extends __BaseException {
  readonly name: "SnapStartException";
  readonly $fault: "client";
  Type?: string;
  Message?: string;
  constructor(opts: __ExceptionOptionType<SnapStartException, __BaseException>);
}
export declare class SnapStartNotReadyException extends __BaseException {
  readonly name: "SnapStartNotReadyException";
  readonly $fault: "client";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<SnapStartNotReadyException, __BaseException>
  );
}
export declare class SnapStartTimeoutException extends __BaseException {
  readonly name: "SnapStartTimeoutException";
  readonly $fault: "client";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<SnapStartTimeoutException, __BaseException>
  );
}
export declare class SubnetIPAddressLimitReachedException extends __BaseException {
  readonly name: "SubnetIPAddressLimitReachedException";
  readonly $fault: "server";
  Type?: string;
  Message?: string;
  constructor(
    opts: __ExceptionOptionType<
      SubnetIPAddressLimitReachedException,
      __BaseException
    >
  );
}
export declare class UnsupportedMediaTypeException extends __BaseException {
  readonly name: "UnsupportedMediaTypeException";
  readonly $fault: "client";
  Type?: string;
  constructor(
    opts: __ExceptionOptionType<UnsupportedMediaTypeException, __BaseException>
  );
}
export interface InvokeAsyncRequest {
  FunctionName: string | undefined;
  InvokeArgs: StreamingBlobTypes | undefined;
}
export interface InvokeAsyncResponse {
  Status?: number;
}
export declare const ResponseStreamingInvocationType: {
  readonly DryRun: "DryRun";
  readonly RequestResponse: "RequestResponse";
};
export type ResponseStreamingInvocationType =
  (typeof ResponseStreamingInvocationType)[keyof typeof ResponseStreamingInvocationType];
export interface InvokeWithResponseStreamRequest {
  FunctionName: string | undefined;
  InvocationType?: ResponseStreamingInvocationType;
  LogType?: LogType;
  ClientContext?: string;
  Qualifier?: string;
  Payload?: Uint8Array;
}
export interface InvokeWithResponseStreamCompleteEvent {
  ErrorCode?: string;
  ErrorDetails?: string;
  LogResult?: string;
}
export interface InvokeResponseStreamUpdate {
  Payload?: Uint8Array;
}
export type InvokeWithResponseStreamResponseEvent =
  | InvokeWithResponseStreamResponseEvent.InvokeCompleteMember
  | InvokeWithResponseStreamResponseEvent.PayloadChunkMember
  | InvokeWithResponseStreamResponseEvent.$UnknownMember;
export declare namespace InvokeWithResponseStreamResponseEvent {
  interface PayloadChunkMember {
    PayloadChunk: InvokeResponseStreamUpdate;
    InvokeComplete?: never;
    $unknown?: never;
  }
  interface InvokeCompleteMember {
    PayloadChunk?: never;
    InvokeComplete: InvokeWithResponseStreamCompleteEvent;
    $unknown?: never;
  }
  interface $UnknownMember {
    PayloadChunk?: never;
    InvokeComplete?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    PayloadChunk: (value: InvokeResponseStreamUpdate) => T;
    InvokeComplete: (value: InvokeWithResponseStreamCompleteEvent) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(
    value: InvokeWithResponseStreamResponseEvent,
    visitor: Visitor<T>
  ) => T;
}
export interface InvokeWithResponseStreamResponse {
  StatusCode?: number;
  ExecutedVersion?: string;
  EventStream?: AsyncIterable<InvokeWithResponseStreamResponseEvent>;
  ResponseStreamContentType?: string;
}
export interface ListAliasesRequest {
  FunctionName: string | undefined;
  FunctionVersion?: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListAliasesResponse {
  NextMarker?: string;
  Aliases?: AliasConfiguration[];
}
export interface ListCodeSigningConfigsRequest {
  Marker?: string;
  MaxItems?: number;
}
export interface ListCodeSigningConfigsResponse {
  NextMarker?: string;
  CodeSigningConfigs?: CodeSigningConfig[];
}
export interface ListEventSourceMappingsRequest {
  EventSourceArn?: string;
  FunctionName?: string;
  Marker?: string;
  MaxItems?: number;
}
export interface ListEventSourceMappingsResponse {
  NextMarker?: string;
  EventSourceMappings?: EventSourceMappingConfiguration[];
}
export interface ListFunctionEventInvokeConfigsRequest {
  FunctionName: string | undefined;
  Marker?: string;
  MaxItems?: number;
}
export interface ListFunctionEventInvokeConfigsResponse {
  FunctionEventInvokeConfigs?: FunctionEventInvokeConfig[];
  NextMarker?: string;
}
export declare const FunctionVersion: {
  readonly ALL: "ALL";
};
export type FunctionVersion =
  (typeof FunctionVersion)[keyof typeof FunctionVersion];
export interface ListFunctionsRequest {
  MasterRegion?: string;
  FunctionVersion?: FunctionVersion;
  Marker?: string;
  MaxItems?: number;
}
export interface ListFunctionsResponse {
  NextMarker?: string;
  Functions?: FunctionConfiguration[];
}
export interface ListFunctionsByCodeSigningConfigRequest {
  CodeSigningConfigArn: string | undefined;
  Marker?: string;
  MaxItems?: number;
}
export interface ListFunctionsByCodeSigningConfigResponse {
  NextMarker?: string;
  FunctionArns?: string[];
}
export interface ListFunctionUrlConfigsRequest {
  FunctionName: string | undefined;
  Marker?: string;
  MaxItems?: number;
}
export interface FunctionUrlConfig {
  FunctionUrl: string | undefined;
  FunctionArn: string | undefined;
  CreationTime: string | undefined;
  LastModifiedTime: string | undefined;
  Cors?: Cors;
  AuthType: FunctionUrlAuthType | undefined;
  InvokeMode?: InvokeMode;
}
export interface ListFunctionUrlConfigsResponse {
  FunctionUrlConfigs: FunctionUrlConfig[] | undefined;
  NextMarker?: string;
}
export interface ListLayersRequest {
  CompatibleRuntime?: Runtime;
  Marker?: string;
  MaxItems?: number;
  CompatibleArchitecture?: Architecture;
}
export interface LayerVersionsListItem {
  LayerVersionArn?: string;
  Version?: number;
  Description?: string;
  CreatedDate?: string;
  CompatibleRuntimes?: Runtime[];
  LicenseInfo?: string;
  CompatibleArchitectures?: Architecture[];
}
export interface LayersListItem {
  LayerName?: string;
  LayerArn?: string;
  LatestMatchingVersion?: LayerVersionsListItem;
}
export interface ListLayersResponse {
  NextMarker?: string;
  Layers?: LayersListItem[];
}
export interface ListLayerVersionsRequest {
  CompatibleRuntime?: Runtime;
  LayerName: string | undefined;
  Marker?: string;
  MaxItems?: number;
  CompatibleArchitecture?: Architecture;
}
export interface ListLayerVersionsResponse {
  NextMarker?: string;
  LayerVersions?: LayerVersionsListItem[];
}
export interface ListProvisionedConcurrencyConfigsRequest {
  FunctionName: string | undefined;
  Marker?: string;
  MaxItems?: number;
}
export interface ProvisionedConcurrencyConfigListItem {
  FunctionArn?: string;
  RequestedProvisionedConcurrentExecutions?: number;
  AvailableProvisionedConcurrentExecutions?: number;
  AllocatedProvisionedConcurrentExecutions?: number;
  Status?: ProvisionedConcurrencyStatusEnum;
  StatusReason?: string;
  LastModified?: string;
}
export interface ListProvisionedConcurrencyConfigsResponse {
  ProvisionedConcurrencyConfigs?: ProvisionedConcurrencyConfigListItem[];
  NextMarker?: string;
}
export interface ListTagsRequest {
  Resource: string | undefined;
}
export interface ListTagsResponse {
  Tags?: Record<string, string>;
}
export interface ListVersionsByFunctionRequest {
  FunctionName: string | undefined;
  Marker?: string;
  MaxItems?: number;
}
export interface ListVersionsByFunctionResponse {
  NextMarker?: string;
  Versions?: FunctionConfiguration[];
}
export interface LayerVersionContentInput {
  S3Bucket?: string;
  S3Key?: string;
  S3ObjectVersion?: string;
  ZipFile?: Uint8Array;
}
export interface PublishLayerVersionRequest {
  LayerName: string | undefined;
  Description?: string;
  Content: LayerVersionContentInput | undefined;
  CompatibleRuntimes?: Runtime[];
  LicenseInfo?: string;
  CompatibleArchitectures?: Architecture[];
}
export interface PublishLayerVersionResponse {
  Content?: LayerVersionContentOutput;
  LayerArn?: string;
  LayerVersionArn?: string;
  Description?: string;
  CreatedDate?: string;
  Version?: number;
  CompatibleRuntimes?: Runtime[];
  LicenseInfo?: string;
  CompatibleArchitectures?: Architecture[];
}
export interface PublishVersionRequest {
  FunctionName: string | undefined;
  CodeSha256?: string;
  Description?: string;
  RevisionId?: string;
}
export interface PutFunctionCodeSigningConfigRequest {
  CodeSigningConfigArn: string | undefined;
  FunctionName: string | undefined;
}
export interface PutFunctionCodeSigningConfigResponse {
  CodeSigningConfigArn: string | undefined;
  FunctionName: string | undefined;
}
export interface PutFunctionConcurrencyRequest {
  FunctionName: string | undefined;
  ReservedConcurrentExecutions: number | undefined;
}
export interface PutFunctionEventInvokeConfigRequest {
  FunctionName: string | undefined;
  Qualifier?: string;
  MaximumRetryAttempts?: number;
  MaximumEventAgeInSeconds?: number;
  DestinationConfig?: DestinationConfig;
}
export interface PutProvisionedConcurrencyConfigRequest {
  FunctionName: string | undefined;
  Qualifier: string | undefined;
  ProvisionedConcurrentExecutions: number | undefined;
}
export interface PutProvisionedConcurrencyConfigResponse {
  RequestedProvisionedConcurrentExecutions?: number;
  AvailableProvisionedConcurrentExecutions?: number;
  AllocatedProvisionedConcurrentExecutions?: number;
  Status?: ProvisionedConcurrencyStatusEnum;
  StatusReason?: string;
  LastModified?: string;
}
export interface PutRuntimeManagementConfigRequest {
  FunctionName: string | undefined;
  Qualifier?: string;
  UpdateRuntimeOn: UpdateRuntimeOn | undefined;
  RuntimeVersionArn?: string;
}
export interface PutRuntimeManagementConfigResponse {
  UpdateRuntimeOn: UpdateRuntimeOn | undefined;
  FunctionArn: string | undefined;
  RuntimeVersionArn?: string;
}
export interface RemoveLayerVersionPermissionRequest {
  LayerName: string | undefined;
  VersionNumber: number | undefined;
  StatementId: string | undefined;
  RevisionId?: string;
}
export interface RemovePermissionRequest {
  FunctionName: string | undefined;
  StatementId: string | undefined;
  Qualifier?: string;
  RevisionId?: string;
}
export interface TagResourceRequest {
  Resource: string | undefined;
  Tags: Record<string, string> | undefined;
}
export interface UntagResourceRequest {
  Resource: string | undefined;
  TagKeys: string[] | undefined;
}
export interface UpdateAliasRequest {
  FunctionName: string | undefined;
  Name: string | undefined;
  FunctionVersion?: string;
  Description?: string;
  RoutingConfig?: AliasRoutingConfiguration;
  RevisionId?: string;
}
export interface UpdateCodeSigningConfigRequest {
  CodeSigningConfigArn: string | undefined;
  Description?: string;
  AllowedPublishers?: AllowedPublishers;
  CodeSigningPolicies?: CodeSigningPolicies;
}
export interface UpdateCodeSigningConfigResponse {
  CodeSigningConfig: CodeSigningConfig | undefined;
}
export interface UpdateEventSourceMappingRequest {
  UUID: string | undefined;
  FunctionName?: string;
  Enabled?: boolean;
  BatchSize?: number;
  FilterCriteria?: FilterCriteria;
  MaximumBatchingWindowInSeconds?: number;
  DestinationConfig?: DestinationConfig;
  MaximumRecordAgeInSeconds?: number;
  BisectBatchOnFunctionError?: boolean;
  MaximumRetryAttempts?: number;
  ParallelizationFactor?: number;
  SourceAccessConfigurations?: SourceAccessConfiguration[];
  TumblingWindowInSeconds?: number;
  FunctionResponseTypes?: FunctionResponseType[];
  ScalingConfig?: ScalingConfig;
  DocumentDBEventSourceConfig?: DocumentDBEventSourceConfig;
}
export interface UpdateFunctionCodeRequest {
  FunctionName: string | undefined;
  ZipFile?: Uint8Array;
  S3Bucket?: string;
  S3Key?: string;
  S3ObjectVersion?: string;
  ImageUri?: string;
  Publish?: boolean;
  DryRun?: boolean;
  RevisionId?: string;
  Architectures?: Architecture[];
}
export interface UpdateFunctionConfigurationRequest {
  FunctionName: string | undefined;
  Role?: string;
  Handler?: string;
  Description?: string;
  Timeout?: number;
  MemorySize?: number;
  VpcConfig?: VpcConfig;
  Environment?: Environment;
  Runtime?: Runtime;
  DeadLetterConfig?: DeadLetterConfig;
  KMSKeyArn?: string;
  TracingConfig?: TracingConfig;
  RevisionId?: string;
  Layers?: string[];
  FileSystemConfigs?: FileSystemConfig[];
  ImageConfig?: ImageConfig;
  EphemeralStorage?: EphemeralStorage;
  SnapStart?: SnapStart;
  LoggingConfig?: LoggingConfig;
}
export interface UpdateFunctionEventInvokeConfigRequest {
  FunctionName: string | undefined;
  Qualifier?: string;
  MaximumRetryAttempts?: number;
  MaximumEventAgeInSeconds?: number;
  DestinationConfig?: DestinationConfig;
}
export interface UpdateFunctionUrlConfigRequest {
  FunctionName: string | undefined;
  Qualifier?: string;
  AuthType?: FunctionUrlAuthType;
  Cors?: Cors;
  InvokeMode?: InvokeMode;
}
export interface UpdateFunctionUrlConfigResponse {
  FunctionUrl: string | undefined;
  FunctionArn: string | undefined;
  AuthType: FunctionUrlAuthType | undefined;
  Cors?: Cors;
  CreationTime: string | undefined;
  LastModifiedTime: string | undefined;
  InvokeMode?: InvokeMode;
}
export declare const FunctionCodeFilterSensitiveLog: (obj: FunctionCode) => any;
export declare const EnvironmentFilterSensitiveLog: (obj: Environment) => any;
export declare const CreateFunctionRequestFilterSensitiveLog: (
  obj: CreateFunctionRequest
) => any;
export declare const EnvironmentErrorFilterSensitiveLog: (
  obj: EnvironmentError
) => any;
export declare const EnvironmentResponseFilterSensitiveLog: (
  obj: EnvironmentResponse
) => any;
export declare const ImageConfigErrorFilterSensitiveLog: (
  obj: ImageConfigError
) => any;
export declare const ImageConfigResponseFilterSensitiveLog: (
  obj: ImageConfigResponse
) => any;
export declare const RuntimeVersionErrorFilterSensitiveLog: (
  obj: RuntimeVersionError
) => any;
export declare const RuntimeVersionConfigFilterSensitiveLog: (
  obj: RuntimeVersionConfig
) => any;
export declare const FunctionConfigurationFilterSensitiveLog: (
  obj: FunctionConfiguration
) => any;
export declare const GetFunctionResponseFilterSensitiveLog: (
  obj: GetFunctionResponse
) => any;
export declare const InvocationRequestFilterSensitiveLog: (
  obj: InvocationRequest
) => any;
export declare const InvocationResponseFilterSensitiveLog: (
  obj: InvocationResponse
) => any;
export declare const InvokeAsyncRequestFilterSensitiveLog: (
  obj: InvokeAsyncRequest
) => any;
export declare const InvokeWithResponseStreamRequestFilterSensitiveLog: (
  obj: InvokeWithResponseStreamRequest
) => any;
export declare const InvokeResponseStreamUpdateFilterSensitiveLog: (
  obj: InvokeResponseStreamUpdate
) => any;
export declare const InvokeWithResponseStreamResponseEventFilterSensitiveLog: (
  obj: InvokeWithResponseStreamResponseEvent
) => any;
export declare const InvokeWithResponseStreamResponseFilterSensitiveLog: (
  obj: InvokeWithResponseStreamResponse
) => any;
export declare const ListFunctionsResponseFilterSensitiveLog: (
  obj: ListFunctionsResponse
) => any;
export declare const ListVersionsByFunctionResponseFilterSensitiveLog: (
  obj: ListVersionsByFunctionResponse
) => any;
export declare const LayerVersionContentInputFilterSensitiveLog: (
  obj: LayerVersionContentInput
) => any;
export declare const PublishLayerVersionRequestFilterSensitiveLog: (
  obj: PublishLayerVersionRequest
) => any;
export declare const UpdateFunctionCodeRequestFilterSensitiveLog: (
  obj: UpdateFunctionCodeRequest
) => any;
export declare const UpdateFunctionConfigurationRequestFilterSensitiveLog: (
  obj: UpdateFunctionConfigurationRequest
) => any;
