export function authheader (req, res, next) {
    if (req.headers.admin!='x-auth')
    return res.status(400).send({ error:"You must be Admin"})
    next()  
  }


  export default  authheader;