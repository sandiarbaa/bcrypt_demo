const bcrypt = require("bcrypt");
// so far i know, library bcrypt works as password hasher
// we can user method genSalt() hash() and compare() to work with bcrypt

const hashPassword = async (pw) => {
  // const salt = await bcrypt.genSalt(12);
  // const hash = await bcrypt.hash(pw, salt);
  const hash = await bcrypt.hash(pw, 12); // parameter 1: pw, parameter 2: salt
  // console.log(salt);
  console.log(hash + " |from hash func");
};

const login = async (pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashedPw);
  if (result) {
    console.log("Login successful");
  } else {
    console.log("Inncorect password");
  }
};

hashPassword("password");
login(
  "password",
  "$2b$12$GpYkXIHTN3WEYoUJFXU95eZpAuezM3ySrjDXOk1vu4xPyHHSU2GX."
); // it's working

// login("password", hashPassword("password")); // this is not working
