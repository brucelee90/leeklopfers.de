export const colors = {
    mainBlack: `#262626`,
    mainWhite: `#fff`,
    mainGrey: `#aaa`,
    lightGrey: `#eee`,
    primaryRGBA: `rgb(210, 170, 92, 0.3)`,
    primaryColor: `#d2aa5c`,
    primaryColorHover: `#ad7913`,
    secondaryColor: `#F2AF29`,
    thirdColor: `#474747`,
    danger: `red`,
    success: 'green'
    
    }
export const textSlanted = `font-family: 'Arizonia', cursive;`
// export const logoFont = `font-family: 'Mr Dafoe';`
export const logoFont = `font-family: 'Arizonia', cursive;`

export const transDefault = 'all 0.2s ease-in-out'
export const navPadding  = '0.4rem 1.8rem'

export const transFunction = (
    property = 'all',
    time = '0.5s',
    type = 'linear'
) => {
    return `${property} ${time} ${type}`
}
export const transObject = ({
    property = 'all',
    time = '0.5s',
    type = 'ease-in-out',
}) => {
    return `${property} ${time} ${type}`
}

export const transition = ({
    property = 'all',
    time = '0.5s',
    type = 'ease-in-out',
}) => {
    return `${property} ${time} ${type}`
}

export const border = ({
    width = '0.15rem',
    type = 'solid',
    color = 'white',
}) => {
    return `border:${width} ${type} ${color}`
}

export const letterSpacing = ({ spacing = '0.1rem' }) => {
    return `letter-spacing:${spacing}`
}