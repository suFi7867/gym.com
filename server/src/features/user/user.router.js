const { Router } = require("express");
const UserModel = require("./user.model");
const app = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_TOKEN = process.env.SECRET_TOKEN
const SECRET_REFRESH_TOKEN = process.env.SECRET_REFRESH_TOKEN


// Login Route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const User = await UserModel.findOne({ email });

    if (!User) return res.status(404).send("Invalid User");

        try{
            const match = await bcrypt.compare(password, User.password);

            if(match) {
                //login
               const token = jwt.sign(
                { _id: User.id , name: User.username,role:User.role, password:User.password},
                SECRET_TOKEN,
                {
                    expiresIn:"7 days"
                }
                );
                const refresh_token = jwt.sign(
                {},
                SECRET_REFRESH_TOKEN,
                {
                    expiresIn:"7 days"
                }
                );
                    return res.status(200).send({ message: "Login success", token ,refresh_token});
            }
            else {
                return res
                    .status(401)
                    .send({ message: "Authentication Failed" });
            }
        }
      catch{
        return res
        .status(401)
        .send({ message: "Authentication Failed" });
      }
  });


// Signup Route
app.post("/signup", async (req, res) => {
  const { email, username, password ,weight,height,age,role,gender,bodyType} = req.body;

  const exsist = await UserModel.findOne({ email });
  if (exsist)
    return res
      .status(403)
      .send({ message: "User Already Created Try Logging in" });

  bcrypt.hash(password, 6, async function (err, hash) {
    if (err) return res.status(403).send({ message: "Connection has failed"});
    const user = await UserModel({ email, username, password: hash ,weight,height,age,role,gender,bodyType});
    user.save();
    return res.status(201).send({ message: "User Created Successfully" });
  });
});


module.exports = app;