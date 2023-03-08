import styled from "styled-components";
import * as typography from '../utils/typography';
import colors from "../style/colors";

const StyledTag = styled.div`
  height: 25px;
  min-width: 115px;
  line-height: 25px;
  padding: 0 2rem;
  margin-right: 2rem;
  color: ${colors.fontLight};
  background-color: ${colors.primary};
  border-radius: 10px;
  text-align: center;
  ${typography.d_tag}
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 18px;
    min-width: 84px;
    line-height: 18px;
    ${typography.m_tag}
    border-radius: 5px;
  }
`

export const Tag = ({ tagName }) => {
    return (
        <StyledTag>{tagName}</StyledTag>
    )
}