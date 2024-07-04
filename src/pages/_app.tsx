"use client"
import { AppProps } from "next/app";
import '../app/globals.css'
import { TableProvider } from "../app/context/TableContext";
import React from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <TableProvider>
      <Component {...pageProps} />
    </TableProvider>
  );
};

export default MyApp;
