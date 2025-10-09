// import jwt from 'jsonwebtoken';

// const authUser = async (req, res, next) =>{
//     try {
        
//         const { token } = req.headers

//         if(!token){
//             return res.json({success: false, message: 'Not Authorized Login Again'})
//         }

//         const token_decode = jwt.decode(token)

//         req.body.clerkId = token_decode.clerkId
//         next()
        
//     } catch (error) {
//         console.log(error.message);
//         res.json({success: false, message: error.message})
        
//     }
// }

// export default authUser

import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({ success: false, message: 'Not Authorized. Please log in again.' });
    }


    const token_decode = jwt.decode(token);

    if (!token_decode || !token_decode.clerkId) {
      return res.json({ success: false, message: 'Invalid token or missing clerkId' });
    }

    req.user = { clerkId: token_decode.clerkId };

    next();
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
