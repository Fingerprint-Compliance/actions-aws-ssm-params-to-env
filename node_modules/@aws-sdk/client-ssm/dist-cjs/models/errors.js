"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidDeleteInventoryParametersException = exports.InvalidDocumentOperation = exports.AssociatedInstances = exports.AssociationDoesNotExist = exports.InvalidActivationId = exports.InvalidActivation = exports.ResourceDataSyncInvalidConfigurationException = exports.ResourceDataSyncCountExceededException = exports.ResourceDataSyncAlreadyExistsException = exports.OpsMetadataTooManyUpdatesException = exports.OpsMetadataLimitExceededException = exports.OpsMetadataInvalidArgumentException = exports.OpsMetadataAlreadyExistsException = exports.OpsItemAlreadyExistsException = exports.OpsItemAccessDeniedException = exports.ResourceLimitExceededException = exports.IdempotentParameterMismatch = exports.NoLongerSupportedException = exports.MaxDocumentSizeExceeded = exports.InvalidDocumentSchemaVersion = exports.InvalidDocumentContent = exports.DocumentLimitExceeded = exports.DocumentAlreadyExists = exports.UnsupportedPlatformType = exports.InvalidTargetMaps = exports.InvalidTarget = exports.InvalidTag = exports.InvalidSchedule = exports.InvalidOutputLocation = exports.InvalidDocumentVersion = exports.InvalidDocument = exports.AssociationLimitExceeded = exports.AssociationAlreadyExists = exports.InvalidParameters = exports.DoesNotExistException = exports.InvalidInstanceId = exports.InvalidCommandId = exports.DuplicateInstanceId = exports.OpsItemRelatedItemAlreadyExistsException = exports.OpsItemNotFoundException = exports.OpsItemLimitExceededException = exports.OpsItemInvalidParameterException = exports.OpsItemConflictException = exports.AlreadyExistsException = exports.TooManyUpdates = exports.TooManyTagsError = exports.InvalidResourceType = exports.InvalidResourceId = exports.InternalServerError = exports.AccessDeniedException = void 0;
exports.ItemContentMismatchException = exports.InvalidInventoryItemContextException = exports.CustomSchemaCountLimitExceededException = exports.TotalSizeLimitExceededException = exports.ItemSizeLimitExceededException = exports.InvalidItemContentException = exports.ComplianceTypeCountLimitExceededException = exports.DocumentPermissionLimit = exports.UnsupportedOperationException = exports.ParameterVersionLabelLimitExceeded = exports.ServiceSettingNotFound = exports.ParameterVersionNotFound = exports.InvalidKeyId = exports.InvalidResultAttributeException = exports.InvalidInventoryGroupException = exports.InvalidAggregatorException = exports.UnsupportedFeatureRequiredException = exports.InvocationDoesNotExist = exports.InvalidPluginName = exports.UnsupportedCalendarException = exports.InvalidDocumentType = exports.ValidationException = exports.ThrottlingException = exports.OpsItemRelatedItemAssociationNotFoundException = exports.InvalidFilterOption = exports.InvalidDeletionIdException = exports.InvalidInstancePropertyFilterValue = exports.InvalidInstanceInformationFilterValue = exports.UnsupportedOperatingSystem = exports.InvalidPermissionType = exports.AutomationExecutionNotFoundException = exports.InvalidFilterValue = exports.InvalidFilterKey = exports.AssociationExecutionDoesNotExist = exports.InvalidAssociationVersion = exports.InvalidNextToken = exports.InvalidFilter = exports.TargetInUseException = exports.ResourcePolicyNotFoundException = exports.ResourcePolicyInvalidParameterException = exports.ResourcePolicyConflictException = exports.ResourceNotFoundException = exports.MalformedResourcePolicyDocumentException = exports.ResourceDataSyncNotFoundException = exports.ResourceInUseException = exports.ParameterNotFound = exports.OpsMetadataNotFoundException = exports.InvalidTypeNameException = exports.InvalidOptionException = exports.InvalidInventoryRequestException = void 0;
exports.ResourceDataSyncConflictException = exports.OpsMetadataKeyLimitExceededException = exports.DuplicateDocumentVersionName = exports.DuplicateDocumentContent = exports.DocumentVersionLimitExceeded = exports.StatusUnchanged = exports.InvalidUpdate = exports.AssociationVersionLimitExceeded = exports.InvalidAutomationStatusUpdateException = exports.TargetNotConnected = exports.AutomationDefinitionNotApprovedException = exports.InvalidAutomationExecutionParametersException = exports.AutomationExecutionLimitExceededException = exports.AutomationDefinitionVersionNotFoundException = exports.AutomationDefinitionNotFoundException = exports.InvalidAssociation = exports.ServiceQuotaExceededException = exports.InvalidRole = exports.InvalidOutputFolder = exports.InvalidNotificationConfig = exports.InvalidAutomationSignalException = exports.AutomationStepNotFoundException = exports.FeatureNotAvailableException = exports.ResourcePolicyLimitExceededException = exports.UnsupportedParameterType = exports.PoliciesLimitExceededException = exports.ParameterPatternMismatchException = exports.ParameterMaxVersionLimitExceeded = exports.ParameterLimitExceeded = exports.ParameterAlreadyExists = exports.InvalidPolicyTypeException = exports.InvalidPolicyAttributeException = exports.InvalidAllowedPatternException = exports.IncompatiblePolicyException = exports.HierarchyTypeMismatchException = exports.HierarchyLevelLimitExceededException = exports.UnsupportedInventorySchemaVersionException = exports.UnsupportedInventoryItemContextException = exports.SubTypeCountLimitExceededException = void 0;
const SSMServiceException_1 = require("./SSMServiceException");
class AccessDeniedException extends SSMServiceException_1.SSMServiceException {
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
exports.AccessDeniedException = AccessDeniedException;
class InternalServerError extends SSMServiceException_1.SSMServiceException {
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
exports.InternalServerError = InternalServerError;
class InvalidResourceId extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidResourceId = InvalidResourceId;
class InvalidResourceType extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidResourceType = InvalidResourceType;
class TooManyTagsError extends SSMServiceException_1.SSMServiceException {
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
exports.TooManyTagsError = TooManyTagsError;
class TooManyUpdates extends SSMServiceException_1.SSMServiceException {
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
exports.TooManyUpdates = TooManyUpdates;
class AlreadyExistsException extends SSMServiceException_1.SSMServiceException {
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
exports.AlreadyExistsException = AlreadyExistsException;
class OpsItemConflictException extends SSMServiceException_1.SSMServiceException {
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
exports.OpsItemConflictException = OpsItemConflictException;
class OpsItemInvalidParameterException extends SSMServiceException_1.SSMServiceException {
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
exports.OpsItemInvalidParameterException = OpsItemInvalidParameterException;
class OpsItemLimitExceededException extends SSMServiceException_1.SSMServiceException {
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
exports.OpsItemLimitExceededException = OpsItemLimitExceededException;
class OpsItemNotFoundException extends SSMServiceException_1.SSMServiceException {
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
exports.OpsItemNotFoundException = OpsItemNotFoundException;
class OpsItemRelatedItemAlreadyExistsException extends SSMServiceException_1.SSMServiceException {
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
exports.OpsItemRelatedItemAlreadyExistsException = OpsItemRelatedItemAlreadyExistsException;
class DuplicateInstanceId extends SSMServiceException_1.SSMServiceException {
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
exports.DuplicateInstanceId = DuplicateInstanceId;
class InvalidCommandId extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidCommandId = InvalidCommandId;
class InvalidInstanceId extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidInstanceId = InvalidInstanceId;
class DoesNotExistException extends SSMServiceException_1.SSMServiceException {
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
exports.DoesNotExistException = DoesNotExistException;
class InvalidParameters extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidParameters = InvalidParameters;
class AssociationAlreadyExists extends SSMServiceException_1.SSMServiceException {
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
exports.AssociationAlreadyExists = AssociationAlreadyExists;
class AssociationLimitExceeded extends SSMServiceException_1.SSMServiceException {
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
exports.AssociationLimitExceeded = AssociationLimitExceeded;
class InvalidDocument extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidDocument = InvalidDocument;
class InvalidDocumentVersion extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidDocumentVersion = InvalidDocumentVersion;
class InvalidOutputLocation extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidOutputLocation = InvalidOutputLocation;
class InvalidSchedule extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidSchedule = InvalidSchedule;
class InvalidTag extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidTag = InvalidTag;
class InvalidTarget extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidTarget = InvalidTarget;
class InvalidTargetMaps extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidTargetMaps = InvalidTargetMaps;
class UnsupportedPlatformType extends SSMServiceException_1.SSMServiceException {
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
exports.UnsupportedPlatformType = UnsupportedPlatformType;
class DocumentAlreadyExists extends SSMServiceException_1.SSMServiceException {
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
exports.DocumentAlreadyExists = DocumentAlreadyExists;
class DocumentLimitExceeded extends SSMServiceException_1.SSMServiceException {
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
exports.DocumentLimitExceeded = DocumentLimitExceeded;
class InvalidDocumentContent extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidDocumentContent = InvalidDocumentContent;
class InvalidDocumentSchemaVersion extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidDocumentSchemaVersion = InvalidDocumentSchemaVersion;
class MaxDocumentSizeExceeded extends SSMServiceException_1.SSMServiceException {
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
exports.MaxDocumentSizeExceeded = MaxDocumentSizeExceeded;
class NoLongerSupportedException extends SSMServiceException_1.SSMServiceException {
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
exports.NoLongerSupportedException = NoLongerSupportedException;
class IdempotentParameterMismatch extends SSMServiceException_1.SSMServiceException {
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
exports.IdempotentParameterMismatch = IdempotentParameterMismatch;
class ResourceLimitExceededException extends SSMServiceException_1.SSMServiceException {
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
exports.ResourceLimitExceededException = ResourceLimitExceededException;
class OpsItemAccessDeniedException extends SSMServiceException_1.SSMServiceException {
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
exports.OpsItemAccessDeniedException = OpsItemAccessDeniedException;
class OpsItemAlreadyExistsException extends SSMServiceException_1.SSMServiceException {
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
exports.OpsItemAlreadyExistsException = OpsItemAlreadyExistsException;
class OpsMetadataAlreadyExistsException extends SSMServiceException_1.SSMServiceException {
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
exports.OpsMetadataAlreadyExistsException = OpsMetadataAlreadyExistsException;
class OpsMetadataInvalidArgumentException extends SSMServiceException_1.SSMServiceException {
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
exports.OpsMetadataInvalidArgumentException = OpsMetadataInvalidArgumentException;
class OpsMetadataLimitExceededException extends SSMServiceException_1.SSMServiceException {
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
exports.OpsMetadataLimitExceededException = OpsMetadataLimitExceededException;
class OpsMetadataTooManyUpdatesException extends SSMServiceException_1.SSMServiceException {
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
exports.OpsMetadataTooManyUpdatesException = OpsMetadataTooManyUpdatesException;
class ResourceDataSyncAlreadyExistsException extends SSMServiceException_1.SSMServiceException {
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
exports.ResourceDataSyncAlreadyExistsException = ResourceDataSyncAlreadyExistsException;
class ResourceDataSyncCountExceededException extends SSMServiceException_1.SSMServiceException {
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
exports.ResourceDataSyncCountExceededException = ResourceDataSyncCountExceededException;
class ResourceDataSyncInvalidConfigurationException extends SSMServiceException_1.SSMServiceException {
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
exports.ResourceDataSyncInvalidConfigurationException = ResourceDataSyncInvalidConfigurationException;
class InvalidActivation extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidActivation = InvalidActivation;
class InvalidActivationId extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidActivationId = InvalidActivationId;
class AssociationDoesNotExist extends SSMServiceException_1.SSMServiceException {
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
exports.AssociationDoesNotExist = AssociationDoesNotExist;
class AssociatedInstances extends SSMServiceException_1.SSMServiceException {
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
exports.AssociatedInstances = AssociatedInstances;
class InvalidDocumentOperation extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidDocumentOperation = InvalidDocumentOperation;
class InvalidDeleteInventoryParametersException extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidDeleteInventoryParametersException = InvalidDeleteInventoryParametersException;
class InvalidInventoryRequestException extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidInventoryRequestException = InvalidInventoryRequestException;
class InvalidOptionException extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidOptionException = InvalidOptionException;
class InvalidTypeNameException extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidTypeNameException = InvalidTypeNameException;
class OpsMetadataNotFoundException extends SSMServiceException_1.SSMServiceException {
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
exports.OpsMetadataNotFoundException = OpsMetadataNotFoundException;
class ParameterNotFound extends SSMServiceException_1.SSMServiceException {
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
exports.ParameterNotFound = ParameterNotFound;
class ResourceInUseException extends SSMServiceException_1.SSMServiceException {
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
exports.ResourceInUseException = ResourceInUseException;
class ResourceDataSyncNotFoundException extends SSMServiceException_1.SSMServiceException {
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
exports.ResourceDataSyncNotFoundException = ResourceDataSyncNotFoundException;
class MalformedResourcePolicyDocumentException extends SSMServiceException_1.SSMServiceException {
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
exports.MalformedResourcePolicyDocumentException = MalformedResourcePolicyDocumentException;
class ResourceNotFoundException extends SSMServiceException_1.SSMServiceException {
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
exports.ResourceNotFoundException = ResourceNotFoundException;
class ResourcePolicyConflictException extends SSMServiceException_1.SSMServiceException {
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
exports.ResourcePolicyConflictException = ResourcePolicyConflictException;
class ResourcePolicyInvalidParameterException extends SSMServiceException_1.SSMServiceException {
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
exports.ResourcePolicyInvalidParameterException = ResourcePolicyInvalidParameterException;
class ResourcePolicyNotFoundException extends SSMServiceException_1.SSMServiceException {
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
exports.ResourcePolicyNotFoundException = ResourcePolicyNotFoundException;
class TargetInUseException extends SSMServiceException_1.SSMServiceException {
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
exports.TargetInUseException = TargetInUseException;
class InvalidFilter extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidFilter = InvalidFilter;
class InvalidNextToken extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidNextToken = InvalidNextToken;
class InvalidAssociationVersion extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidAssociationVersion = InvalidAssociationVersion;
class AssociationExecutionDoesNotExist extends SSMServiceException_1.SSMServiceException {
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
exports.AssociationExecutionDoesNotExist = AssociationExecutionDoesNotExist;
class InvalidFilterKey extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidFilterKey = InvalidFilterKey;
class InvalidFilterValue extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidFilterValue = InvalidFilterValue;
class AutomationExecutionNotFoundException extends SSMServiceException_1.SSMServiceException {
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
exports.AutomationExecutionNotFoundException = AutomationExecutionNotFoundException;
class InvalidPermissionType extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidPermissionType = InvalidPermissionType;
class UnsupportedOperatingSystem extends SSMServiceException_1.SSMServiceException {
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
exports.UnsupportedOperatingSystem = UnsupportedOperatingSystem;
class InvalidInstanceInformationFilterValue extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidInstanceInformationFilterValue = InvalidInstanceInformationFilterValue;
class InvalidInstancePropertyFilterValue extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidInstancePropertyFilterValue = InvalidInstancePropertyFilterValue;
class InvalidDeletionIdException extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidDeletionIdException = InvalidDeletionIdException;
class InvalidFilterOption extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidFilterOption = InvalidFilterOption;
class OpsItemRelatedItemAssociationNotFoundException extends SSMServiceException_1.SSMServiceException {
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
exports.OpsItemRelatedItemAssociationNotFoundException = OpsItemRelatedItemAssociationNotFoundException;
class ThrottlingException extends SSMServiceException_1.SSMServiceException {
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
exports.ThrottlingException = ThrottlingException;
class ValidationException extends SSMServiceException_1.SSMServiceException {
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
exports.ValidationException = ValidationException;
class InvalidDocumentType extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidDocumentType = InvalidDocumentType;
class UnsupportedCalendarException extends SSMServiceException_1.SSMServiceException {
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
exports.UnsupportedCalendarException = UnsupportedCalendarException;
class InvalidPluginName extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidPluginName = InvalidPluginName;
class InvocationDoesNotExist extends SSMServiceException_1.SSMServiceException {
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
exports.InvocationDoesNotExist = InvocationDoesNotExist;
class UnsupportedFeatureRequiredException extends SSMServiceException_1.SSMServiceException {
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
exports.UnsupportedFeatureRequiredException = UnsupportedFeatureRequiredException;
class InvalidAggregatorException extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidAggregatorException = InvalidAggregatorException;
class InvalidInventoryGroupException extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidInventoryGroupException = InvalidInventoryGroupException;
class InvalidResultAttributeException extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidResultAttributeException = InvalidResultAttributeException;
class InvalidKeyId extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidKeyId = InvalidKeyId;
class ParameterVersionNotFound extends SSMServiceException_1.SSMServiceException {
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
exports.ParameterVersionNotFound = ParameterVersionNotFound;
class ServiceSettingNotFound extends SSMServiceException_1.SSMServiceException {
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
exports.ServiceSettingNotFound = ServiceSettingNotFound;
class ParameterVersionLabelLimitExceeded extends SSMServiceException_1.SSMServiceException {
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
exports.ParameterVersionLabelLimitExceeded = ParameterVersionLabelLimitExceeded;
class UnsupportedOperationException extends SSMServiceException_1.SSMServiceException {
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
exports.UnsupportedOperationException = UnsupportedOperationException;
class DocumentPermissionLimit extends SSMServiceException_1.SSMServiceException {
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
exports.DocumentPermissionLimit = DocumentPermissionLimit;
class ComplianceTypeCountLimitExceededException extends SSMServiceException_1.SSMServiceException {
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
exports.ComplianceTypeCountLimitExceededException = ComplianceTypeCountLimitExceededException;
class InvalidItemContentException extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidItemContentException = InvalidItemContentException;
class ItemSizeLimitExceededException extends SSMServiceException_1.SSMServiceException {
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
exports.ItemSizeLimitExceededException = ItemSizeLimitExceededException;
class TotalSizeLimitExceededException extends SSMServiceException_1.SSMServiceException {
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
exports.TotalSizeLimitExceededException = TotalSizeLimitExceededException;
class CustomSchemaCountLimitExceededException extends SSMServiceException_1.SSMServiceException {
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
exports.CustomSchemaCountLimitExceededException = CustomSchemaCountLimitExceededException;
class InvalidInventoryItemContextException extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidInventoryItemContextException = InvalidInventoryItemContextException;
class ItemContentMismatchException extends SSMServiceException_1.SSMServiceException {
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
exports.ItemContentMismatchException = ItemContentMismatchException;
class SubTypeCountLimitExceededException extends SSMServiceException_1.SSMServiceException {
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
exports.SubTypeCountLimitExceededException = SubTypeCountLimitExceededException;
class UnsupportedInventoryItemContextException extends SSMServiceException_1.SSMServiceException {
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
exports.UnsupportedInventoryItemContextException = UnsupportedInventoryItemContextException;
class UnsupportedInventorySchemaVersionException extends SSMServiceException_1.SSMServiceException {
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
exports.UnsupportedInventorySchemaVersionException = UnsupportedInventorySchemaVersionException;
class HierarchyLevelLimitExceededException extends SSMServiceException_1.SSMServiceException {
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
exports.HierarchyLevelLimitExceededException = HierarchyLevelLimitExceededException;
class HierarchyTypeMismatchException extends SSMServiceException_1.SSMServiceException {
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
exports.HierarchyTypeMismatchException = HierarchyTypeMismatchException;
class IncompatiblePolicyException extends SSMServiceException_1.SSMServiceException {
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
exports.IncompatiblePolicyException = IncompatiblePolicyException;
class InvalidAllowedPatternException extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidAllowedPatternException = InvalidAllowedPatternException;
class InvalidPolicyAttributeException extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidPolicyAttributeException = InvalidPolicyAttributeException;
class InvalidPolicyTypeException extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidPolicyTypeException = InvalidPolicyTypeException;
class ParameterAlreadyExists extends SSMServiceException_1.SSMServiceException {
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
exports.ParameterAlreadyExists = ParameterAlreadyExists;
class ParameterLimitExceeded extends SSMServiceException_1.SSMServiceException {
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
exports.ParameterLimitExceeded = ParameterLimitExceeded;
class ParameterMaxVersionLimitExceeded extends SSMServiceException_1.SSMServiceException {
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
exports.ParameterMaxVersionLimitExceeded = ParameterMaxVersionLimitExceeded;
class ParameterPatternMismatchException extends SSMServiceException_1.SSMServiceException {
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
exports.ParameterPatternMismatchException = ParameterPatternMismatchException;
class PoliciesLimitExceededException extends SSMServiceException_1.SSMServiceException {
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
exports.PoliciesLimitExceededException = PoliciesLimitExceededException;
class UnsupportedParameterType extends SSMServiceException_1.SSMServiceException {
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
exports.UnsupportedParameterType = UnsupportedParameterType;
class ResourcePolicyLimitExceededException extends SSMServiceException_1.SSMServiceException {
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
exports.ResourcePolicyLimitExceededException = ResourcePolicyLimitExceededException;
class FeatureNotAvailableException extends SSMServiceException_1.SSMServiceException {
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
exports.FeatureNotAvailableException = FeatureNotAvailableException;
class AutomationStepNotFoundException extends SSMServiceException_1.SSMServiceException {
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
exports.AutomationStepNotFoundException = AutomationStepNotFoundException;
class InvalidAutomationSignalException extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidAutomationSignalException = InvalidAutomationSignalException;
class InvalidNotificationConfig extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidNotificationConfig = InvalidNotificationConfig;
class InvalidOutputFolder extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidOutputFolder = InvalidOutputFolder;
class InvalidRole extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidRole = InvalidRole;
class ServiceQuotaExceededException extends SSMServiceException_1.SSMServiceException {
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
exports.ServiceQuotaExceededException = ServiceQuotaExceededException;
class InvalidAssociation extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidAssociation = InvalidAssociation;
class AutomationDefinitionNotFoundException extends SSMServiceException_1.SSMServiceException {
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
exports.AutomationDefinitionNotFoundException = AutomationDefinitionNotFoundException;
class AutomationDefinitionVersionNotFoundException extends SSMServiceException_1.SSMServiceException {
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
exports.AutomationDefinitionVersionNotFoundException = AutomationDefinitionVersionNotFoundException;
class AutomationExecutionLimitExceededException extends SSMServiceException_1.SSMServiceException {
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
exports.AutomationExecutionLimitExceededException = AutomationExecutionLimitExceededException;
class InvalidAutomationExecutionParametersException extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidAutomationExecutionParametersException = InvalidAutomationExecutionParametersException;
class AutomationDefinitionNotApprovedException extends SSMServiceException_1.SSMServiceException {
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
exports.AutomationDefinitionNotApprovedException = AutomationDefinitionNotApprovedException;
class TargetNotConnected extends SSMServiceException_1.SSMServiceException {
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
exports.TargetNotConnected = TargetNotConnected;
class InvalidAutomationStatusUpdateException extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidAutomationStatusUpdateException = InvalidAutomationStatusUpdateException;
class AssociationVersionLimitExceeded extends SSMServiceException_1.SSMServiceException {
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
exports.AssociationVersionLimitExceeded = AssociationVersionLimitExceeded;
class InvalidUpdate extends SSMServiceException_1.SSMServiceException {
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
exports.InvalidUpdate = InvalidUpdate;
class StatusUnchanged extends SSMServiceException_1.SSMServiceException {
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
exports.StatusUnchanged = StatusUnchanged;
class DocumentVersionLimitExceeded extends SSMServiceException_1.SSMServiceException {
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
exports.DocumentVersionLimitExceeded = DocumentVersionLimitExceeded;
class DuplicateDocumentContent extends SSMServiceException_1.SSMServiceException {
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
exports.DuplicateDocumentContent = DuplicateDocumentContent;
class DuplicateDocumentVersionName extends SSMServiceException_1.SSMServiceException {
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
exports.DuplicateDocumentVersionName = DuplicateDocumentVersionName;
class OpsMetadataKeyLimitExceededException extends SSMServiceException_1.SSMServiceException {
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
exports.OpsMetadataKeyLimitExceededException = OpsMetadataKeyLimitExceededException;
class ResourceDataSyncConflictException extends SSMServiceException_1.SSMServiceException {
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
exports.ResourceDataSyncConflictException = ResourceDataSyncConflictException;
