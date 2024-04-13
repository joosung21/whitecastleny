"use client"
import Top from "@/app/components/Layout/Top/Top"
import Main from "@/app/components/Layout/Main/Main"
import Left from "@/app/components/Layout/Left/Left"
import Footer from "@/app/components/Layout/Footer/Footer"

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Left />
      <Main>
        <Top />
        <div style={{ marginTop: "56px" }}>{children}</div>
        <Footer />
      </Main>
    </>
  )
}
