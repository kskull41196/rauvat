import { CrudService, ICrudOption } from '../crudService.pg'
import { Store, Product, Bill } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as moment from 'moment'
export class StoreService extends CrudService<typeof Store> {
    constructor() {
        super(Store)
    }
    splitTimeMonth(from_date: any, start_date: any) {
        let time = [];
        while (new Date(from_date).getTime() <= new Date(start_date).getTime()) {
            let month = moment(from_date).format('YYYY-MM');
            time.push(month);
            let temp = moment(from_date);
            temp.set('month', temp.get('month') + 1);
            temp.set('date', 1);
            temp.set('hour', 1);
            from_date = temp.format();
        }
        return time;
    }
    splitTimeDay(from_date: any, start_date: any) {
        let time = [];
        while (new Date(from_date).getTime() <= new Date(start_date).getTime()) {
            let date = moment(from_date).format('YYYY-MM-DD');
            time.push(date);
            let temp = moment(from_date);
            temp.set('date', temp.get('date') + 1);
            from_date = temp.format();
        }
        return time;
    }
    splitTimeWeek(from_date: any, to_date: any) {
        let time = [];
        while (new Date(from_date).getTime() <= new Date(to_date).getTime()) {
            let date = moment(from_date).format('YYYY-MM-DD');
            time.push(date);
            let from = moment(from_date).startOf('week');
            from.set('date', from.get('date') + 7);
            from_date = from.format();
            let to = moment(to_date).endOf('week');
            to_date = to.format();
        }
        return time;
    }

    async statisticTrading(params: any, option?: ICrudOption) {
        let {
            from_date,
            to_date,
            type_statistic,
        } = params;

        let months_detail: any = [];
        if (type_statistic == "month") {
            let times = this.splitTimeMonth(from_date, to_date);
            for (let time of times) {
                let start = moment(time);
                let end = moment(time);
                end.set('month', end.get('month') + 1);
                end.set('date', 0);
                end.set('hour', 23);
                end.set('minute', 59);
                end.set('second', 59);
                const itemStore = await Store.count({
                    where: {
                        created_at: {
                            $gte: start.format(),
                            $lte: end.format()
                        }
                    }
                });
                const itemProduct = await Product.count({
                    where: {
                        created_at: {
                            $gte: start.format(),
                            $lte: end.format()
                        },
                        updated_id: null
                    }
                });
                const itemBill = await Bill.count({
                    where: {
                        created_at: {
                            $gte: start.format(),
                            $lte: end.format()
                        },
                        updated_id: null
                    }
                });
                var index = 0;
                for (var i = 0; i < months_detail.length; i++) {
                    index++;
                }
                months_detail.push({
                    index: index,
                    month: time,
                    number_of_stores: itemStore,
                    number_of_products: itemProduct,
                    number_of_bills: itemBill,
                });
                var stores = 0;
                for (var i = 0; i < months_detail.length; i++) {
                    stores += parseInt(months_detail[i].number_of_stores);
                }
                var products = 0;
                for (var i = 0; i < months_detail.length; i++) {
                    products += parseInt(months_detail[i].number_of_products);
                }
                var bills = 0;
                for (var i = 0; i < months_detail.length; i++) {
                    bills += parseInt(months_detail[i].number_of_bills);
                }

            }
        }
        else months_detail = undefined;

        let days_detail: any = [];
        if (type_statistic == "day") {
            let times = this.splitTimeDay(from_date, to_date);
            for (let time of times) {
                let start = moment(time);
                let end = moment(time);
                end.set('date', end.get('date') + 1);
                const itemStore = await Store.count({
                    where: {
                        created_at: {
                            $gte: start.format(),
                            $lte: end.format()
                        }
                    }
                });
                const itemProduct = await Product.count({
                    where: {
                        created_at: {
                            $gte: start.format(),
                            $lte: end.format()
                        },
                        updated_id: null
                    }
                });
                const itemBill = await Bill.count({
                    where: {
                        created_at: {
                            $gte: start.format(),
                            $lte: end.format()
                        },
                        updated_id: null
                    }
                });
                var index = 0;
                for (var i = 0; i < days_detail.length; i++) {
                    index++;
                }
                days_detail.push({
                    index: index,
                    day: time,
                    number_of_stores: itemStore,
                    number_of_products: itemProduct,
                    number_of_bills: itemBill,
                });
                var stores = 0;
                for (var i = 0; i < days_detail.length; i++) {
                    stores += parseInt(days_detail[i].number_of_stores);
                }
                var products = 0;
                for (var i = 0; i < days_detail.length; i++) {
                    products += parseInt(days_detail[i].number_of_products);
                }
                var bills = 0;
                for (var i = 0; i < days_detail.length; i++) {
                    bills += parseInt(days_detail[i].number_of_bills);
                }
            }
        }
        else days_detail = undefined;
        let weeks_detail: any = [];
        if (type_statistic == "week") {
            let times = this.splitTimeWeek(from_date, to_date);
            for (let time of times) {
                let start = moment(time).startOf('week');
                let end = moment(time).endOf('week');
                const itemStore = await Store.count({
                    where: {
                        created_at: {
                            $gte: start.format(),
                            $lte: end.format()
                        }
                    }
                });
                const itemProduct = await Product.count({
                    where: {
                        created_at: {
                            $gte: start.format(),
                            $lte: end.format()
                        },
                        updated_id: null
                    }
                });
                const itemBill = await Bill.count({
                    where: {
                        created_at: {
                            $gte: start.format(),
                            $lte: end.format()
                        },
                        updated_id: null
                    }
                });
                var index = 0;
                for (var i = 0; i < weeks_detail.length; i++) {
                    index++;
                }
                weeks_detail.push({
                    index: index,
                    week: start.format('YYYY-MM-DD') + ' TO ' + end.format('YYYY-MM-DD'),
                    number_of_stores: itemStore,
                    number_of_products: itemProduct,
                    number_of_bills: itemBill,
                });
                var stores = 0;
                for (var i = 0; i < weeks_detail.length; i++) {
                    stores += parseInt(weeks_detail[i].number_of_stores);
                }
                var products = 0;
                for (var i = 0; i < weeks_detail.length; i++) {
                    products += parseInt(weeks_detail[i].number_of_products);
                }
                var bills = 0;
                for (var i = 0; i < weeks_detail.length; i++) {
                    bills += parseInt(weeks_detail[i].number_of_bills);
                }
            }
        }
        else weeks_detail = undefined;
        let [
            number_of_stores,
            number_of_products,
            number_of_bills,
        ] = await Promise.all([
            stores,
            products,
            bills,
        ]);
        return {
            total_number_of_stores: number_of_stores,
            total_number_of_products: number_of_products,
            total_number_of_bills: number_of_bills,
            statistic: months_detail || days_detail || weeks_detail,
        }
    }
}