const multer = require('multer');
const fs = require('fs');
const Path =require('path');
class FileUpload {
	
    uploadStorage = multer.diskStorage({
		
        destination: function (req, file, cb) {
			const reqParams =req.body;
			let imageDir;
			if(reqParams.fileName === 'document'){
				imageDir=Path.join(__dirname,`./uploads`);
				fs.mkdirSync(imageDir, { recursive: true })
			}else{
				imageDir=`./uploads`;
				fs.mkdirSync(imageDir, { recursive: true })
			} 
            // if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
                cb(null, imageDir)
            // } else if (file.mimetype == "application/pdf") {
            //     cb(null, imageDir)
            // } else {
            //     cb(new Error('invalid file type.'))
            // }
        },
        filename: function (req, file, cb) {
			const reqParams =req.body;
			if(file.mimetype == "application/pdf"){
				if(reqParams.fileName === undefined){
					cb(null,file.fieldname )
				}else{
					cb(null, reqParams.fileName );
				}

			}else{
				if(reqParams.fileName ==undefined){
					cb(null,file.fieldname )
				}else{
					cb(null, reqParams.fileName );
				}
				
			}
            
        }
    });
    uploadStore = multer({ storage: this.uploadStorage });
}

module.exports = new FileUpload({});
