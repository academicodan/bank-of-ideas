import React from 'react'
import { TemasGrid } from '../../Components/TemasGrid'
import { IdeiasCadastradas } from '../../Components/IdeiasCadastradas'
import { HeaderAdmin } from '../../Components/HeaderAdmin'
import style from './styles.module.scss'
import {useRouter} from 'next/router'

export  default function AdminPage () {
  const router = useRouter()
  return(
    <>
      {/* Quando eu fiz isso só eu e Deus sabiamos o que estavamos fazendo. Agora só Deus! */}
      <HeaderAdmin />
      {
        router.query.adminpage === "ideiascadastradas" ? (
          <div className={style.wrapper}>
            <IdeiasCadastradas />
          </div>
        ) : (
          <div className={style.wrapper}>
            <TemasGrid />
          </div>
        )
      }
    </>
  )
}