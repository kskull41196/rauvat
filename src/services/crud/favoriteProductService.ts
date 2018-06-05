import { CrudService, ICrudOption } from '../crudService.pg'
import { FavoriteProduct } from '@/models/tables'

export class FavoriteProductService extends CrudService<typeof FavoriteProduct> {
    constructor() {
        super(FavoriteProduct)
    }
    
}