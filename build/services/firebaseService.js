"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("@/services");
const config_1 = require("@/config");
const admin = require("firebase-admin");
class FirebaseService {
    constructor() {
        admin.initializeApp({
            credential: admin.credential.cert(config_1.config.firebase),
            databaseURL: config_1.config.firebaseDbURL
        });
    }
    get messaging() {
        return admin.messaging();
    }
    verifyIdToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield admin.auth().verifyIdToken(token);
            }
            catch (err) {
                throw services_1.errorService.firebase.cannotDecodeToken(err);
            }
        });
    }
    createUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield admin.auth().createUser({
                    email: params.email,
                    password: params.password
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
    getUserByEmail(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield admin.auth().getUserByEmail(params.email);
            }
            catch (err) {
                throw err;
            }
        });
    }
    getUserByPhone(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield admin.auth().getUserByPhoneNumber(params.phone);
            }
            catch (err) {
                throw err;
            }
            ;
        });
    }
    sendNotification(registation_id, message, options = {
        priority: "high",
        timeToLive: 2 * 30 * 60 * 24
    }) {
        return __awaiter(this, void 0, void 0, function* () {
            var registrationToken = registation_id;
            var payload = {
                data: {
                    message
                }
            };
            try {
                return yield admin.messaging().sendToDevice(registrationToken, payload, options);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=firebaseService.js.map