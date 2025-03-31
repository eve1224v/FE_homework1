import "../App.css";
import Input from "../components/Input.jsx";

function Profile() {

  return (
    <div className="profile-container">
      <h2 className="section-title">Profile Photo</h2>
      <div className="profile-photo-container">
        <div className="profile-image">
          <span className="placeholder-text" />
        </div>
        <div className="upload-remove-buttons">
          <button className="upload-btn">Upload Photo</button>
          <button className="remove-btn">Remove</button>
        </div>
      </div>

      <hr />

      <h2 className="section-title">User Details</h2>
      <div className="input-section">
        <div className="input-row">
          <Input label="Label Name" placeholder="Placeholder" />
          <Input label="Label Name" placeholder="Placeholder" />
        </div>
        <Input label="Label Name" placeholder="Placeholder" />
        <Input label="Label Name" placeholder="Placeholder" />
        <Input label="Label Name" placeholder="Placeholder" />
      </div>

      <div className="button-section">
        <button className="back-btn">Back</button>
        <button className="continue-btn">Continue</button>
      </div>
    </div>
  );
}

export default Profile;
