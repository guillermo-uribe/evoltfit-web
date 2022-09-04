import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>EvoltFit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 class="font-thin text-2xl">
          {"Bienvenido a... "} 
          <br/>
          <span class="animate-pulse text-8xl text-blue-600 font-normal">EvoltFit</span>
        </h1>

        <button onClick={() => router.push('/registro')} className="btn btn-info btn-outline btn-wide btn-md rounded-full my-10">Registrarme</button>

      </main>

      <footer className={styles.footer}>
        <p className="font-light">
          {'Powered by '}
          <span className="animate-pulse font-bold text-fuchsia-500">
            {'Chupapi Muñaño'}
          </span>
        </p>
      </footer>
    </div>
  )
}
