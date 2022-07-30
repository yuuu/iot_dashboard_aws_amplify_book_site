import "../styles/globals.css";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import Head from "next/head";
import { useState } from "react";
import type { AppProps } from "next/app";
import Navbar from "../src/components/layouts/Navbar";
import Sidebar from "../src/components/layouts/Sidebar";
import CopyRight from "../src/components/layouts/CopyRight";
import Footer from "../src/components/layouts/Footer";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [sidebarClosed, setSidebarClosed] = useState(true);
  const onSidebarToggle = () => setSidebarClosed(!sidebarClosed);

  return (
    <>
      <Head>
        <title>Enviiewer | Monitoring the environment with IoT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar sidebarClosed={sidebarClosed} onSidebarToggle={onSidebarToggle} />
      <div className="flex overflow-hidden bg-white pt-16">
        <Sidebar closed={sidebarClosed} onClick={onSidebarToggle} />
        <div
          id="main-content"
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
        >
          <main>
            <div className="pt-6 px-4">
              <Component {...pageProps} />
            </div>
          </main>
          <Footer />
          <CopyRight />
        </div>
      </div>
    </>
  );
};

export default MyApp;
