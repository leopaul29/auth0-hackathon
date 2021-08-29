import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ProfileAuth = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <h3>Auth0 props</h3>
        <ul>
          <DisplayItem label="nickname" value={user.nickname} />
          <DisplayItem label="given_name" value={user.given_name} />
          <DisplayItem label="email" value={user.email} />
          <DisplayItem label="email_verified" value={user.email_verified} />
          <DisplayItem label="phone_number" value={user.phone_number} />
          <DisplayItem
            label="phone_number_verified"
            value={user.phone_number_verified}
          />
        </ul>
      </div>
    )
  );
};

function DisplayItem({label, value}) {
  return (
    <li>
      {label} : {value}
    </li>
  );
}

export default ProfileAuth;
