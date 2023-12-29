import React from 'react'
import Schedules from '../content/schedule.yaml'
import Layout from "@/components/templates/layout"
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
    const currentDate = Date.now()
    const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
    ]
    const weekdayNames = ["Воскресенье", "Понедельник", "Вторник", "Среда",
        "Четверг", "Пятница", "Суббота"]

    return (
        <Layout>
            <h2>Расписание богослужений</h2>
            {days.map((day) => {
                const targetDate = Date.parse(day.date)
                if (targetDate >= currentDate) {
                    const dateObj = new Date(targetDate)
                    const targetDay = dateObj.getDate()
                    const month = monthNames[dateObj.getMonth()]
                    const weekday = weekdayNames[dateObj.getDay()]
                    return (
                        <Card className={"card m-3"}>
                            <CardHeader>
                                <CardTitle>{targetDay} {month}</CardTitle>
                                <CardDescription>{weekday}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {
                                    day.events.map((event) => {
                                        return (
                                            <div>
                                                <p>
                                                    <strong>{event.time}</strong> {event.name}
                                                </p>
                                            </div>
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
            })}
        </Layout>
    )
}

export default Schedule;