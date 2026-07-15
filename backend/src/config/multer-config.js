

const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "..", "uploads")); 
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});


const fileFilter = (req, file, cb) => {
    const allowedType = ["image/jpeg", "image/png", "image/webp"];
    if (allowedType.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(new Error("this format cannot be allowed"), false)
    }
}


const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 }
})

module.exports = upload;