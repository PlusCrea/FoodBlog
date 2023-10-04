import React from 'react'
import list from "../../data/chinese/list"
import Image from 'next/image'
import Link from "next/link"
import CreateSlug from '../util'

export default function ChineseFood() {
  //console.log("list",list);
  
  return (

    <section className="best-receipe-area">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="section-heading">
          <h3>The Chinese Receipies</h3>
        </div>
      </div>
    </div>
    <div className="row">
      {/* Single Best Receipe Area */}
      {list && list.map((list) => (
        <div key={list.id} className="col-12 col-sm-6 col-lg-4">
          <Link href={`/chinese/${CreateSlug(list.title)}/${list.id}`}>
        <div className="single-best-receipe-area mb-30">
        <Image
            src={list.image}
            width={350}
            height={301}
            alt={list.title}
          />
          <div className="receipe-content">
          
              <h5>{list.title}</h5>
             
            <div className="ratings">
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star-o" aria-hidden="true" />
            </div>
          </div>
        </div>
        </Link>
      </div>
     
    ))}
      

    </div>
  </div>
</section>

   
  )
}
