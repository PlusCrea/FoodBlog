import Image from 'next/image'
import list from "@/data/vegan/list"

export async function generateMetadata({ params }) {
  // read route params
  let filename = "food-" + params.id + ".json"
 
  // fetch data
  const data =await  import(`@/data/vegan/${filename}`)
 
  // optionally access and extend (rather than replace) parent metadata
 
  return {
    title: "Vegan Reciepes " + data.title,
    openGraph: {
      title: "Vegan Reciepes " + data.title,
      description: data.description,
    },
  }
}

export async function generateStaticParams() {
  return list.map((lst) => ({
    id: lst.id,
  }))
}

export default async  function VeganFoodDetail({ params }) {

let filename = "food-" + params.id + ".json"
//console.log("file",filename);
const data =await  import(`@/data/vegan/${filename}`)
//console.log(data.method[0]);

  return (
    <>
    <div className="receipe-post-area section-padding-80">
  
  {/* Receipe Slider */}
  <div className="container">
    <div className="row">
      <div className="col-12">
      <Image
            src={data.image}
            width={500}
            height={250}
            alt={data.title}
            loading="lazy"
          />
      </div>
    </div>
  </div>
  {/* Receipe Content Area */}
  <div className="receipe-content-area">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8">
          <div className="receipe-headline my-5">
            <h2>{data.title}</h2>
            <div className="receipe-duration">
              <h6>Portion: {data.portion}</h6>
              <h6>Time: {data.time}</h6>
              <h6>Description: {data.description}</h6>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="receipe-ratings text-right my-5">
            <div className="ratings">
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star-o" aria-hidden="true" />
            </div>
            <a href="#" className="btn delicious-btn">{data.difficulty}</a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-8">
          
        {data.method.map((element, index, array) => {
          let cnt = index+1;
          let step = "Step " + cnt;
          
              return(
            <div key={index} className="single-preparation-step d-flex">
            <h4>{cnt.toString().padStart(2,"0")} .</h4>
            <p>{element[step]} </p>
          </div>)
            })}

        </div>
        {/* Ingredients */}
        <div className="col-12 col-lg-4">
          <div className="ingredients">
            <h4>Ingredients</h4>
            {/* Custom Checkbox */}
            {data.ingredients.map((currentElement, index, array) => {
              return(
               <div key={index} className="custom-control custom-checkbox">
               <input type="checkbox" className="custom-control-input" id={`customCheck${index+1}`} />
               <label className="custom-control-label" htmlFor={`customCheck${index+1}`}>{currentElement}</label>
             </div>)
            })}

          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</>
  )
}
