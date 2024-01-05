import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Network Digital Business School</title>
        <meta name="description" content="Network Digital Business School" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Toaster />
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
