import { CardTheme } from "../CardTheme";
import style from './home.module.scss';
const themes  = [
  { 
      titulo: "Cidades Inteligentes", 
      dataInicio: "10-03-2021", 
      dataFim: "20-06-2021", 
      requisitos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus ipsum, rutrum eu luctus quis, consectetur et neque. Integer risus ligula, cursus eget placerat sed, venenatis sit amet justo." 
  },
  { 
      titulo: "Cidades Inteligentes", 
      dataInicio: "10-03-2021", 
      dataFim: "20-06-2021", 
      requisitos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus ipsum, rutrum eu luctus quis, consectetur et neque. Integer risus ligula, cursus eget placerat sed, venenatis sit amet justo." 
  },
  { 
      titulo: "Cidades Inteligentes", 
      dataInicio: "10-03-2021", 
      dataFim: "20-06-2021", 
      requisitos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus ipsum, rutrum eu luctus quis, consectetur et neque. Integer risus ligula, cursus eget placerat sed, venenatis sit amet justo." 
  },
  { 
      titulo: "Cidades Inteligentes", 
      dataInicio: "10-03-2021", 
      dataFim: "20-06-2021", 
      requisitos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus ipsum, rutrum eu luctus quis, consectetur et neque. Integer risus ligula, cursus eget placerat sed, venenatis sit amet justo." 
  },
  { 
      titulo: "Cidades Inteligentes", 
      dataInicio: "10-03-2021", 
      dataFim: "20-06-2021", 
      requisitos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus ipsum, rutrum eu luctus quis, consectetur et neque. Integer risus ligula, cursus eget placerat sed, venenatis sit amet justo." 
  },
  { 
      titulo: "Cidades Inteligentes", 
      dataInicio: "10-03-2021", 
      dataFim: "20-06-2021", 
      requisitos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus ipsum, rutrum eu luctus quis, consectetur et neque. Integer risus ligula, cursus eget placerat sed, venenatis sit amet justo." 
  },

]

export default function Home() {
  return(
    <div className={style.home}>
      {
        themes.map((theme, index) => 
          <CardTheme key={index}  theme={theme}/>)
  
      }
    </div>

  )
}
