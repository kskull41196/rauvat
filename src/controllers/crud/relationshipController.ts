import { CrudController } from '../crudController'
import { ICrudOption, errorService, relationshipService } from '@/services'


export class RelationshipController extends CrudController<typeof relationshipService> {
    constructor() {
        super(relationshipService)
    }

    async getFriends(params: any) {
        return await this.service.getFriends(params);
    }

}
