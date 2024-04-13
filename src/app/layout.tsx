import React from "react"
import type { Metadata } from "next"
import "./globals.scss"
import "react-datepicker/dist/react-datepicker.css"
import { NextuiProvider } from "./nextui-provider"
import Snackbar from "@/app/components/Snackbar/Snackbar"
import LoadingOverlay from "@/app/components/LoadingOverlay/LoadingOverlay"
import GlobalLayout from "./components/Layout/GlobalLayout"

export const metadata: Metadata = {
  title: "화이트캐슬 NewYork",
  description: "화이트캐슬 NewYork",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <NextuiProvider>
          <GlobalLayout>{children}</GlobalLayout>
          <Snackbar />
          <LoadingOverlay />
        </NextuiProvider>
      </body>
    </html>
  )
}
