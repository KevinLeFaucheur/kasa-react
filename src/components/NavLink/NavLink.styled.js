import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../style/colors'

const StyledNavLink = styled(NavLink)`

    font-size: 24px;
    color: ${colors.primary};
    &.active{
        text-decoration: underline;
    }
`

export { StyledNavLink };