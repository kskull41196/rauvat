import { CrudController } from '../crudController'
import { ICrudOption, errorService ,productService} from '@/services'
import {
    IFilterProduct,
    IPostProduct
} from '@/interfaces'


export class ProductController extends CrudController<typeof productService> {
    constructor() {
        super(productService)
    }

    async filter(params: IFilterProduct, option?: ICrudOption){
        return await this.service.filter(params, option);
    }

    async postProduct(params: IPostProduct){
        return await this.service.postProduct(params);
    }
    
}
    