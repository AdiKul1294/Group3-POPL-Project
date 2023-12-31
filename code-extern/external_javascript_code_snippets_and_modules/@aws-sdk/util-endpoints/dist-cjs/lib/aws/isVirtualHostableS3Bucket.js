"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isVirtualHostableS3Bucket = void 0;
const util_endpoints_1 = require("@smithy/util-endpoints");
const isIpAddress_1 = require("../isIpAddress");
const isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {
    if (allowSubDomains) {
        for (const label of value.split(".")) {
            if (!(0, exports.isVirtualHostableS3Bucket)(label)) {
                return false;
            }
        }
        return true;
    }
    if (!(0, util_endpoints_1.isValidHostLabel)(value)) {
        return false;
    }
    if (value.length < 3 || value.length > 63) {
        return false;
    }
    if (value !== value.toLowerCase()) {
        return false;
    }
    if ((0, isIpAddress_1.isIpAddress)(value)) {
        return false;
    }
    return true;
};
exports.isVirtualHostableS3Bucket = isVirtualHostableS3Bucket;
