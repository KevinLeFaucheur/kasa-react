import styled from "styled-components";
import colors from "../../style/colors";

const StyledTag = styled.div`
  height: 2rem;
  line-height: 2rem;
  padding: 0 2rem;
  margin-right: 2rem;
  color: ${colors.fontLight};
  background-color: ${colors.primary};
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
`

export const Tag = ({ tagName }) => {
    return (
        <StyledTag>{tagName}</StyledTag>
    )
}