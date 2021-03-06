import React from "react";
import {useAuth0} from "@auth0/auth0-react";
// https://auth0.com/docs/libraries/lock/v11
var lock = new Auth0Lock('xxxxxx', AUTH0_DOMAIN);
export const LoginButton = () => {
  const {loginWithRedirect} = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export const LogoutButton = () => {
  const {logout} = useAuth0();

  return <button onClick={() => logout()}>Log Out</button>;
};

export const Profile = () => {
  const {user, isAuthenticated} = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name}/>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};
