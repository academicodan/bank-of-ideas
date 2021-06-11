import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import { Button, TextField, Typography } from '@material-ui/core';
import style from './styles.module.scss'
import axios from 'axios';
export default function Login() {

  function resetarCache(){
    localStorage.setItem("user","");
    localStorage.setItem("pass","");
  }

  useEffect(() => {
    resetarCache();
  }, [])

  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [dadosColetados, setDados] = useState({email,senha});

  function ColetarDados(dados) {
    setDados(dados);
    console.log(dadosColetados);
    axios.get(`http://localhost:8000/loginAdmin?user=${dadosColetados.email}&&pass=${dadosColetados.senha}`)
    .then(res => {
      if(res.data == "logado"){
        alert("logou");
        location.href = "/adminPage";
        localStorage.setItem("user",dadosColetados.email);
        localStorage.setItem("pass",dadosColetados.senha);
      }
      else{
        alert("erro ao logar, verifique o usuario ou senha");
      }
    })


    console.log({dadosColetados})
  }


  return (
    <>
      <div className={style.container}>
        <div className={style.login}>
          <form
             onSubmit={(event) => {
               event.preventDefault();
               ColetarDados({email, senha})
             }}
          >
          <Typography variant="h2" >
            Olá,
          </Typography>
          <Typography variant="subtitle2" >
            Faça o Login no seu banco de ideias
          </Typography>
          <TextField value={email} label="Email" type="text" fullWidth margin="normal"
          
          onChange={(event) => {
            setEmail(event.target.value)
          }}
          
          />
          <TextField value={senha} label="Senha" type="senha" fullWidth margin="normal"
          
          onChange={(event) => {
            setSenha(event.target.value)
          }}
          
          />
          <Button type="submit" variant="contained" color="primary">
            Acessar
          </Button>

          </form>
        </div>
        
        <div className={style.containerImage}>
          <img src="/login.svg" alt="Login banco de ideias" />
        </div>
      </div>
    </>
  )
}