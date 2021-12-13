import React, { useEffect, useState } from 'react'
import DateService from '../API/DateService'
import Pagination from './Pagination'
import './Calendar.css'
import { Transition } from 'react-transition-group'
import TaskList from './TaskList'

const transitionStyles = {
    entering: 'calendar-entering',
    entered: 'calendar-entered',
    exiting: 'calendar-exiting',
    exited: 'calendar-exited',

}


function Calendar() {
    const [offset, setOffset] = useState(0)
    let monthName = DateService.getMonthName(offset)
    let weeksOfMonth = DateService.getMonth(offset)
    const [thisDay, setThisDay] = useState(DateService.getThisDay())
    const [chosenDay, setChosenDay] = useState({
        day: thisDay,
        monthName: monthName.toLowerCase()
    })
    
    return (
            <div className="calendar-container">
                <Pagination 
                    name={monthName}
                    setOffset={setOffset}
                    offset={offset}
                />
                {/* <Transition timeout={300}>
                    {state => (
                        <div className={'calendar ' + transitionStyles[state]}>
                            {weeksOfMonth.map((week, index) =>(
                                <div
                                    key={index} 
                                    className='calendar-week'
                                >
                                    {week.map((day, index) => (
                                        <div 
                                            key={index} 
                                            className={'outer calendar-item ' 
                                            + (day.isDayOfMonth ? '' : 'dayAnotherMonth ') 
                                            + (day.day === thisDay && day.isDayOfMonth && offset === 0 ? 'thisDay' : '')}
                                            onClick={() => {console.log("Ты кликнул на пиво " + day.day)}}
                                        >
                                            <span> {day.day} </span>
                                        </div>
                                    ))}
                                </div>
                            ))} 
                    </div>
                    )}
                </Transition> */}
                <div className={'calendar'}>
                    {weeksOfMonth.map((week, indexI) => (
                        <div
                            key={indexI} 
                            className='calendar-week'
                        >
                            {week.map((day, indexJ) => (
                                <div 
                                    key={indexJ} 
                                    className={'outer calendar-item ' 
                                    + (day.month === monthName.toLowerCase() ? '' : 'dayAnotherMonth ') 
                                    + (day.day === thisDay.day && day.month === thisDay.month ? 'thisDay ' : '')
                                    + (day.month === chosenDay.monthName && chosenDay.day === day.day ? 'chosen' : '') }
                                    onClick={() => {setChosenDay({monthName: day.month , day: day.day})}}
                                >
                                    <span> {day.day} </span>
                                </div>
                            ))}
                        </div>
                    ))} 
                </div>
            </div>
           
    )
}

export default Calendar
