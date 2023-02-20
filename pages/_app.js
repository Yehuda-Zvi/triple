import Header from "@/components/Header"
import Nav from "@/components/Nav"
import "@/styles/globals.scss"
import "@/styles/nav.scss"
import "@/styles/header.scss"
import { Assistant } from "@next/font/google"
const asis = Assistant({ subsets: ["latin"] })

export default function App({ Component, pageProps }) {
  return (
    <div className={asis.className}>
      <Nav />
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
