import { Card, CardContent, InputAdornment, makeStyles, TextField, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { busca } from '../../pages/api/buscar';
import { useState, useEffect } from 'react';


const useStyles = makeStyles({
  container: {
    minWidth: "3rem",
  },

  tema: {
    fontSize: "1.2rem",
  },

  data: {
    marginBottom: "1rem",
  },
});

function Cards({ contextCard }) {
  const classes = useStyles();
  const bull = <span>•</span>

  return (
    <Card className={classes.container} style={{marginBottom: "2rem"}}>
      <CardContent>
          <div style={{display: "flex", justifyContent:"space-between"}}>
          <Typography variant="h6" component="h6" gutterBottom className={classes.tema}>
            {contextCard.tema} 
          </Typography>
          <Typography variant="body1" component="h6">
            {contextCard.subtema} 
          </Typography>
          </div>
        <Typography color="textSecondary" className={classes.data}>
          {contextCard.dataInicio} {bull} {contextCard.dataFim}
        </Typography>
        <Typography color="textPrimary" variant="body2" component="p">
          {contextCard.requisitos}
        </Typography>
      </CardContent>
    </Card>
  )
}

const themes = [
  {
    tema: "Cidades Inteligentes",
    subtema: "Preservação ambiental",
    dataInicio: "10-03-2021",
    dataFim: "20-06-2021",
    requisitos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus ipsum, rutrum eu luctus quis, consectetur et neque. Integer risus ligula, cursus eget placerat sed, venenatis sit amet justo."
  },
  {
    tema: "Cidades Inteligentes",
    subtema: "Preservação ambiental",
    dataInicio: "10-03-2021",
    dataFim: "20-06-2021",
    requisitos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus ipsum, rutrum eu luctus quis, consectetur et neque. Integer risus ligula, cursus eget placerat sed, venenatis sit amet justo."
  },
  {
    tema: "Teste",
    subtema: "Preservação ambiental",
    dataInicio: "10-03-2021",
    dataFim: "20-06-2021",
    requisitos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus ipsum, rutrum eu luctus quis, consectetur et neque. Integer risus ligula, cursus eget placerat sed, venenatis sit amet justo."
  },
  {
    tema: "Cidades Inteligentes",
    subtema: "Preservação ambiental",
    dataInicio: "10-03-2021",
    dataFim: "20-06-2021",
    requisitos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus ipsum, rutrum eu luctus quis, consectetur et neque. Integer risus ligula, cursus eget placerat sed, venenatis sit amet justo."
  },
  {
    tema: "Cidades Inteligentes",
    dataInicio: "10-03-2021",
    dataFim: "20-06-2021",
    requisitos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus ipsum, rutrum eu luctus quis, consectetur et neque. Integer risus ligula, cursus eget placerat sed, venenatis sit amet justo."
  },
  {
    tema: "Cidades Inteligentes",
    dataInicio: "10-03-2021",
    dataFim: "20-06-2021",
    requisitos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus ipsum, rutrum eu luctus quis, consectetur et neque. Integer risus ligula, cursus eget placerat sed, venenatis sit amet justo."
  },

]


export function CardTheme() {
  const [search, setSearch] = useState('')

  //const [data, setData] = useState([])
  const [auxList, setAuxList] = useState([])
  useEffect(() => {
    busca("/gettemas", setAuxList)
  }, [])
  //const [auxList, setAuxList] = useState(themes)

  const getFilteredList = () => {
    const tempList = auxList
    .filter(item =>{
      if(search.trim() === '') {
        return item
      } else {
        return item.tema.toLowerCase().includes(search.toLowerCase())
      }
    })
    return tempList;
  }

  return (
    <>
      <div style={{width: "100%", display: 'flex', justifyContent: 'flex-end', paddingBottom: '2rem'}}>
      <TextField 
      variant="outlined"
      onChange={(e) => setSearch(e.target.value)}
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="primary"/>
          </InputAdornment>
        ),
      }}
      />
      </div>
      {
        getFilteredList().map((theme, index) => (
          <Cards key={index} contextCard={theme} />
        ))
      }

      <div>
        {
          auxList.length === 0 ? (
            <Card >
            <CardContent style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Typography variant="body2">
                  Não há temas para exibir
                </Typography>
            </CardContent>
          </Card>
          ) : (
            <> 
            </>
          )
        }
      </div>
    </>
  );
}