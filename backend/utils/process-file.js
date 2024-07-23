const path = require('path');
const fs = require('fs').promises;
const multer = require('multer');

const uploadsDir = path.join(__dirname, '..', 'uploads');
console.log(uploadsDir);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });


const processFile = async (file) => {
    try {
        console.log(file)
        const filePath = path.join(__dirname, '../uploads/', file.filename);

        try {
        await fs.access(filePath, (err) => {
            if (err) {
                console.error(`File Not Found: ${err}`);
                return;
            };
            console.log(filePath);
        })} catch (error) {
            console.error(error.message)
        }

        if (!filePath) {
            throw new Error("File Not Found");
        };

        const data = await fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error(`Error Reading File: ${err}`);
                return;
            };
        });

        if (!data) {
            throw new Error("Error Reading File");
        };

        const base64string = data.toString('base64');
        const mimeType = file.mimetype;
        const dataURL = `data:${mimeType};base64,${base64string}`;
        console.log(`Data URL: ${dataURL}`);

        return dataURL;
    } catch (error) {
        console.error(`Error Processing File ${file.filename}: ${error.message}`);
        throw error;
    };
};

module.exports = { processFile };