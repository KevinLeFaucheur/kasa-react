import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../style/colors'

const StyledLink = styled(NavLink)`
    font-size: 24px;
    /* &:inactive{
        text-decoration-line: none;
    }

    &:active{
        text-decoration-line: underline;
    } */

    color: ${colors.primary};
`

export { StyledLink as NavLink };