import React from 'react'
import MainLogo from '../assets/logo3.svg'

function HomeCard() {
  return (
    <div className='main-card'>
        <img src={MainLogo} alt=""  title="Har bir luqmani zavq bilan yeng"/>
        <h2> Yoqimli ishtaxa </h2>
        <h2> Приятного аппетита </h2>
        <h2> Savor every bite </h2>
    </div>
  )
}

export default HomeCard