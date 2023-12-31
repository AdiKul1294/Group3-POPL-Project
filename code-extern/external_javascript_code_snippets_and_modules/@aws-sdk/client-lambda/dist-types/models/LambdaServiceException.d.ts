import { ServiceException as __ServiceException, ServiceExceptionOptions as __ServiceExceptionOptions } from "@smithy/smithy-client";
export { __ServiceException, __ServiceExceptionOptions };
/**
 * @public
 *
 * Base exception class for all service exceptions from Lambda service.
 */
export declare class LambdaServiceException extends __ServiceException {
    /**
     * @internal
     */
    constructor(options: __ServiceExceptionOptions);
}
