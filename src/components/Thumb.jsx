import styled from "styled-components";
import * as typography from '../utils/typography'

const ThumbBody = styled.div`
    width: 100%;
    height: 340px;
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
    ${typography.d_cover}
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