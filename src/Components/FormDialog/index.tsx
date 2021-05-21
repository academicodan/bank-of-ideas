import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import { useState } from "react";
import style from './style.module.scss'

export default function FormDialog() {
  const [open, setOpen] = useState(false)
  const [nomeTema, setNomeTema] = useState<string>("")
  const [subtema, setSubtema] = useState<string>("")
  const [dataInicio, setDataInicio] = useState<string | undefined>("")
  const [dataFim, setDataFim] = useState<string | undefined>("")
  const [requisitos, setRequisitos] = useState("")
  const [dadosColetados, setDados] = useState([])


  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false)
  }

  function ColetarDados(dados) {
    const newDados = [...dadosColetados, dados]
    setDados(newDados);
    console.log({dadosColetados})
    handleClose()
    limparCampos()
  }

  function limparCampos(){
    setNomeTema("");
    setSubtema("");
    setDataInicio("");
    setDataFim("");
    setRequisitos("");
  }


  return (
    <div className={style.containerButton}>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Adicionar tema
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>
          Adicione um novo tema para o banco de ideias
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            id="tema"
            label="Nome do Tema"
            fullWidth
            required
            value={nomeTema}
            onChange={(event) => {
              setNomeTema(event.target.value)
            }}
          />
          <TextField
            autoFocus
            margin="normal"
            id="subTema"
            label="Subtema"
            fullWidth
            value={subtema}
            onChange={(event) => {
              setSubtema(event.target.value)
            }}
          />
          <TextField
            autoFocus
            margin="normal"
            id="dataInicio"
            label="Data inicio"
            placeholder="Data inicio"
            fullWidth
            required
            value={dataInicio}
            type="date"
            InputLabelProps={{
              shrink: true
            }}
            onChange={(event) => {
              setDataInicio(event.target.value)
            }}
          />
          <TextField
            autoFocus
            margin="normal"
            id="dataFim"
            label="Data fim"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            required
            value={dataFim}
            type="date"
            onChange={(event) => {
              setDataFim(event.target.value)
            }}
          />
          <TextField
            autoFocus
            margin="normal"
            id="requisitos"
            label="Requisitos"
            fullWidth
            required
            variant="outlined"
            value={requisitos}
            rowsMax={3}
            onChange={(event) => {
              setRequisitos(event.target.value)
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={ () => ColetarDados({nomeTema, subtema, dataInicio, dataFim, requisitos})} color="primary" variant="text">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

