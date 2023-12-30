import React from 'react'
import Schedules from '../../content/schedule.yaml'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

function Schedule() {
    const days = Schedules.schedules
    let currentDate = new Date()
    currentDate.setHours(0, 0, 0, 0)
    const futureDays = days.filter((item) => {
        return Date.parse(item.date) >= currentDate
    })
    const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
    ]
    const weekdayNames = ["Воскресенье", "Понедельник", "Вторник", "Среда",
        "Четверг", "Пятница", "Суббота"]

    return (
        <div className={"lg:flex lg:justify-center schedule"}>
            {
                futureDays.slice(0, 3).map((day) => {
                    const targetDate = Date.parse(day.date)
                    if (targetDate >= currentDate) {
                        const dateObj = new Date(targetDate)
                        const targetDay = dateObj.getDate()
                        const month = monthNames[dateObj.getMonth()]
                        const weekday = weekdayNames[dateObj.getDay()]
                        return (
                            <Card key={day.date} className={"m-3"}>
                                <CardHeader>
                                    <CardTitle>{targetDay} {month}</CardTitle>
                                    <CardDescription>{weekday}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {
                                        day.events.map((event) => {
                                            return (
                                                <p key={event.time}>
                                                    <strong>{event.time}</strong> {event.name}
                                                </p>
                                            )
                                        })
                                    }
                                </CardContent>
                                {day.info &&
                                    <CardFooter>
                                        <p dangerouslySetInnerHTML={{__html: day.info}} />
                                    </CardFooter>
                                }
                            </Card>
                        )
                    }
                })
            }
        </div>
    )
}

export default Schedule;
