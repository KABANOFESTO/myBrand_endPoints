// import uploader from '../config/cloudinary';


// const articleImage = async (req) => {
//     try {
//         const tmp = req.files.photo.tempFilePath;
//         const Result = await uploader.upload(
//             tmp,
//             { folder: 'My-Brand' },
//             (_, result) => result
//         );
//         return Result;
//     } catch (error) {
//         console.log(error);
//     }
// };


// module.exports = articleImage;

const uploader = require('../config/cloudinary');

const articleImage = async (req) => {

    const tmp = req.files.imageUrl.tempFilePath;
    const Result = await uploader.upload(tmp, { folder: 'My-Brand' });
    return Result;
};



module.exports = articleImage;