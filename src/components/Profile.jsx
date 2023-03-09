import styled from "styled-components";
import * as typography from '../style/typography';

const ProfileContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const ProfilePicture = styled.img` 
    width: 64px;
    height: 64px;
    background-color: lightgray;
    border-radius: 50%;
    @media (max-width: 768px) {
        width: 32px;
        height: 32px;
    }
`

const ProfileName = styled.p`
    ${typography.d_host}
    text-align: right;
    line-height: 32px;
    margin-right: 0.8rem;
    @media (max-width: 768px) {
        line-height: 16px;
        ${typography.m_host}
    }
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