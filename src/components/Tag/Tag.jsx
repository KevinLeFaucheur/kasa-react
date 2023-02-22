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
  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 0 2rem;
    font-size: 0.6rem;
  }
`

export const Tag = ({ tagName }) => {
    return (
        <StyledTag>{tagName}</StyledTag>
    )
}