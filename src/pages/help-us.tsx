import * as React from "react"
import type {PageProps} from "gatsby"
import Layout from "@/components/templates/layout"
import Seo from "@/components/seo"

const HelpUsPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <h2>Помощь храму</h2>
            <div className={"markdown p-5"}>
                <p>Храм содержится на пожертвования прихожан и
                    нуждается в вашей финансовой поддержке.</p>
                <p>Без вашей помощи не справиться!</p>

                <h3>У храма не хватает средств на:</h3>
                <ul>
                    <li>оплату коммунальных услуг</li>
                    <li>ремонт храма и прилегающей территории</li>
                    <li>хозяйственные и другие нужды.</li>
                </ul>

                <h3>Реквизиты для помощи</h3>
                <table
                    className={"table border border-collapse w-full my-4"}>
                    <tbody>
                    <tr>
                        <td className={"text-center"} colSpan={2}>
                            Карта Сбербанка:
                        </td>
                    </tr>
                    <tr>
                        <td className={"border"}>
                            Номер:
                        </td>
                        <td className={"border"}>
                            xxxx-xxxx-xxxx-xxxx
                        </td>
                    </tr>
                    <tr>
                        <td className={"border"}>
                            Владелец:
                        </td>
                        <td className={"border"}>
                            Владимир К.
                        </td>
                    </tr>
                    <tr>
                        <td className={"text-center align-middle"}
                            colSpan={2}>
                            Банковский счет:
                        </td>
                    </tr>
                    <tr>
                        <td className={"border"}>
                            Наименование организации
                        </td>
                        <td className={"border"}>
                            МЕСТНАЯ РЕЛИГИОЗНАЯ ОРГАНИЗАЦИЯ
                            ПРАВОСЛАВНЫЙ ПРИХОД
                            СПИРИДОНЬЕВСКОГО ХРАМА ПОС. НЕКРАСОВСКИЙ
                            ДМИТРОВСКОГО РАЙОНА
                            МОСКОВСКОЙ ОБЛАСТИ МОСКОВСКОЙ ЕПАРХИИ
                            РУССКОЙ
                            ПРАВОСЛАВНОЙ
                            ЦЕРКВИ
                        </td>
                    </tr>
                    <tr>
                        <td className={"border"}>
                            ИНН:
                        </td>
                        <td className={"border"}>
                            5007998066
                        </td>
                    </tr>
                    <tr>
                        <td className={"border"}>
                            КПП:
                        </td>
                        <td className={"border"}>
                            500701001
                        </td>
                    </tr>
                    <tr>
                        <td className={"border"}>
                            ОГРН:
                        </td>
                        <td className={"border"}>
                            1115000005108
                        </td>
                    </tr>
                    <tr>
                        <td className={"border"}>
                            ОКПО:
                        </td>
                        <td className={"border"}>
                            92691012
                        </td>
                    </tr>
                    <tr>
                        <td className={"border"}>
                            Расчетный счет:
                        </td>
                        <td className={"border"}>
                            40703810440080000709
                        </td>
                    </tr>
                    <tr>
                        <td className={"border"}>
                            Банк:
                        </td>
                        <td className={"border"}>
                            ПАО СБЕРБАНК
                        </td>
                    </tr>
                    <tr>
                        <td className={"border"}>
                            БИК:
                        </td>
                        <td className={"border"}>
                            044525225
                        </td>
                    </tr>
                    <tr>
                        <td className={"border"}>
                            Корр. счет:
                        </td>
                        <td className={"border"}>
                            30101810400000000225
                        </td>
                    </tr>
                    <tr>
                        <td className={"border"}>
                            Юридический адрес:
                        </td>
                        <td className={"border"}>
                            141865, Московская обл, Дмитровский р-н,
                            Некрасовский Рабочий
                            п,
                            Заводская ул, дом № 2А
                        </td>
                    </tr>
                    <tr>
                        <td className={"border"}>
                            Наименование платежа:
                        </td>
                        <td className={"border"}>
                            Пожертвование на уставную деятельность.
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default HelpUsPage

export const Head = () => <Seo title="Помогите храму" />
