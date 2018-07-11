import {
    errorService
} from '@/services'
import { config } from '@/config'
import * as admin from "firebase-admin";
import * as _ from 'lodash';

export class FirebaseService {
    constructor() {
        admin.initializeApp({
            credential: admin.credential.cert(config.firebase as admin.ServiceAccount),
            databaseURL: config.firebaseDbURL
        });
    }

    get messaging() {
        return admin.messaging()
    }
    async verifyIdToken(token: string) {
        try {
            return await admin.auth().verifyIdToken(token)
        } catch (err) {
            throw errorService.firebase.cannotDecodeToken(err)
        }
    }
    async createUser(params: {
        email: string, password: string
    }) {
        try {
            return await admin.auth().createUser({
                email: params.email,
                password: params.password
            });
        } catch (err) {
            throw err;
        }
    }
    async getUserByEmail(params: {
        email: string
    }) {
        try {
            return await admin.auth().getUserByEmail(params.email);
        } catch (err) {
            throw err;
        }
    }
    async getUserByPhone(params: {
        phone: string
    }) {
        try {
            return await admin.auth().getUserByPhoneNumber(params.phone);
        } catch (err) {
            throw err;
        };
    }

    async sendNotification(registation_id: string, message: string, options: any = {
        priority: "high",
        timeToLive: 2 * 30 * 60 * 24
    }) {
        var registrationToken = registation_id;
        var payload = {
            data: {
                message
            }
        };
        try {
            return await admin.messaging().sendToDevice(registrationToken, payload, options)
        } catch (error) {
            throw error;
        }
    }
}