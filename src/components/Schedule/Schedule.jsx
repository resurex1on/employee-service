import { useRef, useState } from 'react';
import Tasks from '../Tasks/Tasks';
import './Schedule.css';
import { getNameOfMonth } from './Schedule.helper';


const Schedule = () => {
    const numberOfDays = useRef(null);
    const date = useRef(new Date());

    const [month, setMonth] = useState(() => date.current.getMonth());
    const [year, setYear] = useState(() => date.current.getFullYear());
    const [day, setDay] = useState(0);

    let currentWeek = 0;

    const getDaysOfMonth = (numberOfMonth) => {
        numberOfDays.current = new Date(year, numberOfMonth, 0).getDate();
        const arrayOfDays = [];
        for (let index = 0; index < numberOfDays.current; index++) {
            arrayOfDays.push(index + 1);

        }

        return arrayOfDays
    }

    const changeMonth = (changer) => {
        setMonth((currentMonth) => {
            if ((currentMonth + changer) > 12) {
                setYear(year + 1);
                return 1
            } else if (((currentMonth + changer) < 1)) {
                setYear(year - 1);
                return 11
            } else {
                return currentMonth + changer;
            }
        })
    }

    const handleClickPrev = () => {
        changeMonth(-1);
    }

    const handleClickNext = () => {
        changeMonth(1);
    }

    return (
        <section className='schedule'>
            <div className="schedule-container">
                <div className='schedule-month'>
                    <div className="schedule-month-title">
                        <h1 className='schedule-month-title-name'>{getNameOfMonth(month)}</h1>
                        <p className='schedule-month-title-year'>{year}</p>
                    </div>

                    {[1, 2, 3, 4, 5].map(() => {
                        currentWeek++;
                        return <div className='schedule-month-week'> {getDaysOfMonth(month).filter((item) => item <= ((currentWeek) * 7) + 1 && item > ((currentWeek - 1) * 7)).map((day) => {

                            return <div className='schedule-month-day' onClick={() => setDay(day)}>{day}</div>
                        })}
                        </div>
                    })}
                </div>
                <div className='schedule-navigator'>
                    <p className='schedule-navigator-trigger' onClick={handleClickPrev}>prev</p>
                    <p className='schedule-navigator-trigger' onClick={handleClickNext}>next</p>
                </div>
            </div>


            <div className="schedule-tasks">
                <Tasks day={day} month={month} year={year} />
            </div>
        </section>
    );
}

export default Schedule;
