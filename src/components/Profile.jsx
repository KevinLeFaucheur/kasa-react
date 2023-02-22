import styled from "styled-components";

const ProfileContainer = styled.div`
    display: flex;
    justify-content: flex-end;
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
    line-height: 32px;
    margin-right: 0.8rem;
`

export const Profile = ({ name, picture }) => {
    const profileName = name.split(' ');

    return (
        <ProfileContainer>
            <ProfileName>{profileName[0]}<br />{profileName[1]}</ProfileName>
            <ProfilePicture src={picture} alt={`${name}'s profile picture`}/>
        </ProfileContainer>
    )
}