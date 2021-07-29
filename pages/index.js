import { useEffect } from "react";
import Head from "next/head";
//mport Image from "next/image";
import styles from "../styles/Home.module.scss";
import NavBar from "../components/NavBar";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>tiktofy</title>
        <meta name="description" content="video" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.wraper_row}>
          <div className={styles.grid_left} data-aos="fade-up">
            <h1 className={styles.heading_main}>
              TikTok videos on your shopify website
            </h1>
            <h1 className={styles.heading_sub}>
              Tiktokify is the interactive short form web story video platform
              for you to engage and convert your website visitors
            </h1>
            <button className={styles.btn_main}>Install on Shopify</button>
          </div>
          <div className={styles.grid_right} data-aos="fade-right">
            <video
              alt="vid"
              muted
              loop
              autoPlay="true"
              className={styles.main_video}
            >
              <source src="https://firework.tv/wp-content/uploads/2021/07/Hero-Final-Version-.mp4" />
            </video>
          </div>
        </div>
      </main>
    </div>
  );
}
