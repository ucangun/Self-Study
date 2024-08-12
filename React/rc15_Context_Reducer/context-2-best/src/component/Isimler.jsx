import React, { useContext } from "react";
import { KullaniciContext } from "../context/KullaniciProvider";
import AnaUser from "./AnaUser";

const Isimler = () => {
  const { users } = useContext(KullaniciContext);

  return (
    <div>
      {users.slice(0, 4).map((user) => (
        <p
          style={{ backgroundColor: "pink", textAlign: "center" }}
          key={user.id}
        >
          {user.login}
        </p>
      ))}

      <AnaUser />
    </div>
  );
};

export default Isimler;
