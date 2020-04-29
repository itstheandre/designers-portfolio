import { createGlobalStyle } from "styled-components"
import { screenConst } from "../utils/styleConst"

export default createGlobalStyle`
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
   }

   .h1 {
      font-size: 3rem;
      line-height:120%;
   }

   .h2 {
      font-size: 3rem;
      font-weight:normal;
   }

   .italic {
      font-style:italic;
   }

   .h3 {
      font-size:2rem;
   }


   .projectFont {
      font-size: 5rem;
      line-height:120%;
      color:var(--blue);
   }
`
