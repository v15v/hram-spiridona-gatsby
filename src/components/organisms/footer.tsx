import React from "react"
import {Clock3, MapPin} from "lucide-react"
import {Separator} from "@/components/ui/separator"

const Footer = () => {
    return (
        <div
            className={"mx-1 sm:h-32 p-4 sm:pt-6 md:pt-4 sm:pb-0 bg-primary text-primary-foreground sm:grid sm:grid-cols-12 sm:grid-rows-2"}>
            <div
                className={"sm:col-start-2 sm:col-end-9 sm:justify-self-start sm:self-center p-1 flex"}>
                <div className={"w-11 flex self-center"}>
                    <MapPin size={"30px"}
                            className={`sm:self-center text-primary-foreground opacity-55`} />
                    <Separator orientation="vertical"
                               className={`h-9 mx-1 sm:mx-2 sm:self-center opacity-55`} />
                </div>
                <div className={`self-center opacity-55`}>
                    <p className={"text-xs"}>АДРЕС</p>
                    <p className={"text-sm"}>Московская область, Дмитровский
                        городской округ, рабочий посёлок Некрасовский</p>
                </div>
            </div>

            <div
                className={"sm:col-start-9 sm:col-end-12 sm:justify-self-end sm:self-center p-1 flex"}>
                <div className={"w-11 flex self-center"}>
                    <Clock3 size={"30px"}
                            className={`sm:self-center text-primary-foreground opacity-55`} />
                    <Separator orientation="vertical"
                               className={`h-9 mx-1 sm:mx-2 sm:self-center opacity-55`} />
                </div>
                <div className={`self-center opacity-55`}>
                    <p className={"text-xs"}>ХРАМ ОТКРЫТ</p>
                    <p className={"text-xs"}>ежедневно с 8.00 до 18.00</p>
                </div>
            </div>

            <div
                className={`sm:h-3 sm:col-span-12 sm:justify-self-center sm:self-center text-center opacity-55`}>
                <p className={`text-xs`}>© {new Date().getFullYear()} Спиридоньевский храм</p>
            </div>
        </div>
    )
}

export default Footer