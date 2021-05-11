import style from './styles.module.scss'


export function Header() {
  return (
    <header className={style.headerContainer}>
      <h1>PUC - Campinas</h1>
      <p>Banco de ideias</p>
      <span>User</span>
    </header>
  );
}


// p e span 