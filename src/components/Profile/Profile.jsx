import styled from "styled-components";

const ProfileContainer = styled.div`
    display: flex;
`

const ProfilePicture = styled.img` 
    width: 64px;
    height: 64px;
    background-color: lightgray;
    border-radius: 50%;
`

const ProfileName = styled.p`
    font-size: 1rem;
    font-weight: 500;
    text-align: right;
`

export const Profile = ({ name, picture }) => {
    return (
        <ProfileContainer>
            <ProfileName>{name}</ProfileName>
            <ProfilePicture src={picture} alt="${name}'s profile picture"/>
        </ProfileContainer>
    )
}