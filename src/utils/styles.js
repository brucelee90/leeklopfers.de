export const colors = {
  mainBlack: `#262626`,
  mainWhite: `#fff`,
  mainGrey: `#aaa`,
  lightGrey: `#f9f9f9`,

  // Farben für Programmcode
  darkerOrange: "#771702",
  darkOrange: "#D84208",
  Orange: "#F4750E",
  yellow: "#F2A30E",
  green: "#49722A",
  secondGreen: "#8AD1A5",

  // Gradients
  darkerOrangeGradient: "#771702",
  darkOrangeGradient: "#D84208",

  OrangeGradient: `#F4750E`,

  yellowGradient: "#F2A30E",
  greenGradient: "#49722A",
  secondGreenGradient: "#8AD1A5",

  // Hauptfarben
  primaryRGBA: `rgb(210, 170, 92, 0.3)`,
  primaryColor: `#F4750E`,
  secondaryColor: `#F2AF29`,
  secondaryHoverColor: `#F2B947`,
  thirdColor: `#474747`,
  danger: `#D84208`,
  success: "#49722A",
}

export const media = {
  tablet: "600px",
  desktop: "1028px",
}

export const boxShadow = `
-webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
`

export const textSlanted = `font-family: 'Arizonia', cursive;`
export const textMonoSpace = `font-family:"Courier", "Monospace"`
// export const logoFont = `font-family: 'Mr Dafoe';`
export const logoFont = `font-family: 'Arizonia', cursive;`

export const transDefault = "all 0.2s ease-in-out"
export const navPadding = "0.4rem 1.8rem"

export const transFunction = (
  property = "all",
  time = "0.5s",
  type = "linear"
) => {
  return `${property} ${time} ${type}`
}
export const transObject = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `${property} ${time} ${type}`
}

export const transition = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `${property} ${time} ${type}`
}

export const border = ({
  width = "0.15rem",
  type = "solid",
  color = "white",
}) => {
  return `border:${width} ${type} ${color}`
}

export const letterSpacing = ({ spacing = "0.1rem" }) => {
  return `letter-spacing:${spacing}`
}
