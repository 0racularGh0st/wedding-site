import React, {useEffect} from "react"
// import { Link } from "gatsby"
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Rellax from 'rellax';
import Invitation from '../components/invitation'
import Directions from '../components/directions'
import "./main.scss";

const IndexPage = () => {
//   useEffect(()=>{
//     window.addEventListener('scroll', ()=>{
//       const parallax = document.querySelector('.background-main-style');
//       let scrollPosition = window.pageYOffset;
//         parallax.style.transform = "translateY("+ scrollPosition*0.3 + "px)";
//   });
// })
  useEffect(()=> {
    const viewportDiff = document.documentElement.clientHeight - window.innerHeight;
    let container1= document.querySelector(".home-content-container-one");
    //console.log(container1);
    container1.style.height = `calc(100vh + ${viewportDiff}px)`;
    window.scrollTo(0,0);
    const rellax = new Rellax(".background-main-style",{
      speed: -4,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
    });
    return() => {
      console.log("cleanup");
      rellax.destroy();
    }
  })
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "background-main.jpg" }) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`)
return (
  <Layout>
    <SEO title="Invite" />
    <div className="home-content-container-one">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} 
        fadeIn 
        durationFadeIn={1000}
        className="rellax background-main-style"
        loading="eager"
        />
        <div className="nigel-naki-container">
        <img src="/nigelnaki.svg" alt="nigelnaki" aria-label="nigelnaki"/>
        </div>
    </div>
    <div className="home-content-container-two">
      <div className="bible-verse-container">
      <div className="bible-verse">
           <img src="/bibleverse.svg" alt="verse" aria-label="verse"/>
      </div>
      </div>
      <Invitation/>
      <Directions/>
    </div>
  </Layout>
)
}

export default IndexPage
