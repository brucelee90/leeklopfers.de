import styled from 'styled-components'
import {styles} from '../utils'

const BannerButton = styled.button`
display: block;
color: ${styles.colors.mainWhite};
background: transparent;
padding: .5rem 1rem;
text-transform: uppercase;
font-size: 1.3rem;
letter-spacing: .3rem;
font-weight: 600;
border: .2rem ${styles.colors.mainWhite} solid;
margin-bottom: 1rem;
transition: ${styles.transition({time: '0.2s',})};
border-radius: .4rem;
&:hover{
    cursor:pointer;
    background-color: ${styles.colors.mainWhite};
    color: rgba(0, 0, 0, 1);
}
`

const SectionButton = styled(BannerButton)`
    color: ${styles.colors.mainBlack};
    border: .2rem ${styles.colors.mainBlack} solid;
    &:hover{
        cursor:pointer;
        background-color: ${styles.colors.mainBlack};
        color: ${styles.colors.primaryColor};
}
`

export {BannerButton, SectionButton}