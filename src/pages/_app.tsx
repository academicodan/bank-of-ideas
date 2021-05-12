import { Header } from '../Header';
import '../styles/global.scss';
import styles from '../styles/app.module.scss';
import { Form } from '../Form';
import { CardTheme } from '../CardTheme';


function MyApp({ Component, pageProps }) {
  return(
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Form />
    </div>
  )
}

export default MyApp
