import './Profile.scss';

const Profile = ({ imgSrc, profileInfo, extraInfo }) => {
  return (
    <div className="Profile">
      <div className="Profile-main">
        <div className="Profile-img">
          <img src={imgSrc} alt="" />
        </div>
        <div className="Profile-info">{profileInfo}</div>
        <div className="Profile-extra">{extraInfo}</div>
      </div>
    </div>
  );
};

export default Profile;
