import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../style/colors'

const StyledLink = styled(Link)`
    /* position: absolute;
    left: 75.08%;
    right: 13.95%;
    top: 25%;
    bottom: 25%;

    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 142.6%; */
    /* or 34px */
    /* display: flex;
    align-items: flex-end;
    text-align: right; */

    &:active{
        text-decoration-line: underline;
    }

    color: ${colors.primary};
`

export { StyledLink as Link };