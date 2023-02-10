import styled from "styled-components";
import colors from "../../style/colors";

export const Gallery = styled.div`
    width: 100%;
    height: 1000px;
    background: ${colors.backgroundLight};
    border-radius: 25px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 56px 50px;
`