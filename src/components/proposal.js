import React, {useEffect} from 'react'
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
const Proposal = () => {
    //useEffect(()=> {
    //     const rellax = new Rellax(".background-main-style",{
    //       speed: -4,
    //     center: true,
    //     wrapper: null,
    //     round: true,
    //     vertical: true,
    //     horizontal: false
    //     });
    //     return() => {
    //       console.log("cleanup");
    //       rellax.destroy();
    //     }
    //   })
      const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "proposal.jpg" }) {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)
    
    return (
        <div>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} 
                fadeIn 
                durationFadeIn={1000}
                loading="eager"
                />
        </div>
    )
}

export default Proposal