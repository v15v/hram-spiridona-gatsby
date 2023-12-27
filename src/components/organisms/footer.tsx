import React from "react"
import {Clock3, MapPin} from "lucide-react"
import {Separator} from "@/components/ui/separator"


const Footer = () => {
    return (
        <div
            className={"h-32 py-4 bg-black text-gray-400 opacity-80 grid grid-cols-12 grid-rows-2"}>
            <div
                className={"col-start-2 col-end-9 justify-self-start self-center p-1 flex"}>
                <MapPin color={"gray"} className={"self-center"} />
                <Separator orientation="vertical"
                           className={"h-9 mx-2 self-center"} />
                <div>
                    <p className={"text-xs"}>АДРЕС</p>
                    <p className={"text-sm"}>Московская область, Дмитровский
                        городской округ, рабочий посёлок Некрасовский</p>
                </div>
            </div>

            <div
                className={"col-start-9 col-end-12 justify-self-end self-center p-1 flex"}>
                <Clock3 color={"gray"} className={"self-center"} />
                <Separator orientation="vertical"
                           className={"h-8 mx-2 self-center"} />
                <div>
                    <p className={"text-xs"}>ХРАМ ОТКРЫТ</p>
                    <p className={"text-xs"}>ежедневно с 8.00 до 18.00</p>
                </div>
            </div>

            <div
                className={"h-3 col-span-12 justify-self-center self-center"}>
                <p className={"text-xs"}>© 2022-2024 Спиридоньевский храм</p>
            </div>
        </div>
    )
}

export default Footer