import React from 'react'

export default function Footer() {
  return (
    <footer className="footer-area">
  <div className="container h-100">
    <div className="row h-100">
      <div className="col-12 h-100 d-flex flex-wrap align-items-center justify-content-between">
        {/* Footer Social Info */}
        <div className="footer-social-info text-right">
          <a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a>
          <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
          <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
          <a href="#"><i className="fa fa-dribbble" aria-hidden="true" /></a>
          <a href="#"><i className="fa fa-behance" aria-hidden="true" /></a>
          <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
        </div>
        {/* Footer Logo */}
        <div className="footer-logo">
          <a href="index.html"><img src="img/core-img/logo.png" alt="" /></a>
        </div>
        {/* Copywrite */}
        <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          Copyright © All rights reserved | This website is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://pluscrea.net" target="_blank">PlusCrea</a>
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
      </div>
    </div>
  </div>
</footer>

  )
}
