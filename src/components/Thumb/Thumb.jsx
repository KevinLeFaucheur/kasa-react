import styled from "styled-components";
import colors from "../../style/colors";

const ThumbBody = styled.div`
    width: 340px;
    height: 340px;
    background: linear-gradient(${colors.primary}, ${colors.backgroundMid});
    border-radius: 10px;
    padding: 20px;
    display: flex;
    align-items: flex-end;
    margin-bottom: 3vh;
`

const ThumbTitle = styled.h2`
    color: white;
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    margin: 0;
`

export const Thumb = () => {
    return (
        <ThumbBody>
            <ThumbTitle>Titre de la <br></br>location</ThumbTitle>
        </ThumbBody>
    )
}