import { SSMServiceException as __BaseException } from "./SSMServiceException";
export class AccessDeniedException extends __BaseException {
    name = "AccessDeniedException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AccessDeniedException.prototype);
        this.Message = opts.Message;
    }
}
export class InternalServerError extends __BaseException {
    name = "InternalServerError";
    $fault = "server";
    Message;
    constructor(opts) {
        super({
            name: "InternalServerError",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, InternalServerError.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidResourceId extends __BaseException {
    name = "InvalidResourceId";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidResourceId",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidResourceId.prototype);
    }
}
export class InvalidResourceType extends __BaseException {
    name = "InvalidResourceType";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidResourceType",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidResourceType.prototype);
    }
}
export class TooManyTagsError extends __BaseException {
    name = "TooManyTagsError";
    $fault = "client";
    constructor(opts) {
        super({
            name: "TooManyTagsError",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TooManyTagsError.prototype);
    }
}
export class TooManyUpdates extends __BaseException {
    name = "TooManyUpdates";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "TooManyUpdates",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TooManyUpdates.prototype);
        this.Message = opts.Message;
    }
}
export class AlreadyExistsException extends __BaseException {
    name = "AlreadyExistsException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AlreadyExistsException.prototype);
        this.Message = opts.Message;
    }
}
export class OpsItemConflictException extends __BaseException {
    name = "OpsItemConflictException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "OpsItemConflictException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsItemConflictException.prototype);
        this.Message = opts.Message;
    }
}
export class OpsItemInvalidParameterException extends __BaseException {
    name = "OpsItemInvalidParameterException";
    $fault = "client";
    ParameterNames;
    Message;
    constructor(opts) {
        super({
            name: "OpsItemInvalidParameterException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsItemInvalidParameterException.prototype);
        this.ParameterNames = opts.ParameterNames;
        this.Message = opts.Message;
    }
}
export class OpsItemLimitExceededException extends __BaseException {
    name = "OpsItemLimitExceededException";
    $fault = "client";
    ResourceTypes;
    Limit;
    LimitType;
    Message;
    constructor(opts) {
        super({
            name: "OpsItemLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsItemLimitExceededException.prototype);
        this.ResourceTypes = opts.ResourceTypes;
        this.Limit = opts.Limit;
        this.LimitType = opts.LimitType;
        this.Message = opts.Message;
    }
}
export class OpsItemNotFoundException extends __BaseException {
    name = "OpsItemNotFoundException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "OpsItemNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsItemNotFoundException.prototype);
        this.Message = opts.Message;
    }
}
export class OpsItemRelatedItemAlreadyExistsException extends __BaseException {
    name = "OpsItemRelatedItemAlreadyExistsException";
    $fault = "client";
    Message;
    ResourceUri;
    OpsItemId;
    constructor(opts) {
        super({
            name: "OpsItemRelatedItemAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsItemRelatedItemAlreadyExistsException.prototype);
        this.Message = opts.Message;
        this.ResourceUri = opts.ResourceUri;
        this.OpsItemId = opts.OpsItemId;
    }
}
export class DuplicateInstanceId extends __BaseException {
    name = "DuplicateInstanceId";
    $fault = "client";
    constructor(opts) {
        super({
            name: "DuplicateInstanceId",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DuplicateInstanceId.prototype);
    }
}
export class InvalidCommandId extends __BaseException {
    name = "InvalidCommandId";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidCommandId",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidCommandId.prototype);
    }
}
export class InvalidInstanceId extends __BaseException {
    name = "InvalidInstanceId";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidInstanceId",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidInstanceId.prototype);
        this.Message = opts.Message;
    }
}
export class DoesNotExistException extends __BaseException {
    name = "DoesNotExistException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "DoesNotExistException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DoesNotExistException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidParameters extends __BaseException {
    name = "InvalidParameters";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidParameters",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidParameters.prototype);
        this.Message = opts.Message;
    }
}
export class AssociationAlreadyExists extends __BaseException {
    name = "AssociationAlreadyExists";
    $fault = "client";
    constructor(opts) {
        super({
            name: "AssociationAlreadyExists",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AssociationAlreadyExists.prototype);
    }
}
export class AssociationLimitExceeded extends __BaseException {
    name = "AssociationLimitExceeded";
    $fault = "client";
    constructor(opts) {
        super({
            name: "AssociationLimitExceeded",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AssociationLimitExceeded.prototype);
    }
}
export class InvalidDocument extends __BaseException {
    name = "InvalidDocument";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidDocument",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidDocument.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidDocumentVersion extends __BaseException {
    name = "InvalidDocumentVersion";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidDocumentVersion",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidDocumentVersion.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidOutputLocation extends __BaseException {
    name = "InvalidOutputLocation";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidOutputLocation",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidOutputLocation.prototype);
    }
}
export class InvalidSchedule extends __BaseException {
    name = "InvalidSchedule";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidSchedule",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidSchedule.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidTag extends __BaseException {
    name = "InvalidTag";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidTag",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidTag.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidTarget extends __BaseException {
    name = "InvalidTarget";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidTarget",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidTarget.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidTargetMaps extends __BaseException {
    name = "InvalidTargetMaps";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidTargetMaps",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidTargetMaps.prototype);
        this.Message = opts.Message;
    }
}
export class UnsupportedPlatformType extends __BaseException {
    name = "UnsupportedPlatformType";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "UnsupportedPlatformType",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnsupportedPlatformType.prototype);
        this.Message = opts.Message;
    }
}
export class DocumentAlreadyExists extends __BaseException {
    name = "DocumentAlreadyExists";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "DocumentAlreadyExists",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DocumentAlreadyExists.prototype);
        this.Message = opts.Message;
    }
}
export class DocumentLimitExceeded extends __BaseException {
    name = "DocumentLimitExceeded";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "DocumentLimitExceeded",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DocumentLimitExceeded.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidDocumentContent extends __BaseException {
    name = "InvalidDocumentContent";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidDocumentContent",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidDocumentContent.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidDocumentSchemaVersion extends __BaseException {
    name = "InvalidDocumentSchemaVersion";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidDocumentSchemaVersion",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidDocumentSchemaVersion.prototype);
        this.Message = opts.Message;
    }
}
export class MaxDocumentSizeExceeded extends __BaseException {
    name = "MaxDocumentSizeExceeded";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "MaxDocumentSizeExceeded",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, MaxDocumentSizeExceeded.prototype);
        this.Message = opts.Message;
    }
}
export class NoLongerSupportedException extends __BaseException {
    name = "NoLongerSupportedException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "NoLongerSupportedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, NoLongerSupportedException.prototype);
        this.Message = opts.Message;
    }
}
export class IdempotentParameterMismatch extends __BaseException {
    name = "IdempotentParameterMismatch";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "IdempotentParameterMismatch",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, IdempotentParameterMismatch.prototype);
        this.Message = opts.Message;
    }
}
export class ResourceLimitExceededException extends __BaseException {
    name = "ResourceLimitExceededException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ResourceLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
        this.Message = opts.Message;
    }
}
export class OpsItemAccessDeniedException extends __BaseException {
    name = "OpsItemAccessDeniedException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "OpsItemAccessDeniedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsItemAccessDeniedException.prototype);
        this.Message = opts.Message;
    }
}
export class OpsItemAlreadyExistsException extends __BaseException {
    name = "OpsItemAlreadyExistsException";
    $fault = "client";
    Message;
    OpsItemId;
    constructor(opts) {
        super({
            name: "OpsItemAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsItemAlreadyExistsException.prototype);
        this.Message = opts.Message;
        this.OpsItemId = opts.OpsItemId;
    }
}
export class OpsMetadataAlreadyExistsException extends __BaseException {
    name = "OpsMetadataAlreadyExistsException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "OpsMetadataAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsMetadataAlreadyExistsException.prototype);
    }
}
export class OpsMetadataInvalidArgumentException extends __BaseException {
    name = "OpsMetadataInvalidArgumentException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "OpsMetadataInvalidArgumentException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsMetadataInvalidArgumentException.prototype);
    }
}
export class OpsMetadataLimitExceededException extends __BaseException {
    name = "OpsMetadataLimitExceededException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "OpsMetadataLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsMetadataLimitExceededException.prototype);
    }
}
export class OpsMetadataTooManyUpdatesException extends __BaseException {
    name = "OpsMetadataTooManyUpdatesException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "OpsMetadataTooManyUpdatesException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsMetadataTooManyUpdatesException.prototype);
    }
}
export class ResourceDataSyncAlreadyExistsException extends __BaseException {
    name = "ResourceDataSyncAlreadyExistsException";
    $fault = "client";
    SyncName;
    constructor(opts) {
        super({
            name: "ResourceDataSyncAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceDataSyncAlreadyExistsException.prototype);
        this.SyncName = opts.SyncName;
    }
}
export class ResourceDataSyncCountExceededException extends __BaseException {
    name = "ResourceDataSyncCountExceededException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ResourceDataSyncCountExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceDataSyncCountExceededException.prototype);
        this.Message = opts.Message;
    }
}
export class ResourceDataSyncInvalidConfigurationException extends __BaseException {
    name = "ResourceDataSyncInvalidConfigurationException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ResourceDataSyncInvalidConfigurationException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceDataSyncInvalidConfigurationException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidActivation extends __BaseException {
    name = "InvalidActivation";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidActivation",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidActivation.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidActivationId extends __BaseException {
    name = "InvalidActivationId";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidActivationId",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidActivationId.prototype);
        this.Message = opts.Message;
    }
}
export class AssociationDoesNotExist extends __BaseException {
    name = "AssociationDoesNotExist";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AssociationDoesNotExist",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AssociationDoesNotExist.prototype);
        this.Message = opts.Message;
    }
}
export class AssociatedInstances extends __BaseException {
    name = "AssociatedInstances";
    $fault = "client";
    constructor(opts) {
        super({
            name: "AssociatedInstances",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AssociatedInstances.prototype);
    }
}
export class InvalidDocumentOperation extends __BaseException {
    name = "InvalidDocumentOperation";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidDocumentOperation",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidDocumentOperation.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidDeleteInventoryParametersException extends __BaseException {
    name = "InvalidDeleteInventoryParametersException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidDeleteInventoryParametersException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidDeleteInventoryParametersException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidInventoryRequestException extends __BaseException {
    name = "InvalidInventoryRequestException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidInventoryRequestException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidInventoryRequestException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidOptionException extends __BaseException {
    name = "InvalidOptionException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidOptionException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidOptionException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidTypeNameException extends __BaseException {
    name = "InvalidTypeNameException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidTypeNameException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidTypeNameException.prototype);
        this.Message = opts.Message;
    }
}
export class OpsMetadataNotFoundException extends __BaseException {
    name = "OpsMetadataNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "OpsMetadataNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsMetadataNotFoundException.prototype);
    }
}
export class ParameterNotFound extends __BaseException {
    name = "ParameterNotFound";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ParameterNotFound",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ParameterNotFound.prototype);
    }
}
export class ResourceInUseException extends __BaseException {
    name = "ResourceInUseException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ResourceInUseException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceInUseException.prototype);
        this.Message = opts.Message;
    }
}
export class ResourceDataSyncNotFoundException extends __BaseException {
    name = "ResourceDataSyncNotFoundException";
    $fault = "client";
    SyncName;
    SyncType;
    Message;
    constructor(opts) {
        super({
            name: "ResourceDataSyncNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceDataSyncNotFoundException.prototype);
        this.SyncName = opts.SyncName;
        this.SyncType = opts.SyncType;
        this.Message = opts.Message;
    }
}
export class MalformedResourcePolicyDocumentException extends __BaseException {
    name = "MalformedResourcePolicyDocumentException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "MalformedResourcePolicyDocumentException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, MalformedResourcePolicyDocumentException.prototype);
        this.Message = opts.Message;
    }
}
export class ResourceNotFoundException extends __BaseException {
    name = "ResourceNotFoundException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
        this.Message = opts.Message;
    }
}
export class ResourcePolicyConflictException extends __BaseException {
    name = "ResourcePolicyConflictException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ResourcePolicyConflictException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourcePolicyConflictException.prototype);
        this.Message = opts.Message;
    }
}
export class ResourcePolicyInvalidParameterException extends __BaseException {
    name = "ResourcePolicyInvalidParameterException";
    $fault = "client";
    ParameterNames;
    Message;
    constructor(opts) {
        super({
            name: "ResourcePolicyInvalidParameterException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourcePolicyInvalidParameterException.prototype);
        this.ParameterNames = opts.ParameterNames;
        this.Message = opts.Message;
    }
}
export class ResourcePolicyNotFoundException extends __BaseException {
    name = "ResourcePolicyNotFoundException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ResourcePolicyNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourcePolicyNotFoundException.prototype);
        this.Message = opts.Message;
    }
}
export class TargetInUseException extends __BaseException {
    name = "TargetInUseException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "TargetInUseException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TargetInUseException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidFilter extends __BaseException {
    name = "InvalidFilter";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidFilter",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidFilter.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidNextToken extends __BaseException {
    name = "InvalidNextToken";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidNextToken",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidNextToken.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidAssociationVersion extends __BaseException {
    name = "InvalidAssociationVersion";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidAssociationVersion",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidAssociationVersion.prototype);
        this.Message = opts.Message;
    }
}
export class AssociationExecutionDoesNotExist extends __BaseException {
    name = "AssociationExecutionDoesNotExist";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AssociationExecutionDoesNotExist",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AssociationExecutionDoesNotExist.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidFilterKey extends __BaseException {
    name = "InvalidFilterKey";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidFilterKey",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidFilterKey.prototype);
    }
}
export class InvalidFilterValue extends __BaseException {
    name = "InvalidFilterValue";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidFilterValue",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidFilterValue.prototype);
        this.Message = opts.Message;
    }
}
export class AutomationExecutionNotFoundException extends __BaseException {
    name = "AutomationExecutionNotFoundException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AutomationExecutionNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AutomationExecutionNotFoundException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidPermissionType extends __BaseException {
    name = "InvalidPermissionType";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidPermissionType",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidPermissionType.prototype);
        this.Message = opts.Message;
    }
}
export class UnsupportedOperatingSystem extends __BaseException {
    name = "UnsupportedOperatingSystem";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "UnsupportedOperatingSystem",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnsupportedOperatingSystem.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidInstanceInformationFilterValue extends __BaseException {
    name = "InvalidInstanceInformationFilterValue";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidInstanceInformationFilterValue",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidInstanceInformationFilterValue.prototype);
    }
}
export class InvalidInstancePropertyFilterValue extends __BaseException {
    name = "InvalidInstancePropertyFilterValue";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidInstancePropertyFilterValue",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidInstancePropertyFilterValue.prototype);
    }
}
export class InvalidDeletionIdException extends __BaseException {
    name = "InvalidDeletionIdException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidDeletionIdException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidDeletionIdException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidFilterOption extends __BaseException {
    name = "InvalidFilterOption";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidFilterOption",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidFilterOption.prototype);
    }
}
export class OpsItemRelatedItemAssociationNotFoundException extends __BaseException {
    name = "OpsItemRelatedItemAssociationNotFoundException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "OpsItemRelatedItemAssociationNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsItemRelatedItemAssociationNotFoundException.prototype);
        this.Message = opts.Message;
    }
}
export class ThrottlingException extends __BaseException {
    name = "ThrottlingException";
    $fault = "client";
    Message;
    QuotaCode;
    ServiceCode;
    constructor(opts) {
        super({
            name: "ThrottlingException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ThrottlingException.prototype);
        this.Message = opts.Message;
        this.QuotaCode = opts.QuotaCode;
        this.ServiceCode = opts.ServiceCode;
    }
}
export class ValidationException extends __BaseException {
    name = "ValidationException";
    $fault = "client";
    Message;
    ReasonCode;
    constructor(opts) {
        super({
            name: "ValidationException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ValidationException.prototype);
        this.Message = opts.Message;
        this.ReasonCode = opts.ReasonCode;
    }
}
export class InvalidDocumentType extends __BaseException {
    name = "InvalidDocumentType";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidDocumentType",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidDocumentType.prototype);
        this.Message = opts.Message;
    }
}
export class UnsupportedCalendarException extends __BaseException {
    name = "UnsupportedCalendarException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "UnsupportedCalendarException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnsupportedCalendarException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidPluginName extends __BaseException {
    name = "InvalidPluginName";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidPluginName",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidPluginName.prototype);
    }
}
export class InvocationDoesNotExist extends __BaseException {
    name = "InvocationDoesNotExist";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvocationDoesNotExist",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvocationDoesNotExist.prototype);
    }
}
export class UnsupportedFeatureRequiredException extends __BaseException {
    name = "UnsupportedFeatureRequiredException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "UnsupportedFeatureRequiredException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnsupportedFeatureRequiredException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidAggregatorException extends __BaseException {
    name = "InvalidAggregatorException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidAggregatorException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidAggregatorException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidInventoryGroupException extends __BaseException {
    name = "InvalidInventoryGroupException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidInventoryGroupException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidInventoryGroupException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidResultAttributeException extends __BaseException {
    name = "InvalidResultAttributeException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidResultAttributeException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidResultAttributeException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidKeyId extends __BaseException {
    name = "InvalidKeyId";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidKeyId",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidKeyId.prototype);
    }
}
export class ParameterVersionNotFound extends __BaseException {
    name = "ParameterVersionNotFound";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ParameterVersionNotFound",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ParameterVersionNotFound.prototype);
    }
}
export class ServiceSettingNotFound extends __BaseException {
    name = "ServiceSettingNotFound";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ServiceSettingNotFound",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ServiceSettingNotFound.prototype);
        this.Message = opts.Message;
    }
}
export class ParameterVersionLabelLimitExceeded extends __BaseException {
    name = "ParameterVersionLabelLimitExceeded";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ParameterVersionLabelLimitExceeded",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ParameterVersionLabelLimitExceeded.prototype);
    }
}
export class UnsupportedOperationException extends __BaseException {
    name = "UnsupportedOperationException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "UnsupportedOperationException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
        this.Message = opts.Message;
    }
}
export class DocumentPermissionLimit extends __BaseException {
    name = "DocumentPermissionLimit";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "DocumentPermissionLimit",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DocumentPermissionLimit.prototype);
        this.Message = opts.Message;
    }
}
export class ComplianceTypeCountLimitExceededException extends __BaseException {
    name = "ComplianceTypeCountLimitExceededException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ComplianceTypeCountLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ComplianceTypeCountLimitExceededException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidItemContentException extends __BaseException {
    name = "InvalidItemContentException";
    $fault = "client";
    TypeName;
    Message;
    constructor(opts) {
        super({
            name: "InvalidItemContentException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidItemContentException.prototype);
        this.TypeName = opts.TypeName;
        this.Message = opts.Message;
    }
}
export class ItemSizeLimitExceededException extends __BaseException {
    name = "ItemSizeLimitExceededException";
    $fault = "client";
    TypeName;
    Message;
    constructor(opts) {
        super({
            name: "ItemSizeLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ItemSizeLimitExceededException.prototype);
        this.TypeName = opts.TypeName;
        this.Message = opts.Message;
    }
}
export class TotalSizeLimitExceededException extends __BaseException {
    name = "TotalSizeLimitExceededException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "TotalSizeLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TotalSizeLimitExceededException.prototype);
        this.Message = opts.Message;
    }
}
export class CustomSchemaCountLimitExceededException extends __BaseException {
    name = "CustomSchemaCountLimitExceededException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "CustomSchemaCountLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, CustomSchemaCountLimitExceededException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidInventoryItemContextException extends __BaseException {
    name = "InvalidInventoryItemContextException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidInventoryItemContextException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidInventoryItemContextException.prototype);
        this.Message = opts.Message;
    }
}
export class ItemContentMismatchException extends __BaseException {
    name = "ItemContentMismatchException";
    $fault = "client";
    TypeName;
    Message;
    constructor(opts) {
        super({
            name: "ItemContentMismatchException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ItemContentMismatchException.prototype);
        this.TypeName = opts.TypeName;
        this.Message = opts.Message;
    }
}
export class SubTypeCountLimitExceededException extends __BaseException {
    name = "SubTypeCountLimitExceededException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "SubTypeCountLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, SubTypeCountLimitExceededException.prototype);
        this.Message = opts.Message;
    }
}
export class UnsupportedInventoryItemContextException extends __BaseException {
    name = "UnsupportedInventoryItemContextException";
    $fault = "client";
    TypeName;
    Message;
    constructor(opts) {
        super({
            name: "UnsupportedInventoryItemContextException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnsupportedInventoryItemContextException.prototype);
        this.TypeName = opts.TypeName;
        this.Message = opts.Message;
    }
}
export class UnsupportedInventorySchemaVersionException extends __BaseException {
    name = "UnsupportedInventorySchemaVersionException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "UnsupportedInventorySchemaVersionException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnsupportedInventorySchemaVersionException.prototype);
        this.Message = opts.Message;
    }
}
export class HierarchyLevelLimitExceededException extends __BaseException {
    name = "HierarchyLevelLimitExceededException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "HierarchyLevelLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, HierarchyLevelLimitExceededException.prototype);
    }
}
export class HierarchyTypeMismatchException extends __BaseException {
    name = "HierarchyTypeMismatchException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "HierarchyTypeMismatchException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, HierarchyTypeMismatchException.prototype);
    }
}
export class IncompatiblePolicyException extends __BaseException {
    name = "IncompatiblePolicyException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "IncompatiblePolicyException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, IncompatiblePolicyException.prototype);
    }
}
export class InvalidAllowedPatternException extends __BaseException {
    name = "InvalidAllowedPatternException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidAllowedPatternException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidAllowedPatternException.prototype);
    }
}
export class InvalidPolicyAttributeException extends __BaseException {
    name = "InvalidPolicyAttributeException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidPolicyAttributeException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidPolicyAttributeException.prototype);
    }
}
export class InvalidPolicyTypeException extends __BaseException {
    name = "InvalidPolicyTypeException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidPolicyTypeException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidPolicyTypeException.prototype);
    }
}
export class ParameterAlreadyExists extends __BaseException {
    name = "ParameterAlreadyExists";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ParameterAlreadyExists",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ParameterAlreadyExists.prototype);
    }
}
export class ParameterLimitExceeded extends __BaseException {
    name = "ParameterLimitExceeded";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ParameterLimitExceeded",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ParameterLimitExceeded.prototype);
    }
}
export class ParameterMaxVersionLimitExceeded extends __BaseException {
    name = "ParameterMaxVersionLimitExceeded";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ParameterMaxVersionLimitExceeded",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ParameterMaxVersionLimitExceeded.prototype);
    }
}
export class ParameterPatternMismatchException extends __BaseException {
    name = "ParameterPatternMismatchException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ParameterPatternMismatchException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ParameterPatternMismatchException.prototype);
    }
}
export class PoliciesLimitExceededException extends __BaseException {
    name = "PoliciesLimitExceededException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "PoliciesLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, PoliciesLimitExceededException.prototype);
    }
}
export class UnsupportedParameterType extends __BaseException {
    name = "UnsupportedParameterType";
    $fault = "client";
    constructor(opts) {
        super({
            name: "UnsupportedParameterType",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnsupportedParameterType.prototype);
    }
}
export class ResourcePolicyLimitExceededException extends __BaseException {
    name = "ResourcePolicyLimitExceededException";
    $fault = "client";
    Limit;
    LimitType;
    Message;
    constructor(opts) {
        super({
            name: "ResourcePolicyLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourcePolicyLimitExceededException.prototype);
        this.Limit = opts.Limit;
        this.LimitType = opts.LimitType;
        this.Message = opts.Message;
    }
}
export class FeatureNotAvailableException extends __BaseException {
    name = "FeatureNotAvailableException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "FeatureNotAvailableException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, FeatureNotAvailableException.prototype);
        this.Message = opts.Message;
    }
}
export class AutomationStepNotFoundException extends __BaseException {
    name = "AutomationStepNotFoundException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AutomationStepNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AutomationStepNotFoundException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidAutomationSignalException extends __BaseException {
    name = "InvalidAutomationSignalException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidAutomationSignalException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidAutomationSignalException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidNotificationConfig extends __BaseException {
    name = "InvalidNotificationConfig";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidNotificationConfig",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidNotificationConfig.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidOutputFolder extends __BaseException {
    name = "InvalidOutputFolder";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidOutputFolder",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidOutputFolder.prototype);
    }
}
export class InvalidRole extends __BaseException {
    name = "InvalidRole";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidRole",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidRole.prototype);
        this.Message = opts.Message;
    }
}
export class ServiceQuotaExceededException extends __BaseException {
    name = "ServiceQuotaExceededException";
    $fault = "client";
    Message;
    ResourceId;
    ResourceType;
    QuotaCode;
    ServiceCode;
    constructor(opts) {
        super({
            name: "ServiceQuotaExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
        this.Message = opts.Message;
        this.ResourceId = opts.ResourceId;
        this.ResourceType = opts.ResourceType;
        this.QuotaCode = opts.QuotaCode;
        this.ServiceCode = opts.ServiceCode;
    }
}
export class InvalidAssociation extends __BaseException {
    name = "InvalidAssociation";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidAssociation",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidAssociation.prototype);
        this.Message = opts.Message;
    }
}
export class AutomationDefinitionNotFoundException extends __BaseException {
    name = "AutomationDefinitionNotFoundException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AutomationDefinitionNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AutomationDefinitionNotFoundException.prototype);
        this.Message = opts.Message;
    }
}
export class AutomationDefinitionVersionNotFoundException extends __BaseException {
    name = "AutomationDefinitionVersionNotFoundException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AutomationDefinitionVersionNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AutomationDefinitionVersionNotFoundException.prototype);
        this.Message = opts.Message;
    }
}
export class AutomationExecutionLimitExceededException extends __BaseException {
    name = "AutomationExecutionLimitExceededException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AutomationExecutionLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AutomationExecutionLimitExceededException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidAutomationExecutionParametersException extends __BaseException {
    name = "InvalidAutomationExecutionParametersException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidAutomationExecutionParametersException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidAutomationExecutionParametersException.prototype);
        this.Message = opts.Message;
    }
}
export class AutomationDefinitionNotApprovedException extends __BaseException {
    name = "AutomationDefinitionNotApprovedException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AutomationDefinitionNotApprovedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AutomationDefinitionNotApprovedException.prototype);
        this.Message = opts.Message;
    }
}
export class TargetNotConnected extends __BaseException {
    name = "TargetNotConnected";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "TargetNotConnected",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TargetNotConnected.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidAutomationStatusUpdateException extends __BaseException {
    name = "InvalidAutomationStatusUpdateException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidAutomationStatusUpdateException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidAutomationStatusUpdateException.prototype);
        this.Message = opts.Message;
    }
}
export class AssociationVersionLimitExceeded extends __BaseException {
    name = "AssociationVersionLimitExceeded";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AssociationVersionLimitExceeded",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AssociationVersionLimitExceeded.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidUpdate extends __BaseException {
    name = "InvalidUpdate";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidUpdate",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidUpdate.prototype);
        this.Message = opts.Message;
    }
}
export class StatusUnchanged extends __BaseException {
    name = "StatusUnchanged";
    $fault = "client";
    constructor(opts) {
        super({
            name: "StatusUnchanged",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, StatusUnchanged.prototype);
    }
}
export class DocumentVersionLimitExceeded extends __BaseException {
    name = "DocumentVersionLimitExceeded";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "DocumentVersionLimitExceeded",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DocumentVersionLimitExceeded.prototype);
        this.Message = opts.Message;
    }
}
export class DuplicateDocumentContent extends __BaseException {
    name = "DuplicateDocumentContent";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "DuplicateDocumentContent",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DuplicateDocumentContent.prototype);
        this.Message = opts.Message;
    }
}
export class DuplicateDocumentVersionName extends __BaseException {
    name = "DuplicateDocumentVersionName";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "DuplicateDocumentVersionName",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DuplicateDocumentVersionName.prototype);
        this.Message = opts.Message;
    }
}
export class OpsMetadataKeyLimitExceededException extends __BaseException {
    name = "OpsMetadataKeyLimitExceededException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "OpsMetadataKeyLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpsMetadataKeyLimitExceededException.prototype);
    }
}
export class ResourceDataSyncConflictException extends __BaseException {
    name = "ResourceDataSyncConflictException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ResourceDataSyncConflictException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceDataSyncConflictException.prototype);
        this.Message = opts.Message;
    }
}
