// import React from "react"
// import styled from "styled-components"
// import { styles } from "../utils"

// export default function HeaderText() {
//   return (
//     <HeroWrapper>
//       <div className="hero-text">
//         <div className="css-typing">
//           <p>
//             <span style={{ color: `${styles.colors.yellow}` }}>if</span>
//             <span style={{ color: `${styles.colors.darkOrange}` }}>&#40;</span>
//             <span style={{ color: `${styles.colors.primaryColor}` }}>life</span>
//             .
//             <span style={{ color: `${styles.colors.secondGreen}` }}>
//               givesYou
//             </span>
//             <span style={{ color: `${styles.colors.darkerOrange}` }}>
//               &#40;&#41;
//             </span>
//             ===
//             <span style={{ color: `${styles.colors.yellow}` }}>'lemons'</span>
//             <span style={{ color: `${styles.colors.darkOrange}` }}>&#41;</span>
//             <span style={{ color: `${styles.colors.green}` }}>&#123;</span>
//           </p>
//           <p style={{ marginLeft: "30px" }}>
//             <span style={{ color: `${styles.colors.primaryColor}` }}>life</span>
//             .
//             <span style={{ color: `${styles.colors.secondGreen}` }}>
//               create
//             </span>
//             <span style={{ color: `${styles.colors.darkOrange}` }}>&#40;</span>
//             <span style={{ color: `${styles.colors.yellow}` }}>'lemonade'</span>
//             <span style={{ color: `${styles.colors.darkOrange}` }}>&#41;</span>
//           </p>
//           <p>
//             <span style={{ color: `${styles.colors.green}` }}>&#125;</span>
//           </p>
//         </div>
//       </div>
//     </HeroWrapper>
//   )
// }

// const HeroWrapper = styled.div`
//   color: ${styles.colors.mainWhite};
//   /* position: fixed; */

//   .hero-text {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     ${styles.textMonoSpace};
//   }

//   .css-typing p {
//     ${styles.textMonoSpace};
//     border-right: 0.1em solid ${styles.colors.primaryColor};
//     font-size: 0.9rem;
//     white-space: nowrap;
//     overflow: hidden;
//     margin-top: 0;
//     margin-bottom: 0.5em;

//     @media (min-width: 400px) {
//       font-size: 1rem;
//     }

//     @media (min-width: 576px) {
//       font-size: 1.5rem;
//     }

//     @media (min-width: 768px) {
//       font-size: 1.7rem;
//     }
//     @media (min-width: 1200px) {
//       font-size: 2rem;
//     }
//   }

//   .css-typing p:nth-child(1) {
//     width: 19.2em;
//     -webkit-animation: type 7s steps(32, end),
//       blink 0.5s step-end infinite alternate;
//     animation: type 7s steps(32, end), blink 0.5s step-end infinite alternate;
//     -webkit-animation-fill-mode: forwards;
//     animation-fill-mode: forwards;
//   }

//   .css-typing p:nth-child(2) {
//     width: 15em;
//     opacity: 0;
//     -webkit-animation: type2 5s steps(25, end),
//       blink 0.5s step-end infinite alternate;
//     animation: type2 5s steps(25, end), blink 0.5s step-end infinite alternate;
//     -webkit-animation-delay: 7s;
//     animation-delay: 7s;
//     -webkit-animation-fill-mode: forwards;
//     animation-fill-mode: forwards;
//   }

//   .css-typing p:nth-child(3) {
//     width: 0.5em;
//     opacity: 0;
//     -webkit-animation: type3 1s steps(1, end),
//       blink 0.5s step-end infinite alternate;
//     animation: type3 1s steps(1, end), blink 0.5s step-end infinite alternate;
//     -webkit-animation-delay: 12s;
//     animation-delay: 12s;
//     -webkit-animation-fill-mode: forwards;
//     animation-fill-mode: forwards;
//   }

//   @keyframes type {
//     0% {
//       width: 0;
//     }
//     99.9% {
//       border-right: 0.15em solid ${styles.colors.primaryColor};
//     }
//     100% {
//       border: none;
//     }
//   }
//   @-webkit-keyframes type {
//     0% {
//       width: 0;
//     }
//     99.9% {
//       border-right: 0.15em solid ${styles.colors.primaryColor};
//     }
//     100% {
//       border: none;
//     }
//   }
//   @keyframes type2 {
//     0% {
//       width: 0;
//     }
//     1% {
//       opacity: 1;
//     }
//     99.9% {
//       border-right: 0.15em solid ${styles.colors.primaryColor};
//     }
//     100% {
//       opacity: 1;
//       border: none;
//     }
//   }
//   @-webkit-keyframes type2 {
//     0% {
//       width: 0;
//     }
//     1% {
//       opacity: 1;
//     }
//     99.9% {
//       border-right: 0.15em solid ${styles.colors.primaryColor};
//     }
//     100% {
//       opacity: 1;
//       border: none;
//     }
//   }
//   @keyframes type3 {
//     0% {
//       width: 0;
//     }
//     1% {
//       opacity: 1;
//     }
//     100% {
//       opacity: 1;
//     }
//   }
//   @-webkit-keyframes type3 {
//     0% {
//       width: 0;
//     }
//     1% {
//       opacity: 1;
//     }
//     100% {
//       opacity: 1;
//     }
//   }
//   @keyframes blink {
//     50% {
//       border-color: transparent;
//     }
//   }
//   @-webkit-keyframes blink {
//     50% {
//       border-color: tranparent;
//     }
//   }
// `
