// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
import React, { createContext, useState } from "react";

// const SALT_ROUNDS = 10;
// const JWT_SECRET = "my-secret-key";

export const GeneralDataContext = createContext();

function GeneralContext({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);

  // function hashPassword(password) {
  //   return bcrypt.hash(password, SALT_ROUNDS);
  // }

  // function generateJWT(user) {
  //   const token = jwt.sign(
  //     {
  //       phone: user.phone,
  //       id: user.id,
  //     },
  //     JWT_SECRET,
  //     { expiresIn: "1h" }
  //   );
  //   return token;
  // }

  const GeneralData = {
    loading,
    setLoading,
    user,
    setUser,
    // generateJWT,
    // hashPassword,
  };
  return (
    <>
      <GeneralDataContext.Provider value={GeneralData}>
        {children}
      </GeneralDataContext.Provider>
    </>
  );
}

export default GeneralContext;
