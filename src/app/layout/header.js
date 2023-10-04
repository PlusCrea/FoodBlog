import React from 'react'
import Image from 'next/image'
//import logo from '/img/logo.png'
import Link from "next/link"

export default function Header() {
  return (
    <header className="header-area">
  {/* Top Header Area */}
  <div className="top-header-area">
    <div className="container h-100">
      <div className="row h-100 align-items-center justify-content-between">
        {/* Breaking News */}
        <div className="col-12 col-sm-6">
          <div className="breaking-news">
            <div id="breakingNewsTicker" className="ticker">
              <ul>
                <li><a href="#">Hello World!</a></li>
                <li><a href="#">Welcome to Colorlib Family.</a></li>
                <li><a href="#">Hello Delicious!</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Top Social Info */}
        <div className="col-12 col-sm-6">
          <div className="top-social-info text-right">
            <a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a>
            <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
            <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
            <a href="#"><i className="fa fa-dribbble" aria-hidden="true" /></a>
            <a href="#"><i className="fa fa-behance" aria-hidden="true" /></a>
            <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Navbar Area */}
  <div className="container">
  <header className="d-flex flex-wrap justify-content-around py-3 mb-4 border-bottom">
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
    <Image
      src="/img/logo.png"
      width={144}
      height={65}
      alt="Picture of the author"
    />
    
    </a>
    <ul className="nav nav-pills">
      <li className="nav-item"><Link href="/" className="nav-link active">Home</Link></li>
      <li className="nav-item"><Link href="/mexican/" className="nav-link">Mexican</Link></li>
      <li className="nav-item"><Link href="/chinese/" className="nav-link">Chinese</Link></li>
      <li className="nav-item"><Link href="/vegan/" className="nav-link">Vegan</Link></li>
      <li className="nav-item"><Link href="/cakes/" className="nav-link">Cakes</Link></li>
    </ul>
  </header>
</div>

 
</header>

  )
}
