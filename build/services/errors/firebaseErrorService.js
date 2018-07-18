"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class FirebaseException extends base_1.BaseError {
    constructor(key, message, code) {
        super({
            code: code || 403,
            type: `firebase_exception_${key}`,
            message
        });
    }
}
class FirebaseErrorService {
    cannotCreateToken(error) {
        return new FirebaseException('create_token', error.message);
    }
    cannotDecodeToken(error) {
        return new FirebaseException('decode_token', error.message);
    }
    cannotSendMessageToDevice(error) {
        return new FirebaseException('send_message_device', error.message);
    }
    cannotSendMessageToDeviceGroup(error) {
        return new FirebaseException('send_message_device_group', error.message);
    }
    cannotSendMessageToTopic(error) {
        return new FirebaseException('send_message_topic', error.message);
    }
    cannotSendMessageToCondition(error) {
        return new FirebaseException('send_message_condition', error.message);
    }
    cannotSubscribeToTopic(error) {
        return new FirebaseException('subscribe_topic', error.message);
    }
    cannotUnsubscribeFromTopic(error) {
        return new FirebaseException('unsubscribe_topic', error.message);
    }
    cannotCreateAccount(error) {
        return new FirebaseException(error.code, error.message);
    }
}
exports.FirebaseErrorService = FirebaseErrorService;
//# sourceMappingURL=firebaseErrorService.js.map