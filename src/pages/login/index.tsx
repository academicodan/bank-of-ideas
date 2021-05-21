import React from 'react'
import Link from 'next/link'
import { Button, TextField, Typography } from '@material-ui/core';
import style from './styles.module.scss'
export default function Login() {
  return (
    <>
      <div className={style.container}>
        <div className={style.login}>
          <Typography variant="h2" >
            Olá,
          </Typography>
          <Typography variant="subtitle2" >
            Faça o Login no seu banco de ideias
          </Typography>
          <TextField label="Email" type="emal" fullWidth margin="normal"/>
          <TextField label="Senha" type="senha" fullWidth margin="normal"/>
          <Link href="/adminpage">
            <Button variant="contained" color="primary">
              Acessar
            </Button>
          </Link>
        </div>
        <div className={style.containerImage}>
          <img src="/login.svg" alt="Login banco de ideias" />
        </div>
      </div>
    </>
  )
}