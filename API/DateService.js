import moment from "moment"
import 'moment/locale/ru'

const CALENDAR_MONTH_WEEK = 6
const DAYS_IN_WEEK = 7


export default class DataService {
    static getMonth(offset = 0) {
        moment.locale('ru')
        let time
        if(offset >= 0) {
            time = moment().add(offset,'month').startOf('month').startOf('week')
        } else {
            time = moment().subtract(-offset,'month').startOf('month').startOf('week')
        }
        
        let weeksOfMonth = []

        for(let i = 0; i < CALENDAR_MONTH_WEEK; i++) {
            let week = []
            for(let j = 0; j < DAYS_IN_WEEK; j++){
                week.push({
                    day: time.format("D"),
                    month: time.format("MMMM YYYY")
                })
                time.add(1,'day')
            }
            weeksOfMonth.push(week)
        }

        return weeksOfMonth
    }

    static getThisDay() {
        let thisDay = moment()
        return {day: thisDay.format("D"), month: thisDay.format("MMMM YYYY")}
    }

    static getMonthName(offset = 0) {
        let nameMonth = offset >= 0 
        ? 
            moment().add(offset,'month').format("MMMM YYYY")
        :
            moment().subtract(-offset, 'month').format("MMMM YYYY")
        return nameMonth[0].toUpperCase() + nameMonth.slice(1)
    }

    static getTime() {
        return moment().format("hh:mm:ss")
    }
}