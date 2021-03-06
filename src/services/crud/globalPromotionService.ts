import { CrudService, ICrudOption } from '../crudService.pg'
import {
    GlobalPromotion,
    Employee,
    User
} from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'
import * as moment from 'moment'

export class GlobalPromotionService extends CrudService<typeof GlobalPromotion> {
    constructor() {
        super(GlobalPromotion)
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

    async statisticGeneral(params: any, option?: ICrudOption) {
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
                const itemPromotion = await GlobalPromotion.count({
                    where: {
                        created_at: {
                            $gte: start.format(),
                            $lte: end.format()
                        }
                    }
                });
                const itemEmployee = await Employee.count({
                    where: {
                        created_at: {
                            $gte: start.format(),
                            $lte: end.format()
                        }
                    }
                });
                const itemUser = await User.count({
                    where: {
                        created_at: {
                            $gte: start.format(),
                            $lte: end.format()
                        }
                    }
                });
                var index = 0;
                for (var i = 0; i < months_detail.length; i++) {
                    index++;
                }
                months_detail.push({
                    index: index,
                    month: time,
                    number_of_employees: itemEmployee,
                    number_of_users: itemUser,
                    number_of_promotions: itemPromotion,
                });
                var employees = 0;
                for (var i = 0; i < months_detail.length; i++) {
                    employees += parseInt(months_detail[i].number_of_employees);
                }
                var users = 0;
                for (var i = 0; i < months_detail.length; i++) {
                    users += parseInt(months_detail[i].number_of_users);
                }
                var promotions = 0;
                for (var i = 0; i < months_detail.length; i++) {
                    promotions += parseInt(months_detail[i].number_of_promotions);
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
                const itemPromotion = await GlobalPromotion.count({
                    where: {
                        created_at: {
                            $gte: start.format(),
                            $lte: end.format()
                        }
                    }
                });
                const itemEmployee = await Employee.count({
                    where: {
                        created_at: {
                            $gte: start.format(),
                            $lte: end.format()
                        }
                    }
                });
                const itemUser = await User.count({
                    where: {
                        created_at: {
                            $gte: start.format(),
                            $lte: end.format()
                        }
                    }
                });
                var index = 0;
                for (var i = 0; i < days_detail.length; i++) {
                    index++;
                }
                days_detail.push({
                    index: index,
                    day: time,
                    number_of_employees: itemEmployee,
                    number_of_users: itemUser,
                    number_of_promotions: itemPromotion,
                });
                var employees = 0;
                for (var i = 0; i < days_detail.length; i++) {
                    employees += parseInt(days_detail[i].number_of_employees);
                }
                var users = 0;
                for (var i = 0; i < days_detail.length; i++) {
                    users += parseInt(days_detail[i].number_of_users);
                }
                var promotions = 0;
                for (var i = 0; i < days_detail.length; i++) {
                    promotions += parseInt(days_detail[i].number_of_promotions);
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
                const itemPromotion = await GlobalPromotion.count({
                    where: {
                        created_at: {
                            $gte: start.format(),
                            $lte: end.format()
                        }
                    }
                });
                const itemEmployee = await Employee.count({
                    where: {
                        created_at: {
                            $gte: start.format(),
                            $lte: end.format()
                        }
                    }
                });
                const itemUser = await User.count({
                    where: {
                        created_at: {
                            $gte: start.format(),
                            $lte: end.format()
                        }
                    }
                });
                var index = 0;
                for (var i = 0; i < weeks_detail.length; i++) {
                    index++;
                }
                weeks_detail.push({
                    index: index,
                    week: start.format('YYYY-MM-DD') + ' TO ' + end.format('YYYY-MM-DD'),
                    number_of_employees: itemEmployee,
                    number_of_users: itemUser,
                    number_of_promotions: itemPromotion,
                });
                var employees = 0;
                for (var i = 0; i < weeks_detail.length; i++) {
                    employees += parseInt(weeks_detail[i].number_of_employees);
                }
                var users = 0;
                for (var i = 0; i < weeks_detail.length; i++) {
                    users += parseInt(weeks_detail[i].number_of_users);
                }
                var promotions = 0;
                for (var i = 0; i < weeks_detail.length; i++) {
                    promotions += parseInt(weeks_detail[i].number_of_promotions);
                }
            }
        }
        else weeks_detail = undefined;
        let [
            number_of_employees,
            number_of_users,
            number_of_promotions,
        ] = await Promise.all([
            employees,
            users,
            promotions,
        ]);
        return {
            total_number_of_employees: number_of_employees,
            total_number_of_users: number_of_users,
            total_number_of_promotions: number_of_promotions,
            statistic: months_detail || days_detail || weeks_detail,
        }
    }
}