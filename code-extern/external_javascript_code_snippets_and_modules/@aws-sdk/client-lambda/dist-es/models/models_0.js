import { SENSITIVE_STRING } from "@smithy/smithy-client";
import { LambdaServiceException as __BaseException } from "./LambdaServiceException";
export class InvalidParameterValueException extends __BaseException {
    constructor(opts) {
        super({
            name: "InvalidParameterValueException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidParameterValueException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
        this.Type = opts.Type;
    }
}
export class PolicyLengthExceededException extends __BaseException {
    constructor(opts) {
        super({
            name: "PolicyLengthExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "PolicyLengthExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, PolicyLengthExceededException.prototype);
        this.Type = opts.Type;
    }
}
export class PreconditionFailedException extends __BaseException {
    constructor(opts) {
        super({
            name: "PreconditionFailedException",
            $fault: "client",
            ...opts,
        });
        this.name = "PreconditionFailedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, PreconditionFailedException.prototype);
        this.Type = opts.Type;
    }
}
export class ResourceConflictException extends __BaseException {
    constructor(opts) {
        super({
            name: "ResourceConflictException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceConflictException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceConflictException.prototype);
        this.Type = opts.Type;
    }
}
export class ResourceNotFoundException extends __BaseException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export class ServiceException extends __BaseException {
    constructor(opts) {
        super({
            name: "ServiceException",
            $fault: "server",
            ...opts,
        });
        this.name = "ServiceException";
        this.$fault = "server";
        Object.setPrototypeOf(this, ServiceException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export const ThrottleReason = {
    CallerRateLimitExceeded: "CallerRateLimitExceeded",
    ConcurrentInvocationLimitExceeded: "ConcurrentInvocationLimitExceeded",
    ConcurrentSnapshotCreateLimitExceeded: "ConcurrentSnapshotCreateLimitExceeded",
    FunctionInvocationRateLimitExceeded: "FunctionInvocationRateLimitExceeded",
    ReservedFunctionConcurrentInvocationLimitExceeded: "ReservedFunctionConcurrentInvocationLimitExceeded",
    ReservedFunctionInvocationRateLimitExceeded: "ReservedFunctionInvocationRateLimitExceeded",
};
export class TooManyRequestsException extends __BaseException {
    constructor(opts) {
        super({
            name: "TooManyRequestsException",
            $fault: "client",
            ...opts,
        });
        this.name = "TooManyRequestsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TooManyRequestsException.prototype);
        this.retryAfterSeconds = opts.retryAfterSeconds;
        this.Type = opts.Type;
        this.Reason = opts.Reason;
    }
}
export const FunctionUrlAuthType = {
    AWS_IAM: "AWS_IAM",
    NONE: "NONE",
};
export const ApplicationLogLevel = {
    Debug: "DEBUG",
    Error: "ERROR",
    Fatal: "FATAL",
    Info: "INFO",
    Trace: "TRACE",
    Warn: "WARN",
};
export const Architecture = {
    arm64: "arm64",
    x86_64: "x86_64",
};
export const CodeSigningPolicy = {
    Enforce: "Enforce",
    Warn: "Warn",
};
export const FullDocument = {
    Default: "Default",
    UpdateLookup: "UpdateLookup",
};
export const FunctionResponseType = {
    ReportBatchItemFailures: "ReportBatchItemFailures",
};
export const EndPointType = {
    KAFKA_BOOTSTRAP_SERVERS: "KAFKA_BOOTSTRAP_SERVERS",
};
export const SourceAccessType = {
    BASIC_AUTH: "BASIC_AUTH",
    CLIENT_CERTIFICATE_TLS_AUTH: "CLIENT_CERTIFICATE_TLS_AUTH",
    SASL_SCRAM_256_AUTH: "SASL_SCRAM_256_AUTH",
    SASL_SCRAM_512_AUTH: "SASL_SCRAM_512_AUTH",
    SERVER_ROOT_CA_CERTIFICATE: "SERVER_ROOT_CA_CERTIFICATE",
    VIRTUAL_HOST: "VIRTUAL_HOST",
    VPC_SECURITY_GROUP: "VPC_SECURITY_GROUP",
    VPC_SUBNET: "VPC_SUBNET",
};
export const EventSourcePosition = {
    AT_TIMESTAMP: "AT_TIMESTAMP",
    LATEST: "LATEST",
    TRIM_HORIZON: "TRIM_HORIZON",
};
export class CodeSigningConfigNotFoundException extends __BaseException {
    constructor(opts) {
        super({
            name: "CodeSigningConfigNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "CodeSigningConfigNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, CodeSigningConfigNotFoundException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export class CodeStorageExceededException extends __BaseException {
    constructor(opts) {
        super({
            name: "CodeStorageExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "CodeStorageExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, CodeStorageExceededException.prototype);
        this.Type = opts.Type;
    }
}
export class CodeVerificationFailedException extends __BaseException {
    constructor(opts) {
        super({
            name: "CodeVerificationFailedException",
            $fault: "client",
            ...opts,
        });
        this.name = "CodeVerificationFailedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, CodeVerificationFailedException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export const LogFormat = {
    Json: "JSON",
    Text: "Text",
};
export const SystemLogLevel = {
    Debug: "DEBUG",
    Info: "INFO",
    Warn: "WARN",
};
export const PackageType = {
    Image: "Image",
    Zip: "Zip",
};
export const Runtime = {
    dotnet6: "dotnet6",
    dotnetcore10: "dotnetcore1.0",
    dotnetcore20: "dotnetcore2.0",
    dotnetcore21: "dotnetcore2.1",
    dotnetcore31: "dotnetcore3.1",
    go1x: "go1.x",
    java11: "java11",
    java17: "java17",
    java21: "java21",
    java8: "java8",
    java8al2: "java8.al2",
    nodejs: "nodejs",
    nodejs10x: "nodejs10.x",
    nodejs12x: "nodejs12.x",
    nodejs14x: "nodejs14.x",
    nodejs16x: "nodejs16.x",
    nodejs18x: "nodejs18.x",
    nodejs20x: "nodejs20.x",
    nodejs43: "nodejs4.3",
    nodejs43edge: "nodejs4.3-edge",
    nodejs610: "nodejs6.10",
    nodejs810: "nodejs8.10",
    provided: "provided",
    providedal2: "provided.al2",
    providedal2023: "provided.al2023",
    python27: "python2.7",
    python310: "python3.10",
    python311: "python3.11",
    python312: "python3.12",
    python36: "python3.6",
    python37: "python3.7",
    python38: "python3.8",
    python39: "python3.9",
    ruby25: "ruby2.5",
    ruby27: "ruby2.7",
    ruby32: "ruby3.2",
};
export const SnapStartApplyOn = {
    None: "None",
    PublishedVersions: "PublishedVersions",
};
export const TracingMode = {
    Active: "Active",
    PassThrough: "PassThrough",
};
export const LastUpdateStatus = {
    Failed: "Failed",
    InProgress: "InProgress",
    Successful: "Successful",
};
export const LastUpdateStatusReasonCode = {
    DisabledKMSKey: "DisabledKMSKey",
    EFSIOError: "EFSIOError",
    EFSMountConnectivityError: "EFSMountConnectivityError",
    EFSMountFailure: "EFSMountFailure",
    EFSMountTimeout: "EFSMountTimeout",
    EniLimitExceeded: "EniLimitExceeded",
    FunctionError: "FunctionError",
    ImageAccessDenied: "ImageAccessDenied",
    ImageDeleted: "ImageDeleted",
    InsufficientRolePermissions: "InsufficientRolePermissions",
    InternalError: "InternalError",
    InvalidConfiguration: "InvalidConfiguration",
    InvalidImage: "InvalidImage",
    InvalidRuntime: "InvalidRuntime",
    InvalidSecurityGroup: "InvalidSecurityGroup",
    InvalidStateKMSKey: "InvalidStateKMSKey",
    InvalidSubnet: "InvalidSubnet",
    InvalidZipFileException: "InvalidZipFileException",
    KMSKeyAccessDenied: "KMSKeyAccessDenied",
    KMSKeyNotFound: "KMSKeyNotFound",
    SubnetOutOfIPAddresses: "SubnetOutOfIPAddresses",
};
export const SnapStartOptimizationStatus = {
    Off: "Off",
    On: "On",
};
export const State = {
    Active: "Active",
    Failed: "Failed",
    Inactive: "Inactive",
    Pending: "Pending",
};
export const StateReasonCode = {
    Creating: "Creating",
    DisabledKMSKey: "DisabledKMSKey",
    EFSIOError: "EFSIOError",
    EFSMountConnectivityError: "EFSMountConnectivityError",
    EFSMountFailure: "EFSMountFailure",
    EFSMountTimeout: "EFSMountTimeout",
    EniLimitExceeded: "EniLimitExceeded",
    FunctionError: "FunctionError",
    Idle: "Idle",
    ImageAccessDenied: "ImageAccessDenied",
    ImageDeleted: "ImageDeleted",
    InsufficientRolePermissions: "InsufficientRolePermissions",
    InternalError: "InternalError",
    InvalidConfiguration: "InvalidConfiguration",
    InvalidImage: "InvalidImage",
    InvalidRuntime: "InvalidRuntime",
    InvalidSecurityGroup: "InvalidSecurityGroup",
    InvalidStateKMSKey: "InvalidStateKMSKey",
    InvalidSubnet: "InvalidSubnet",
    InvalidZipFileException: "InvalidZipFileException",
    KMSKeyAccessDenied: "KMSKeyAccessDenied",
    KMSKeyNotFound: "KMSKeyNotFound",
    Restoring: "Restoring",
    SubnetOutOfIPAddresses: "SubnetOutOfIPAddresses",
};
export class InvalidCodeSignatureException extends __BaseException {
    constructor(opts) {
        super({
            name: "InvalidCodeSignatureException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidCodeSignatureException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidCodeSignatureException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export const InvokeMode = {
    BUFFERED: "BUFFERED",
    RESPONSE_STREAM: "RESPONSE_STREAM",
};
export class ResourceInUseException extends __BaseException {
    constructor(opts) {
        super({
            name: "ResourceInUseException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceInUseException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceInUseException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export const ProvisionedConcurrencyStatusEnum = {
    FAILED: "FAILED",
    IN_PROGRESS: "IN_PROGRESS",
    READY: "READY",
};
export class ProvisionedConcurrencyConfigNotFoundException extends __BaseException {
    constructor(opts) {
        super({
            name: "ProvisionedConcurrencyConfigNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ProvisionedConcurrencyConfigNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ProvisionedConcurrencyConfigNotFoundException.prototype);
        this.Type = opts.Type;
    }
}
export const UpdateRuntimeOn = {
    Auto: "Auto",
    FunctionUpdate: "FunctionUpdate",
    Manual: "Manual",
};
export class EC2AccessDeniedException extends __BaseException {
    constructor(opts) {
        super({
            name: "EC2AccessDeniedException",
            $fault: "server",
            ...opts,
        });
        this.name = "EC2AccessDeniedException";
        this.$fault = "server";
        Object.setPrototypeOf(this, EC2AccessDeniedException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export class EC2ThrottledException extends __BaseException {
    constructor(opts) {
        super({
            name: "EC2ThrottledException",
            $fault: "server",
            ...opts,
        });
        this.name = "EC2ThrottledException";
        this.$fault = "server";
        Object.setPrototypeOf(this, EC2ThrottledException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export class EC2UnexpectedException extends __BaseException {
    constructor(opts) {
        super({
            name: "EC2UnexpectedException",
            $fault: "server",
            ...opts,
        });
        this.name = "EC2UnexpectedException";
        this.$fault = "server";
        Object.setPrototypeOf(this, EC2UnexpectedException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
        this.EC2ErrorCode = opts.EC2ErrorCode;
    }
}
export class EFSIOException extends __BaseException {
    constructor(opts) {
        super({
            name: "EFSIOException",
            $fault: "client",
            ...opts,
        });
        this.name = "EFSIOException";
        this.$fault = "client";
        Object.setPrototypeOf(this, EFSIOException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export class EFSMountConnectivityException extends __BaseException {
    constructor(opts) {
        super({
            name: "EFSMountConnectivityException",
            $fault: "client",
            ...opts,
        });
        this.name = "EFSMountConnectivityException";
        this.$fault = "client";
        Object.setPrototypeOf(this, EFSMountConnectivityException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export class EFSMountFailureException extends __BaseException {
    constructor(opts) {
        super({
            name: "EFSMountFailureException",
            $fault: "client",
            ...opts,
        });
        this.name = "EFSMountFailureException";
        this.$fault = "client";
        Object.setPrototypeOf(this, EFSMountFailureException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export class EFSMountTimeoutException extends __BaseException {
    constructor(opts) {
        super({
            name: "EFSMountTimeoutException",
            $fault: "client",
            ...opts,
        });
        this.name = "EFSMountTimeoutException";
        this.$fault = "client";
        Object.setPrototypeOf(this, EFSMountTimeoutException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export class ENILimitReachedException extends __BaseException {
    constructor(opts) {
        super({
            name: "ENILimitReachedException",
            $fault: "server",
            ...opts,
        });
        this.name = "ENILimitReachedException";
        this.$fault = "server";
        Object.setPrototypeOf(this, ENILimitReachedException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export class InvalidRequestContentException extends __BaseException {
    constructor(opts) {
        super({
            name: "InvalidRequestContentException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestContentException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestContentException.prototype);
        this.Type = opts.Type;
    }
}
export class InvalidRuntimeException extends __BaseException {
    constructor(opts) {
        super({
            name: "InvalidRuntimeException",
            $fault: "server",
            ...opts,
        });
        this.name = "InvalidRuntimeException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InvalidRuntimeException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export class InvalidSecurityGroupIDException extends __BaseException {
    constructor(opts) {
        super({
            name: "InvalidSecurityGroupIDException",
            $fault: "server",
            ...opts,
        });
        this.name = "InvalidSecurityGroupIDException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InvalidSecurityGroupIDException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export class InvalidSubnetIDException extends __BaseException {
    constructor(opts) {
        super({
            name: "InvalidSubnetIDException",
            $fault: "server",
            ...opts,
        });
        this.name = "InvalidSubnetIDException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InvalidSubnetIDException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export class InvalidZipFileException extends __BaseException {
    constructor(opts) {
        super({
            name: "InvalidZipFileException",
            $fault: "server",
            ...opts,
        });
        this.name = "InvalidZipFileException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InvalidZipFileException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export const InvocationType = {
    DryRun: "DryRun",
    Event: "Event",
    RequestResponse: "RequestResponse",
};
export const LogType = {
    None: "None",
    Tail: "Tail",
};
export class KMSAccessDeniedException extends __BaseException {
    constructor(opts) {
        super({
            name: "KMSAccessDeniedException",
            $fault: "server",
            ...opts,
        });
        this.name = "KMSAccessDeniedException";
        this.$fault = "server";
        Object.setPrototypeOf(this, KMSAccessDeniedException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export class KMSDisabledException extends __BaseException {
    constructor(opts) {
        super({
            name: "KMSDisabledException",
            $fault: "server",
            ...opts,
        });
        this.name = "KMSDisabledException";
        this.$fault = "server";
        Object.setPrototypeOf(this, KMSDisabledException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export class KMSInvalidStateException extends __BaseException {
    constructor(opts) {
        super({
            name: "KMSInvalidStateException",
            $fault: "server",
            ...opts,
        });
        this.name = "KMSInvalidStateException";
        this.$fault = "server";
        Object.setPrototypeOf(this, KMSInvalidStateException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export class KMSNotFoundException extends __BaseException {
    constructor(opts) {
        super({
            name: "KMSNotFoundException",
            $fault: "server",
            ...opts,
        });
        this.name = "KMSNotFoundException";
        this.$fault = "server";
        Object.setPrototypeOf(this, KMSNotFoundException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export class RecursiveInvocationException extends __BaseException {
    constructor(opts) {
        super({
            name: "RecursiveInvocationException",
            $fault: "client",
            ...opts,
        });
        this.name = "RecursiveInvocationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, RecursiveInvocationException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export class RequestTooLargeException extends __BaseException {
    constructor(opts) {
        super({
            name: "RequestTooLargeException",
            $fault: "client",
            ...opts,
        });
        this.name = "RequestTooLargeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, RequestTooLargeException.prototype);
        this.Type = opts.Type;
    }
}
export class ResourceNotReadyException extends __BaseException {
    constructor(opts) {
        super({
            name: "ResourceNotReadyException",
            $fault: "server",
            ...opts,
        });
        this.name = "ResourceNotReadyException";
        this.$fault = "server";
        Object.setPrototypeOf(this, ResourceNotReadyException.prototype);
        this.Type = opts.Type;
    }
}
export class SnapStartException extends __BaseException {
    constructor(opts) {
        super({
            name: "SnapStartException",
            $fault: "client",
            ...opts,
        });
        this.name = "SnapStartException";
        this.$fault = "client";
        Object.setPrototypeOf(this, SnapStartException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export class SnapStartNotReadyException extends __BaseException {
    constructor(opts) {
        super({
            name: "SnapStartNotReadyException",
            $fault: "client",
            ...opts,
        });
        this.name = "SnapStartNotReadyException";
        this.$fault = "client";
        Object.setPrototypeOf(this, SnapStartNotReadyException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export class SnapStartTimeoutException extends __BaseException {
    constructor(opts) {
        super({
            name: "SnapStartTimeoutException",
            $fault: "client",
            ...opts,
        });
        this.name = "SnapStartTimeoutException";
        this.$fault = "client";
        Object.setPrototypeOf(this, SnapStartTimeoutException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export class SubnetIPAddressLimitReachedException extends __BaseException {
    constructor(opts) {
        super({
            name: "SubnetIPAddressLimitReachedException",
            $fault: "server",
            ...opts,
        });
        this.name = "SubnetIPAddressLimitReachedException";
        this.$fault = "server";
        Object.setPrototypeOf(this, SubnetIPAddressLimitReachedException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
export class UnsupportedMediaTypeException extends __BaseException {
    constructor(opts) {
        super({
            name: "UnsupportedMediaTypeException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnsupportedMediaTypeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnsupportedMediaTypeException.prototype);
        this.Type = opts.Type;
    }
}
export const ResponseStreamingInvocationType = {
    DryRun: "DryRun",
    RequestResponse: "RequestResponse",
};
export var InvokeWithResponseStreamResponseEvent;
(function (InvokeWithResponseStreamResponseEvent) {
    InvokeWithResponseStreamResponseEvent.visit = (value, visitor) => {
        if (value.PayloadChunk !== undefined)
            return visitor.PayloadChunk(value.PayloadChunk);
        if (value.InvokeComplete !== undefined)
            return visitor.InvokeComplete(value.InvokeComplete);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(InvokeWithResponseStreamResponseEvent || (InvokeWithResponseStreamResponseEvent = {}));
export const FunctionVersion = {
    ALL: "ALL",
};
export const FunctionCodeFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ZipFile && { ZipFile: SENSITIVE_STRING }),
});
export const EnvironmentFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Variables && { Variables: SENSITIVE_STRING }),
});
export const CreateFunctionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Code && { Code: FunctionCodeFilterSensitiveLog(obj.Code) }),
    ...(obj.Environment && { Environment: EnvironmentFilterSensitiveLog(obj.Environment) }),
});
export const EnvironmentErrorFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Message && { Message: SENSITIVE_STRING }),
});
export const EnvironmentResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Variables && { Variables: SENSITIVE_STRING }),
    ...(obj.Error && { Error: EnvironmentErrorFilterSensitiveLog(obj.Error) }),
});
export const ImageConfigErrorFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Message && { Message: SENSITIVE_STRING }),
});
export const ImageConfigResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Error && { Error: ImageConfigErrorFilterSensitiveLog(obj.Error) }),
});
export const RuntimeVersionErrorFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Message && { Message: SENSITIVE_STRING }),
});
export const RuntimeVersionConfigFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Error && { Error: RuntimeVersionErrorFilterSensitiveLog(obj.Error) }),
});
export const FunctionConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Environment && { Environment: EnvironmentResponseFilterSensitiveLog(obj.Environment) }),
    ...(obj.ImageConfigResponse && {
        ImageConfigResponse: ImageConfigResponseFilterSensitiveLog(obj.ImageConfigResponse),
    }),
    ...(obj.RuntimeVersionConfig && {
        RuntimeVersionConfig: RuntimeVersionConfigFilterSensitiveLog(obj.RuntimeVersionConfig),
    }),
});
export const GetFunctionResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Configuration && { Configuration: FunctionConfigurationFilterSensitiveLog(obj.Configuration) }),
});
export const InvocationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Payload && { Payload: SENSITIVE_STRING }),
});
export const InvocationResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Payload && { Payload: SENSITIVE_STRING }),
});
export const InvokeAsyncRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const InvokeWithResponseStreamRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Payload && { Payload: SENSITIVE_STRING }),
});
export const InvokeResponseStreamUpdateFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Payload && { Payload: SENSITIVE_STRING }),
});
export const InvokeWithResponseStreamResponseEventFilterSensitiveLog = (obj) => {
    if (obj.PayloadChunk !== undefined)
        return { PayloadChunk: InvokeResponseStreamUpdateFilterSensitiveLog(obj.PayloadChunk) };
    if (obj.InvokeComplete !== undefined)
        return { InvokeComplete: obj.InvokeComplete };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
export const InvokeWithResponseStreamResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.EventStream && { EventStream: "STREAMING_CONTENT" }),
});
export const ListFunctionsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Functions && { Functions: obj.Functions.map((item) => FunctionConfigurationFilterSensitiveLog(item)) }),
});
export const ListVersionsByFunctionResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Versions && { Versions: obj.Versions.map((item) => FunctionConfigurationFilterSensitiveLog(item)) }),
});
export const LayerVersionContentInputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ZipFile && { ZipFile: SENSITIVE_STRING }),
});
export const PublishLayerVersionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Content && { Content: LayerVersionContentInputFilterSensitiveLog(obj.Content) }),
});
export const UpdateFunctionCodeRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ZipFile && { ZipFile: SENSITIVE_STRING }),
});
export const UpdateFunctionConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Environment && { Environment: EnvironmentFilterSensitiveLog(obj.Environment) }),
});
