const multer = require('multer');

module.exports= multer({

    storage: multer.diskStorage({}),
    fileFilter: (req, file, callback) => {

        var fileType = file.mimetype.toString()
        console.log(fileType);

        callback(null, true);
    }
});