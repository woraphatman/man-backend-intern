import users from "../models/login.model"
import jwt from "jsonwebtoken"
const accessTokenSecret = 'aaaaa';

export function authheader (req, res, next) {
    if (req.headers.admin!='x-auth')
    return res.status(400).send({ error:"You must be Admin"})
    next()  
  }

  
  export function postlogin  (req, res) {
  const { username, password } = req.body;
  const user = users.find(u => { return u.username === username && u.password === password });
  if (user) {
      
      const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessTokenSecret,
        {
          expiresIn: '1m'
        });

      res.json({
          accessToken
      });
  } else {
      res.send('Username or password incorrect');
  }
};

export function authenticateJWT  (req, res, next)  {
  const authHeader = req.headers.authorization;

  if (authHeader) {
      const token = authHeader.split(' ')[1];

      jwt.verify(token, accessTokenSecret, (err, user) => {
          if (err) {
              return res.sendStatus(403);
          }

          req.user = user;
          next();
      });
  } else {
      res.sendStatus(401);
  }
};

  export default  authheader;