import React, {useEffect} from "react"
// import { Link } from "gatsby"
import { useStaticQuery, graphql, Link} from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Rellax from 'rellax';
import Proposal from '../components/proposal'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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
    <SEO title="Home" />
    <div className="home-content-container-one">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} 
        fadeIn 
        durationFadeIn={1000}
        className="rellax background-main-style"
        loading="eager"
        />
        <div className="nigel-naki-container">
        <img src="/nigelnaki.svg"/>
        </div>
    </div>
    <div className="home-content-container-two">
      <div className="bible-verse">
            <h2>
            "We love because he first loved us"
            </h2>
            <h4>
              - 1 John 4:19
            </h4>
      </div>
      <Proposal/>
    </div>
  </Layout>
)
}

export default IndexPage
