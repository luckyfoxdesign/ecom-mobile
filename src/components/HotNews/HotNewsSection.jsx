import React from "react"
import s from './hotNewsSection.module.styl'
import PhoneCard from "../PhoneCard/PhoneCard"

const HotNewsSection = () => {
  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <div className={s.phoneCards}>
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
          <PhoneCard />
        </div>
      </div>
    </section>
  )
}

export default HotNewsSection
