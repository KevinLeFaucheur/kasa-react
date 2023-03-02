import "../style/components/Profile.css";

export const Profile = ({ name, picture }) => {
    const profileName = name.split(' ');

    return (
        <div className="profile">
            <p className="profile-name">{profileName[0]}<br />{profileName[1]}</p>
            <img className="profile-picture" src={picture} alt={`${name}'s profile`}/>
        </div>
    )
}