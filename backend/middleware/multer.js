import multer from 'multer';

const storage = multer.diskStorage({
    filename: function(req, file, callback) {
        callback(null, file.originalname);
    }
})

// Initialize Multer middleware for file uploads to 'uploads' directory
const upload = multer({storage})

export default upload;