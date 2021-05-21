import style from './styles.module.scss'
import TextField from '@material-ui/core/TextField'
import { useState, useEffect } from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import { FormControlLabel, InputLabel, Radio, Select, MenuItem, Button } from '@material-ui/core'


export function Form() {

  const [tema, setTema] = useState<string | unknown>("");
  const [nomeEquipe, setNomeEquipe] = useState<string>("");
  const [responsavel, setResponsavel] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [integrantes, setIntegrantes] = useState<string>("");
  const [quesito, setQuesito] = useState<string>("");
  const [ideia, setIdeia] = useState<string>("");
  const [dadosColetados, setDados] = useState([])

  function ColetarDados(dados) {
    const newDados = [...dadosColetados, dados]
    setDados(newDados);
    console.log({dadosColetados})
    limparCampos()
  }

  function limparCampos(){
    setTema("");
    setEmail("");
    setNomeEquipe("");
    setResponsavel("");
    setIntegrantes("");
    setQuesito("");
    setIdeia("");
  }

  return (
    <div className={style.formContainer}>
      <h1 id="title" className={style.title}>Cadastro de ideias</h1>
      <p id="caption" className={style.caption}>Preencha as informações</p>
      <form action="" 
        onSubmit={(event) => {
          event.preventDefault();
          ColetarDados({tema, nomeEquipe, responsavel, email, integrantes, quesito, ideia})
        }}  
      >

        <FormControl  required fullWidth margin="normal">
          <InputLabel >Selecione o tema</InputLabel>
          <Select
            value={tema}
            name="tema"
            onChange={(event) => {
              setTema(event.target.value)
            }}
          >
            <MenuItem value="Tema 1">Theme name</MenuItem>
            <MenuItem value="Tema 2">Theme name</MenuItem>
            <MenuItem value="Tema 3">Theme name</MenuItem>
            <MenuItem value="Tema 4">Theme name</MenuItem>
            <MenuItem value="Tema 5">Theme name</MenuItem>
            </Select>
        </FormControl >

        <TextField
          value={nomeEquipe}
          id="nomeEquipe"
          label="Nome da equipe"
          name="nomeEquipe"
          fullWidth
          margin="normal"
          onChange={(event) => {
            setNomeEquipe(event.target.value)
          }}
        />

        <TextField
          value={responsavel}
          id="responsavel"
          label="Responsavel"
          name="responsavel"
          fullWidth
          required
          margin="normal"
          onChange={(event) => {
            setResponsavel(event.target.value)
          }}
        />

        <TextField
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
          }}
          id="email"
          label="Email"
          name="email"
          fullWidth
          type="email"
          required
          margin="normal"
        />

        <FormControl required  margin="normal">
          <FormLabel >Numero de integrantes incluindo você</FormLabel>
          <RadioGroup aria-label="" name="" value={integrantes} onChange={(event) => {
              setIntegrantes(event.target.value)
            }}>
            <FormControlLabel value="unico" control={<Radio color="primary"/>} label="Só você" />
            <FormControlLabel value="1-3" control={<Radio color="primary"/>} label="1 - 3" />
            <FormControlLabel value="3-5" control={<Radio color="primary"/>} label="3 - 5" />
            <FormControlLabel value="5-10" control={<Radio color="primary"/>} label="5 - 10" />
            <FormControlLabel value="mais" control={<Radio color="primary"/>} label="mais" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" fullWidth required margin="normal">
          <FormLabel component="legend">Em qual quesito sua ideia melhor se encaixa</FormLabel>
          <RadioGroup aria-label="Quesitos" name="quesito" value={quesito}             onChange={(event) => {
              setQuesito(event.target.value)
            }}>
            <FormControlLabel value="Quesito 1" control={<Radio color="primary"/>} label="Tenho um problema e preciso de uma solução" />
            <FormControlLabel value="Quesito 2" control={<Radio color="primary"/>} label="Tenho uma solução para um problema" />
            <FormControlLabel value="Quesito 3" control={<Radio color="primary"/>} label="Quero desenvolver um produto" />
            <FormControlLabel value="Quesito 4" control={<Radio color="primary"/>} label="Outros" />
          </RadioGroup>
        </FormControl>

        <TextField
          value={ideia}
          onChange={(event) => {
            setIdeia(event.target.value)
          }}
          name="ideia"
          id="ideia"
          fullWidth
          margin="normal"
          label="Descrição da ideia"
          placeholder="Detalhe aqui sua ideia..."
          multiline
          variant="outlined"
          required
        />

        <div className={style.buttonSubmite}>
        <Button variant="contained" color="primary" fullWidth type="submit">
          CADASTRAR
        </Button>
        </div>
      </form>
    </div>
  )
}