import React, { useState } from 'react'
import { CardTheme } from '../Components/CardTheme'
import { Form } from '../Components/Form'
import { Header } from '../Components/Header'
import style from './styles.module.scss'


export default function UserPage() {
   const [isMenuVisible, setIsMenuVisible] = useState(false)

  return (
    <>
        <div className={style.wrapper}>
          <main>
            <Header isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} />
            <div className={style.home}>
              <CardTheme />
            </div>
          </main>
          <Form isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} />
        </div>
    </>
  )
}


function setMenu({state}) {
  const[isMenu, setIsMenu] = useState<boolean>()
  setIsMenu(state)
}