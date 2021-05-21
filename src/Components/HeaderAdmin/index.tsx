import style from './styles.module.scss'
import Link from 'next/link';

export function HeaderAdmin() {


  return (
    <header className={style.headerContainer}>
      <Link href="/adminpage">
        <img src="/logo.png" alt="ideia-aqui" style={{width: "10rem", height:"10rem"}} />
      </Link>
        <p>Banco de ideias</p>
      <div className={style.spanGroup}>
        <Link href="/adminpage">
          <span>Temas</span>
        </Link>
        <Link href="/ideiascadastradas">
          <span>Ideias cadastradas</span>
        </Link>
        <Link href="/login">
          <span>Logout</span>
        </Link>
      </div>
    </header>
  );
}