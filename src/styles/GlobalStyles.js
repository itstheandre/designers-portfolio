import { createGlobalStyle } from "styled-components"
import { screenConst } from "../utils/styleConst"

export const sections = `sections wS`
export const h1 = `h1 wS`
export const h2 = `libre h2`
export const h3 = `wS h3`
export const h4 = `libre h4`
export const body = `heebo body`
export const captions = `captions heebo`
export const menu = `wS menu`
export const links = `wS links `

// export default createGlobalStyle`

//    @import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap");
//    @import url("https://fonts.googleapis.com/css2?family=Heebo&display=swap");
//    @import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap");

//    html {
//       box-sizing:border-box;
//       font-size:10px;
//       --lightBlue: #DFFFFD;
//       --white:#fff;
//       --grey:#333333;
//       --blue:#2AB7BF;

//    }
//    * , *::before,*::after {
//       box-sizing:inherit;
//       margin:0;
//       padding:0
//    }

//    body {
//       margin:0;
//       padding:0
//    }

//    .innerFw {
//       width:100%;
//       max-width:${screenConst.bigMax};
//       margin:0 auto;

//       @media (${screenConst.bigMin}){
//          padding-left:7.2rem;
//          max-width:${screenConst.bigMax}
//       }

//       @media (${screenConst.lapMin}){
//          max-width:${screenConst.lapMax};
//       }
//    }

//    .fw {
//       width: 100vw;
//       max-width: calc(100vw - ${48 * 2}px);
//       margin-inline-start:auto;
//       margin-inline-end:auto;

//       @media (${screenConst.lapMin}) {
//          max-width: calc(100vw - ${36 * 2}px)
//       }

//       @media (${screenConst.phoneMin}) {
//          max-width:90vw;
//       }
//    }

//    .sections {
//       font-size:1.2rem;
//       letter-spacing:0.2rem;
//       line-height:160%;
//       text-transform:uppercase;
//       font-family: 'Work Sans', sans-serif;
//    }

//    .h1 {
//       font-size: 3rem;
//       line-height:120%;
//       font-family: 'Work Sans', sans-serif;
//       font-weight:bold;
//    }

//    .h2 {
//       font-size: 3rem;
//       font-weight:normal;
//    }

//    .wS {
//       font-family: 'Work Sans', sans-serif;
//       :hover {
//          font-family: 'Libre Baskerville', serif;
//          font-style:italic;
//       }
//    }

//    .italic {
//       font-style:italic;
//       font-weight:normal;
//       font-family: 'Libre Baskerville', serif;
//    }

//    .h3 {
//       font-size:2rem;
//       font-family: 'Work Sans', sans-serif;
//    }

//    .h4 {
//       font-family: 'Libre Baskerville', serif;
// font-style:italic;
//    }

//    .body {
//       font-family: 'Heebo', sans-serif;
//    }

//    .captions {
//       font-family: 'Heebo', sans-serif;

//    }

//    .menu {
//       font-family: 'Work Sans', sans-serif;
//       font-size:1.4rem;
//    }

//    .links {
//       font-family: 'Work Sans', sans-serif;
//       font-style:bold;
//    }

//    .projectFont {
//       font-size: 5rem;
//       line-height:120%;
//       color:var(--blue);
//    }
// `

export const GlobalStyle = createGlobalStyle`
   @import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap");
   @import url("https://fonts.googleapis.com/css2?family=Heebo&display=swap");
   @import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap");

   html {
      box-sizing: border-box;
      font-size:10px;
      --lightBlue: #DFFFFD; 
      --white: #fff;
      --grey: #333333;
      --blue: #2AB7BF;
      --captionsGrey: #878787;
   }

   *, *::before, *::after {
      box-sizing: inherit;
      margin: 0;
      padding: 0;
   }

   a {
      text-decoration:none;
   }

   .xtContainer {
      width: 100vw;
      margin: 0 auto;
      @media (min-width:1200px) {
         max-width: 93.6rem;
      }

      @media (max-width:1199px) {
         max-width:84rem;
      }

      @media (max-width: 899px) {
         max-width:55.2rem;
      }

      @media (max-width: 599px) {
         max-width: 90vw;
      }
   }

   .inContainer {
      width:100%;
      margin: 0 auto;

      @media (max-width: 599px) {
         max-width: 80vw;
      }
   }

   .heroW {
      max-width: calc(100vw - ${48 * 2}px);
      margin-left:auto;
      margin-right:auto;
      width:100vw;
   
      @media (max-width:940px) {
         max-width:84rem;
      }

      @media (max-width:915px) {
         max-width: 84rem;
      }
      @media (max-width: 899px) {
         max-width: calc(100vw - ${36 * 2}px);
      }

      @media (max-width:630px) {
         max-width:55.2rem;
      }
      @media (max-width:599px) {
         max-width: 90vw;
      }
   }

   .hero {
      height: calc(100vh - ${48 * 2}px);
      @media (max-width: 899px) {
         height: calc(100vw - ${36 * 2}px);
      }
   }

   .wS {
      font-family: "Work Sans", sans-serif;
   }

   .heebo {
      font-family: 'Heebo', sans-serif;
   }

   .libre {
      font-family: 'Libre Baskerville', serif;
      font-style:italic;
   }

   .sections {
      font-size:1.2rem;
      letter-spacing: 0.2em;
      line-height:160%;
      text-transform: uppercase;
   }

   .italic {
      font-style:italic;
      font-weight:normal;
      font-family: 'Libre Baskerville', serif;
   }

   .h1 {
      font-size:3rem;
      font-weight: bold;
      line-height:120%;
   }

   .h2 {
      font-size:3rem;
      line-height: 120%;
   }

   .h3 {
      font-weight:bold;
      letter-spacing: 120%;
      font-size: 2rem
   }

   .h4 {
      font-size: 2rem;
      line-height: 120%;
   }

   .body {
      font-size: 1.4rem;
      line-height: 160%;

      @media (max-width:899px) {
         font-size:1.6rem
      }
   }

   .captions {
      font-size:1.2rem;
      line-height:150%;
      color: var(--captionsGrey);
   }

   .menu {
      font-size:1.4rem;
      line-height:140%;
      text-decoration:none;
      padding-inline: 1rem;
      &:hover {
         font-family: 'Libre Baskerville', serif;
         font-style:italic;
      }
   }

   .links {
      font-weight: bold;
      font-size:1.4rem;
      line-height:120%;
      

      &:hover {
         font-family: 'Libre Baskerville', serif;
         font-style:italic;
         font-weight:normal;
      }
   }

   .h100 {
      height:100%;
   }
   
`
