require("dotenv").config();

const { Router } = require("express");
const UserModel = require("./user.model");
const app = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_TOKEN = process.env.SECRET_TOKEN;
const SECRET_REFRESH_TOKEN = process.env.SECRET_REFRESH_TOKEN;

const nodemailer = require("nodemailer");
const CartModel = require("../cart/cart.model");

const blackList = [];

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

app.get("/", async (req, res) => {

  try {
    let data = await UserModel.find();
    return res.status(200).send(data);
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

app.get("/:email", async (req, res) => {

  console.log(req.params.email)

  if(req.params.email ){
    let data = await UserModel.findOne({email:req.params.email});
    return res.status(200).send(data);
  }

  return res.send(404)

});



// Login Route
app.post("/login", async (req, res) => {

  const { email, password } = req.body;

 console.log(email,password)

  if (!email || !password) {
    return res.status(403).send("Enter Credianteials");
  }
  const User = await UserModel.findOne({ email });
 // console.log(User)
 // if (!User) return res.status(404).send("User Not Found");

  try {
    const match = bcrypt.compareSync(password, User.password);
   console.log(match)
    if (match) {
      //login
      const token = jwt.sign(
        {
          _id: User.id,
          name: User.username,
          role: User.role,
          email:User.email,
          password: User.password,
        },
        SECRET_TOKEN,
        {
          expiresIn: "7 days",
        }
      );
      const refresh_token = jwt.sign(
        {
          _id: User.id,
          name: User.username,
          role: User.role,
          email:User.email,
          password: User.password,
        },
        SECRET_REFRESH_TOKEN,
        {
          expiresIn: "28 days",
        }
      );
      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: `Login Successfull`,
        html: `<h1>your ACcount Login Successfull  </h1>`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log("ERROR", err);
        } else {
          console.log("EMAIL SEND" + info.response);
          return res.status(201).send(`${role} created successfully`);
        }
      });
      return res
        .status(200)
        .send({ message: "Login success", token, refresh_token, email });
    } else {
      return res.status(401).send({ message: "Authentication Failed" });
    }
  } catch {
    return res.status(401).send({ message: "Authentication Failed" });
  }
});

// Signup Route
app.post("/signup", async (req, res) => {
  const {
    email,
    firstName, lastName,
    password,
    weight,
    height,
    age,
    role,
    gender,
    bodyType,
  } = req.body;

  console.log(req.body)
  
  let username = firstName + " "+ lastName

  if (!email || !password || !username) {
    return res.status(403).send("Enter Credentails");
  }
  try {
    const exsist = await UserModel.findOne({ email });
    if (exsist)
      return res
        .status(403)
        .send({ message: "User Already Created Try Logging in" });

    bcrypt.hash(password, 6, async function (err, hash) {
      if (err) {
        return res.status(403).send({ message: "Connection has failed" });
      }

      const user = await UserModel({
        email,
        username,
        password: hash,
        weight,
        height,
        age,
        role,
        gender,
        bodyType,
      });

      const X = await CartModel.create(
        { email: email, cart: [], purchase:[] }
      )
      await user.save();
      
    
      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: `Sign Up Successfull`,
        html: `<h1>${username} Account Sign Up Successfull  </h1>`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log("ERROR", err);
        } else {
          console.log("EMAIL SEND" + info.response);
          return res.status(201).send(`user created successfully,${username}`);
        }
      });
    });
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

let MYOTP = 0;
let flag = false;

app.post("/reset-password/getOtp", async (req, res) => {
  const { email } = req.body;
 console.log(req.body)
  if (!email) {
    return res.status(403).send("Enter Valid Email");
  }

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(403).send("Account with this email Not Found");
  }

  try {
    MYOTP = Math.floor(100000 + Math.random() * 900000);
    MYOTP = MYOTP.toString();
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: `RESET PASSWORD`,
      html: `<h1>OTP is ${MYOTP}</h1>`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("ERROR", err);
      } else {
        console.log("EMAIL SEND" + info.response);
        return res.status(200).send(`OTP SENDED SUCCESSFULLY`);
      }
    });
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

app.post("/reset-password/verifyOtp", async (req, res) => {
  const { otp } = req.body;
  if (!otp) {
    return res.status(404).send("Enter Otp");
  }

  try {
    console.log(MYOTP, otp)
    if (+MYOTP == +otp) {
      flag = true;
      return res.status(201).send("Otp Verified");
    }

    return res.status(404).send("Wrong Otp");
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

app.post("/reset-password/reset", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(403).send("Enter credentails");
  }
  if (!flag) {
    return res.status(401).send("Un-authorized");
  }

  try {
    const hash = bcrypt.hashSync(password, 10);
    // await user.save()
    //console.log(hash);
    const data = await UserModel.findOneAndUpdate(
      { email },
      { password: hash },
      { new: true }
    );
    flag = false;

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: `Password Updated Successfully`,
      html: `<h1>Your Passwrod Updated Successfully</h1>`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("ERROR", err);
      } else {
        console.log("EMAIL SEND" + info.response);
        return res.status(200).send(`Users Password Updated Successfully `);
      }
    });

    return res.status(201).send(data);
  } catch (e) {
    return res.status(502).send("kuch to gadbad he daya");
  }
});

// verify a token. return a new token if it's expired token
// it will check token is expired or not if its expired then it will return a new Token and add old token into "BLACK LIST"
// we nee d o pass TWO HEADERS here
// Two Headers 1 ) ["authorization"] => main token .>> check expired or not > add to blacklist
//             2 ) ["refresh"] => refresh token .>> if expired main token gernerate and return new Main token with refreshtoken
// working 1000% with additional features
app.post("/verify", async (req, res) => {
  const token = req.headers["authorization"];
  const refreshtoken = req.headers["refresh"];

  if (!token || !refreshtoken) {
    return res.status(401).send("UnAuthorized , no user logged in");
  }

  try {
    if (blackList.includes(refreshtoken)) {
      return res.status(404).send("token is already expired or blacklisted");
    }

    const decoded = jwt.decode(token);
    let TimeNow_10DIGIT = new Date().getTime().toString();
    TimeNow_10DIGIT = TimeNow_10DIGIT.split("").slice(0, 10).join("");

    const Refreshdecoded = jwt.decode(refreshtoken);
    let RefreshTimeNow_10DIGIT = new Date().getTime().toString();
    RefreshTimeNow_10DIGIT = RefreshTimeNow_10DIGIT.split("")
      .slice(0, 10)
      .join("");

    // BEFORE = TimeNow_10DIGIT = 1669639747149
    // decoded.exp = 1669639708
    // AFTER Operation = TimeNow_10DIGIT = 1669637548
    // first 10 DIGIT

    //console.log(+TimeNow_10DIGIT > decoded.exp , TimeNow_10DIGIT ,decoded.exp )

    if (+TimeNow_10DIGIT > decoded.exp) {
      // if it expired
      blackList.push(token);

      if (+RefreshTimeNow_10DIGIT > Refreshdecoded.exp) {
        // it means RefreshToken is also Expired
        blackList.push(refreshtoken);
        return res
          .status(404)
          .send("both token is expired and added to blacklist");
      }

      const verify = jwt.verify(refreshtoken, refreshKEY);
      // console.log(verify)
      if (verify) {
        const Newtoken = jwt.sign(
          {
            id: verify._id,
            name: verify.name,
            age: verify.age,
            role: verify.role,
          }, //data
          secretKEY,
          { expiresIn: "5 mins" }
        );
        return res
          .status(200)
          .send({ message: `New Token Created`, Newtoken, refreshtoken });
      }

      //console.log(refreshtoken)
      return res.status(404).send("token is expired and added to blacklist");
    } else {
      return res.status(200).send("This is Valid MAIN TOKEN");
    }
  } catch (e) {
    return res.status(502).send("kuch to gadbad he daya");
  }
});




module.exports = app;
