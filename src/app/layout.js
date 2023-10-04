//import './globals.css'
import './css/style.css'
import { Inter } from 'next/font/google'
import Header from './layout/header'
import Footer from './layout/footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chinese Mexican Vegan and Birthday Cakes Food Recipes',
  description: 'Chinese Mexican Vegan and Birthday Cakes reciepes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-TQHRZCM7KP" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-TQHRZCM7KP');
        `}
      </Script>
        <Header/>
        {children}
        <Footer/>
        </body>
        
    </html>
  )
}
