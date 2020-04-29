import { createGlobalStyle } from "styled-components"
import { screenConst } from "../utils/styleConst"

export default createGlobalStyle`

   @import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap");
   @import url("https://fonts.googleapis.com/css2?family=Heebo&display=swap");
   @import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap");

   html {
      box-sizing:border-box;
      font-size:10px;
      --lightBlue: #DFFFFD;
      --white:#fff;
      --grey:#333333;
      --blue:#2AB7BF;


   }
   * , *::before,*::after {
      box-sizing:inherit;
      margin:0;
      padding:0
   }

   body {
      margin:0;
      padding:0
   }


   .innerFw {
      width:100%;
      max-width:${screenConst.bigMax};
      margin:0 auto;

      @media (${screenConst.bigMin}){
         padding-left:7.2rem;
         max-width:${screenConst.bigMax}
      }

      @media (${screenConst.lapMin}){
         max-width:${screenConst.lapMax};
      }
   }

   .fw {
      width: 100vw;
      max-width: calc(100vw - ${48 * 2}px);
      margin-inline-start:auto;
      margin-inline-end:auto;

      @media (${screenConst.lapMin}) {
         max-width: calc(100vw - ${36 * 2}px)
      }

      @media (${screenConst.phoneMin}) {
         max-width:90vw;
      }
   }

   .sections {
      font-size:1.2rem;
      letter-spacing:0.2rem;
      line-height:160%;
      text-transform:uppercase;
      font-family: 'Work Sans', sans-serif;
   }

   .h1 {
      font-size: 3rem;
      line-height:120%;
      font-family: 'Work Sans', sans-serif;
      font-weight:bold;
   }

   .h2 {
      font-size: 3rem;
      font-weight:normal;
   }

   .wS {
      font-family: 'Work Sans', sans-serif;
      :hover {
         font-family: 'Libre Baskerville', serif;
         font-style:italic;
      }
   }

   .italic {
      font-style:italic;
      font-weight:normal;
      font-family: 'Libre Baskerville', serif;
   }

   .h3 {
      font-size:2rem;
      font-family: 'Work Sans', sans-serif;
   }

   .h4 {
      font-family: 'Libre Baskerville', serif;
font-style:italic;
   }

   .body {
      font-family: 'Heebo', sans-serif;
   }

   .captions {
      font-family: 'Heebo', sans-serif;

   }

   .menu {
      font-family: 'Work Sans', sans-serif;
      font-size:1.4rem;
   }

   .links {
      font-family: 'Work Sans', sans-serif;
      font-style:bold;
   }


   .projectFont {
      font-size: 5rem;
      line-height:120%;
      color:var(--blue);
   }
`
