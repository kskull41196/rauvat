import { CrudController } from '../crudController'
import { ICrudOption, errorService, relationshipHistoryService } from '@/services'


export class RelationshipHistoryController extends CrudController<typeof relationshipHistoryService> {
    constructor() {
        super(relationshipHistoryService)
    }

    async friendRequest(params: any){
        return await this.service.friendRequest(params);
    }

    async acceptFriendRequest(params: any){
        return await this.service.acceptFriendRequest(params);
    }

    async unfriend(params: any){
        return await this.service.unfriend(params);
    }

    async block(params: any){
        return await this.service.block(params);
    }

}
