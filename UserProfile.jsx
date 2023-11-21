import React, { useState } from 'react';
import './UserProfile.css'; // Import your CSS file

const UserProfile = ({ name, age }) => {
  const [userAge, setUserAge] = useState(age);

  const increaseAge = () => {
    setUserAge(userAge + 1);
  };

  const decreaseAge = () => {
    setUserAge(userAge - 1);
  };

  return (
    <div className="user-profile-container">
      <p>Name: {name}</p>
      <p>Age: {userAge}</p>
      <div className="button-container">
        <button onClick={increaseAge}> Get Older</button>
        <button onClick={decreaseAge}>Make Younger</button>
      </div>
    </div>
  );
};

export default UserProfile;
