import styled from "styled-components";
import colors from "../../style/colors";

const ThumbBody = styled.div`
    width: 340px;
    height: 340px;
    /* background-image: linear-gradient(to bottom, rgba(${colors.primary}, 0.25), rgba(${colors.backgroundMid}, 0.25)), url(${props => props.cover}); */
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${props => props.cover});
    background-size: cover;
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

export const Thumb = ({ cover, title }) => {
    return (
        <ThumbBody cover={cover}>
            <ThumbTitle>{title}</ThumbTitle>
        </ThumbBody>
    )
}