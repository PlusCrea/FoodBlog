import Image from 'next/image'
import Link from "next/link"



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="top-catagory-area section-padding-80-0">
  <div className="container">
    <div className="row">
      {/* Top Catagory Area */}
      <div className="col-12 col-lg-6">
        <div className="single-top-catagory">
        <Image
      src="/img/mexican.jpg"
      width={540}
      height={247}
      alt="Mexican Foods"
    />
          {/* Content */}
          <div className="top-cta-content">
            <h3>Mexican Foods</h3>
            <h6>Simple &amp; Delicios</h6>
            <Link href="/mexican/" className="btn delicious-btn">See Full Receipe</Link>
            
          </div>
        </div>
      </div>
      {/* Top Catagory Area */}
      <div className="col-12 col-lg-6">
        <div className="single-top-catagory">
          
          <Image
      src="/img/chinese.jpg"
      width={540}
      height={247}
      alt="Picture of the author"
    />
          {/* Content */}
          <div className="top-cta-content">
            <h3>Chinesse Foods</h3>
            <h6>Simple &amp; Delicios</h6>
            <Link href="/chinese/" className="btn delicious-btn">See Full Receipe</Link>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="single-top-catagory">
        <Image
      src="/img/birthday.jpg"
      width={540}
      height={247}
      alt="Picture of the author"
    />
          {/* Content */}
          <div className="top-cta-content">
            <h3>Birthday Cakes</h3>
            <h6>Simple &amp; Delicios</h6>
            <Link href="/cakes/" className="btn delicious-btn">See Full Receipe</Link>
            
          </div>
        </div>
      </div>
      {/* Top Catagory Area */}
      <div className="col-12 col-lg-6">
        <div className="single-top-catagory">
          
          <Image
      src="/img/vegan.jpg"
      width={540}
      height={247}
      alt="Picture of the author"
    />
          {/* Content */}
          <div className="top-cta-content">
            <h3>Vegan Foods</h3>
            <h6>Simple &amp; Delicios</h6>
            <Link href="/vegan/" className="btn delicious-btn">See Full Receipe</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </main>
  )
}
