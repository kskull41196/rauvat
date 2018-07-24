import { CrudService, ICrudOption } from '../crudService.pg'
import {
    RelationshipHistory,
    Relationship,
    Following,
    sequelize
} from '@/models'
import { errorService } from '@/services';

export class RelationshipHistoryService extends CrudService<typeof RelationshipHistory> {
    constructor() {
        super(RelationshipHistory)
    }

    async friendRequest(params: any) {
        let {
            user_id,
            receiver_id
        } = params;

        const transaction = await sequelize.transaction();

        try {
            let relationship_history = await this.exec(RelationshipHistory.create({
                sender_id: user_id,
                receiver_id,
                action: 'PENDING'
            }, {
                    transaction
                }));

            let relationship = await this.exec(Relationship.create({
                sender_id: user_id,
                receiver_id,
                relationship_history_id: relationship_history.id
            }, {
                    transaction
                }));

            // let following = await this.exec(Following.create({
            //     user_id: user_id,
            //     follower_id: receiver_id,
            //     action: "DEFAULT",
            // }, {
            //         transaction
            //     }))

            transaction.commit();

            return {
                relationship,
                relationship_history,
                //following
            }
        }
        catch (e) {
            console.log(e);
            transaction.rollback();
            throw e;
        }


    }

    async acceptFriendRequest(params: any) {
        let {
            user_id,
            receiver_id
        } = params;

        const transaction = await sequelize.transaction();

        try {
            let relationship_history = await this.exec(RelationshipHistory.findOne({
                where: {
                    sender_id: user_id,
                    receiver_id,
                    action: 'PENDING'
                },
                include: [
                    {
                        association: 'relationship',
                        where: {
                            sender_id: user_id,
                            receiver_id
                        }
                    }
                ],
                transaction
            }))

            if (!relationship_history) throw errorService.database.recordNotFound("Relationship not found");


            await relationship_history.update({
                action: 'ACCEPTED'
            })

            transaction.commit();

            return relationship_history
        }
        catch (e) {
            console.log(e);
            transaction.rollback();
            throw e;
        }
    }

    async unfriend(params: any) {
        let {
            user_id,
            receiver_id
        } = params;

        return await this.exec(Relationship.destroy({
            where: {
                sender_id: user_id,
                receiver_id
            }
        }))
    }

    async block(params: any) {
        let {
            user_id,
            receiver_id
        } = params;

        const transaction = await sequelize.transaction();

        try {
            let relationship_history = await this.exec(RelationshipHistory.findOne({
                where: {
                    sender_id: user_id,
                    receiver_id,
                    action: 'PENDING'
                },
                include: [
                    {
                        association: 'relationship',
                        where: {
                            sender_id: user_id,
                            receiver_id
                        }
                    }
                ],
                transaction
            }))

            if (!relationship_history) throw errorService.database.recordNotFound("Relationship not found");


            await relationship_history.update({
                action: 'BLOCKED'
            })

            transaction.commit();

            return relationship_history
        }
        catch (e) {
            console.log(e);
            transaction.rollback();
            throw e;
        }
    }

}