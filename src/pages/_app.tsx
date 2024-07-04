import { AppProps } from "next/app";
import '../app/globals.css'
import { TableProvider } from "@/app/context/TableContext";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <TableProvider>
      <Component {...pageProps} />
    </TableProvider>
  );
};

export default MyApp;
