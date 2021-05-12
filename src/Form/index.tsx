import style from './styles.module.scss'
import TextField from '@material-ui/core/TextField'
import { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import { FormControlLabel, InputLabel, Radio, Select, MenuItem, Button } from '@material-ui/core'


export function Form() {
  const [value, setValue] = useState("unico");
  const [theme, setTheme] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleTheme = (event) => {
    setTheme(event.target.value);
  }


  return (
    <div className={style.formContainer}>
      <h1 id="title" className={style.title}>Cadastro de ideias</h1>
      <p id="caption" className={style.caption}>Preencha as informações</p>
      <form action="" noValidate autoComplete="off">
        <TextField
          id=""
          label="Nome da equipe"
          name=""
          fullWidth
        />
        <TextField
          id=""
          label="Responsavel"
          name=""
          fullWidth
        />
        <TextField
          id=""
          label="Email"
          name=""
          fullWidth
        />
        <FormControl component="fieldset">
          <FormLabel component="legend">Numero de integrantes incluindo você</FormLabel>
          <RadioGroup aria-label="" name="" value={value} onChange={handleChange}>
            <FormControlLabel value="unico" control={<Radio color="primary"/>} label="Só você" />
            <FormControlLabel value="1-3" control={<Radio color="primary"/>} label="1 - 3" />
            <FormControlLabel value="3-5" control={<Radio color="primary"/>} label="3 - 5" />
            <FormControlLabel value="5-10" control={<Radio color="primary"/>} label="5 - 10" />
            <FormControlLabel value="mais" control={<Radio color="primary"/>} label="mais" />
          </RadioGroup>
        </FormControl>
        <TextField
          id=""
          label="Email"
          name=""
          fullWidth
        />

        <FormControl fullWidth>
          <InputLabel>Temas</InputLabel>
          <Select
            value={theme}
            onChange={handleTheme}
          >
            <MenuItem value={'them-id'}>Theme name</MenuItem>
            <MenuItem value={'them-id'}>Theme name</MenuItem>
            <MenuItem value={'them-id'}>Theme name</MenuItem>
            <MenuItem value={'them-id'}>Theme name</MenuItem>
            <MenuItem value={'them-id'}>Theme name</MenuItem>
            <MenuItem value={'them-id'}>Theme name</MenuItem>
          </Select>
        </FormControl>

        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">Numero de integrantes incluindo você</FormLabel>
          <RadioGroup aria-label="" name="" value={value} onChange={handleChange}>
            <FormControlLabel value="unico" control={<Radio color="primary"/>} label="Só você" />
            <FormControlLabel value="1-3" control={<Radio color="primary"/>} label="1 - 3" />
            <FormControlLabel value="3-5" control={<Radio color="primary"/>} label="3 - 5" />
            <FormControlLabel value="5-10" control={<Radio color="primary"/>} label="5 - 10" />
            <FormControlLabel value="mais" control={<Radio color="primary"/>} label="mais" />
          </RadioGroup>
        </FormControl>

        <TextField
          fullWidth
          id="outlined-textarea"
          label="Descrição da ideia"
          placeholder="Detalhe aqui sua ideia..."
          multiline
          variant="outlined"
        />
        <div className={style.buttonSubmite}>

        <Button variant="contained" color="primary">
          CADASTRAR
        </Button>
        </div>
      </form>
    </div>
  )
}