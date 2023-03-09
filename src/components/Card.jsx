import styled from "styled-components";
import * as typography from '../style/typography'

const CardBody = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 340px;
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${props => props.cover});
    background-size: cover;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 3vh;
`

const CardTitle = styled.h2`
width: 60%;
    color: white;
    ${typography.d_cover}
    text-align: left;
    margin: 0;
`

export const Card = ({ cover, title }) => {
    return (
        <CardBody cover={cover}>
            <CardTitle>{title}</CardTitle>
        </CardBody>
    )
}