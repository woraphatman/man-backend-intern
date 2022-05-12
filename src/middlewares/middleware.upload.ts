import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("test")
      cb(null, 'src/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) 
    }
  })
 export const uploads = multer({ storage: storage });  
  
  export default  uploads;