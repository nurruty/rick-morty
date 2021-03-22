import './Profile.scss';

const Profile = ({ imgSrc, profileInfo, actionComponent }) => {
  return (
    <div className="Profile">
      <div className="Profile-main">
        <div className="Profile-img">
          <img src={imgSrc} alt="" />
        </div>
        <div className="Profile-info">{profileInfo}</div>
        <div className="Profile-action">{actionComponent}</div>
      </div>
    </div>
  );
};

export default Profile;
