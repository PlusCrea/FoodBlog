//import './globals.css'
import './css/style.css'
import { Inter } from 'next/font/google'
import Header from './layout/header'
import Footer from './layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chinese Mexican Vegan and Birthday Cakes Food Recipes',
  description: 'Chinese Mexican Vegan and Birthday Cakes reciepes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
        
    </html>
  )
}
