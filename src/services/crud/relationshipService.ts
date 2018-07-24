import { CrudService, ICrudOption } from '../crudService.pg'
import { Relationship } from '@/models/tables'

export class RelationshipService extends CrudService<typeof Relationship> {
    constructor() {
        super(Relationship)
    }

    async getFriends(params: {
        limit: number,
        page: number,
        user_id: string
    }) {
        let {
            user_id,
            limit,
            page
        } = params;

        limit = limit | 0;
        page = page | 1;

        let paramsQuery = {
            where: {
                $or: [
                    {
                        sender_id: user_id
                    },
                    {
                        receiver_id: user_id
                    }
                ]
            },
            offset: (page - 1) * limit,
            include: [
                {
                    association: 'history',
                    where: {
                        action: 'ACCEPTED'
                    }
                }
            ]
        } as any;

        if (limit != 0){
            paramsQuery.limit = limit;
        }

        return await Relationship.findAndCountAll(paramsQuery);
    }

}