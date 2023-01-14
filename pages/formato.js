import React from 'react';
import Navbar from '/Components/Navbar';
import Footer from "/Components/Footer";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {

  
  return (
    <div className="bg-blue-100 w-full h-screen">
      <Head>
        <title>EvoltFit - Sistema Experto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>


      </main>
      <Footer></Footer>
    </div>
  );
}