import React, { useEffect, useState } from 'react'
import "./plans.css"
import {  useNavigate } from 'react-router-dom'
import CardOption from "../../components/CardOption/index.js"
import IconForMe from "../../assets/icons/iconAddUser.svg"
import IconSomeOne from "../../assets/icons/iconProtection.svg"
import ListPlans from "./ListPlans.js"
import { useUser } from '../../context/UserContext.js'
import { fetchPlans } from '../../components/services/getPlans.js'
import { useQuery } from '@tanstack/react-query'

const Index = () => {
  const { user, login } = useUser();
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);
  const [isDiscount, setIsDiscount] = useState(false);
  const { isLoading, error, data } = useQuery({
    queryKey: ['plans'],
    queryFn: fetchPlans,
  });
  const [lista, setLista] = useState([])


  useEffect(() => {
    if (user && data) {
      const year = getYear(user?.info.birthDay);
      const filtradoPlans = data?.list?.filter((ele) => ele.age <= year)
      setLista(filtradoPlans);
    }
  }, [user, data])
  const getYear = (birthDay) => {
    const dateParts = birthDay.split("-");
    return parseInt(dateParts?.pop(), 10);
  }
  useEffect(() => {
    if (selectedCard === "para-alguien-mas") setIsDiscount(true);
    else setIsDiscount(false);
  }, [selectedCard])

  const clickOption = (ele) => {
    const us = { info: user?.info, responsable: user.responsable, plan: ele }
    login(us)
    navigate('/register-plan/summary');
  }
  return (
    <div className='plans'>
      <div className='plans__select'>
        <div className='plans__info'>
          <h1>{user?.info?.name} ¿Para quién deseas cotizar?</h1>
          <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
        </div>
        <div className='plans__option'>
          <CardOption
            icon={<img src={IconSomeOne} alt="icon-me" className='icon' />}
            title="Para mí"
            description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
            isSelected={selectedCard === 'para-mi'}
            onClick={() => setSelectedCard('para-mi')}
          />
          <CardOption
            icon={<img src={IconForMe} alt="icon-family" className='icon' />}
            title="Para alguien más"
            description="Realiza una cotización para uno de tus familiares o cualquier persona."
            isSelected={selectedCard === 'para-alguien-mas'}
            onClick={() => setSelectedCard('para-alguien-mas')}
          />
        </div>
      </div><div className="plans__user">
        {isLoading ? (
          <div>Cargando...</div>
        ) : error ? (
          <p>{error}</p>
        ) : selectedCard && data ? (
          <ListPlans
            isDiscount={isDiscount}
            list={lista}
            clickPlan={clickOption}
          />
        ) : (
         null
        )}
      </div>


    </div>
  )
}

export default Index