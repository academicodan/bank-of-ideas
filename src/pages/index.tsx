import React from 'react'
import { CardTheme } from '../Components/CardTheme'
import { Form } from '../Components/Form'
import { Header } from '../Components/Header'
import style from './styles.module.scss'
export default function UserPage() {
  return (
    <>
      <div className={style.wrapper}>
        <main>
          <Header />
          <div className={style.home}>
            <CardTheme />
          </div>
        </main>
        <Form />
      </div>
    </>
  )
}
