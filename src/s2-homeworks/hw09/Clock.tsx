import React, {useEffect, useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'


function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    // const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false)
    //

    useEffect(() => {
        if( timerId !== undefined){
            const idInterval =setInterval(()=>{
                start()
            },1000)
            // @ts-ignore
            setTimerId(idInterval)
            return ()=>clearInterval(idInterval)
        }


    }, [date]);
    const start = () => {
        setDate(new Date())
        setTimerId(1)
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)

    }

    const stop = () => {
        clearInterval(timerId)
        setTimerId(undefined)
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)

    }


            const onMouseEnter = () => {
        setShow(true)
        // пишут студенты // показать дату если наведена мышка

    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }

    const seconds = date.getSeconds()<10? "0"+ date.getSeconds():date.getSeconds()
    const minutes = date.getMinutes()<10? "0"+ date.getMinutes():date.getMinutes()
    const stringTime = [date.getHours(),":",minutes,":",seconds]|| <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = new Intl.DateTimeFormat("en-US").format(date) || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const stringDay = weekday[date.getDay()] || <br/> // пишут студенты
    const stringMonth = month[date.getMonth()] || <br/> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={timerId !== undefined} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={timerId === undefined} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

 export default Clock


// import React, {useState} from 'react'
// import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
// import {restoreState} from '../hw06/localStorage/localStorage'
// import s from './Clock.module.css'
//
// function Clock() {
//     const [timerId, setTimerId] = useState<number | undefined>(undefined)
//     // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
//     const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
//     const [show, setShow] = useState<boolean>(false)
//
//     const start = () => {
//         // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
//         // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
//
//     }
//
//     const stop = () => {
//         // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
//
//     }
//
//     const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
//
//     }
//     const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
//
//     }
//
//     const stringTime = 'date->time' || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
//     const stringDate = 'date->date' || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
//
//     // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
//     const stringDay = 'date->day' || <br/> // пишут студенты
//     const stringMonth = 'date->month' || <br/> // пишут студенты
//
//     return (
//         <div className={s.clock}>
//             <div
//                 id={'hw9-watch'}
//                 className={s.watch}
//                 onMouseEnter={onMouseEnter}
//                 onMouseLeave={onMouseLeave}
//             >
//                 <span id={'hw9-day'}>monday{stringDay}</span>,{' '}
//                 <span id={'hw9-time'}>
//                     <strong>12:22{stringTime}</strong>
//                 </span>
//             </div>
//
//             <div id={'hw9-more'}>
//                 <div className={s.more}>
//                     {show ? (
//                         <>
//                             <span id={'hw9-month'}>{stringMonth}</span>,{' '}
//                             <span id={'hw9-date'}>{stringDate}</span>
//                         </>
//                     ) : (
//                         <>
//                             <br/>
//                         </>
//                     )}
//                 </div>
//             </div>
//
//             <div className={s.buttonsContainer}>
//                 <SuperButton
//                     id={'hw9-button-start'}
//                     disabled={true} // пишут студенты // задизэйблить если таймер запущен
//                     onClick={start}
//                 >
//                     start
//                 </SuperButton>
//                 <SuperButton
//                     id={'hw9-button-stop'}
//                     disabled={true} // пишут студенты // задизэйблить если таймер не запущен
//                     onClick={stop}
//                 >
//                     stop
//                 </SuperButton>
//             </div>
//         </div>
//     )
// }
//
// export default Clock
