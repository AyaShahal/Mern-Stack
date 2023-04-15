import multer from "multer";
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    console.log(file);
    cb(
      null,Date.now()+path.extname(file.originalname)
      // `${file.originalname.split(".")[0]}.${file.mimetype.split("/")[1]}`
    );
  },
});
// const storage = multer.diskStorage({destination:'./uploads/images',
//   filename: (req, file, cb) => {
//     return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
//   }
//   })

const upload = multer({ storage: storage });

export function editImage(req, res, next) {
  upload.single("image")(req, res, (err) => {
    if (err) {
      return next(err);
    }
    req.image = req.file.path;
    next();
  });
}

export function uploadImage(req, res, next) {
  upload.single("image")(req, res, (err) => {
   
    if (err) {
      return next(err);
    }
    if (req.file) {
      req.body.image = req.file.path;
    }
    next();
  });
}


// export function updateImage(req, res, next) {
//   upload.single("image")(req, res, (err) => {
//     if (err) {
//       return next(err);
//     }
//     fs.rename()
//   })
// }

// export function updateImage(req, res, next) {

// }

  

  function getImage(req, res) {
    const imagename = req.params.imagename;
    res.sendFile(path.join(process.cwd(), '/uploads', imagename));
  }
  
const image = {
  uploadImage,
  editImage,
  getImage
};

export default image;
