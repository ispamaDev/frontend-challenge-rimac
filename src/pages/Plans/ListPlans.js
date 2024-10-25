import React, { useEffect, useState } from 'react'
import PlanCard from "../../components/CardPlan"
import { ReactComponent as IconHome } from "../../assets/icons/iconHome.svg"
import { ReactComponent as IconFamily } from "../../assets/icons/iconFamily.svg"
import { ReactComponent as IconHospital } from "../../assets/icons/iconHospital.svg"


const ListPlans = ({ list, isDiscount,clickPlan }) => {
    const [lista, setLista] = useState([]);
    useEffect(() => {
        const resultado = list?.map(ele => {
            return {
                title: ele.name,
                cost: getDescuento(ele.price, isDiscount),
                icon: getIcon(ele.title),
                details: ele.description
            }
        })
        setLista(resultado)
    }, [list, isDiscount])

    const getDescuento = (price, isDiscount) => {
        return isDiscount ? `\$${price - price * 0.05} al mes` : `\$${price} al mes`
    }
    const getIcon = (title) => {
        switch (title) {
            case "Plan en Casa y Clínica": return <IconHospital />
            default: return <IconHome />
        }
    }


    return (
        <>
            {lista?.length && lista.map((item, key) => {
                return (
                    <PlanCard
                        title={item.title}
                        cost={item.cost}
                        details={item.details}
                        icon={item.icon}
                        onButtonClick={clickPlan}
                        key={key}
                    />
                )
            })}
        </>
    )
}

export default ListPlans