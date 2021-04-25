import jwt from 'jsonwebtoken';

class JwtHelper{
    createResultLoginToken(userId,userType,email){
        const payload = {
            userId: userId,
            userType: userType,
            emial: email
        }

        return jwt.sign(payload,"New key")
    }

    createSocialLoginToken(userId,userType,email){
        const payload = {
            userId: userId,
            userType: userType,
            emial: email
        }

        return jwt.sign(payload,"New key")
    }

}

const jwtHelper = new JwtHelper();
export default jwtHelper;