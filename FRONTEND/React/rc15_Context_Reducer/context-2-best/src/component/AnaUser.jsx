import React, { useContext } from "react";
import { KullaniciContext } from "../context/KullaniciProvider";

const AnaUser = () => {
  const { users, changeWidth } = useContext(KullaniciContext);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.login}</h3>
          <img
            src={user.avatar_url}
            alt="avatar"
            width={user.width ? user.width : "300px"}
          />
          <div>
            <label htmlFor="width">Image Width(px)</label>
            <input
              type="number"
              id="width"
              onChange={(e) => changeWidth(user.id, e.target.value)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnaUser;
