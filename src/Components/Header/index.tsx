import style from './styles.module.scss'
import format from 'date-fns/format';
import ptBr from 'date-fns/locale/pt-BR';
import { Button, IconButton } from '@material-ui/core';

export function Header({isMenuVisible, setIsMenuVisible}) {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBr
  })

  return (
    <header className={style.headerContainer}>
      <img src="/logo.png" alt="ideia-aqui" style={{width: "10rem", height:"10rem"}} />
      <p>Banco de ideias</p>
      <Button onClick={() => setIsMenuVisible(!isMenuVisible)} variant="contained" color="primary" style={{marginLeft: "auto"}} >
        Registrar ideia
      </Button>
    </header>
  );
}
