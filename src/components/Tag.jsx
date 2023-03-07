import styled from "styled-components";
import * as typography from '../utils/typography';
import colors from "../style/colors";

const StyledTag = styled.div`
  height: 2rem;
  line-height: 2rem;
  padding: 0 2rem;
  margin-right: 2rem;
  color: ${colors.fontLight};
  background-color: ${colors.primary};
  border-radius: 10px;
  ${typography.d_tag}
  
  @media (max-width: 768px) {
    ${typography.m_tag}
    padding: 0 2rem;
  }
`

export const Tag = ({ tagName }) => {
    return (
        <StyledTag>{tagName}</StyledTag>
    )
}