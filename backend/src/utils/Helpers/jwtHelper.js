import jwt from 'jsonwebtoken';

class JwtHelper {
  createResultLoginToken(userId, userType, email) {
    const payload = {
      userId: userId,
      userType: userType,
      email: email,
    };

    return jwt.sign(payload, process.env.JWT_SECRET_KEY);
  }

  createSocialLoginToken(userId, userType, email) {
    const payload = {
      userId: userId,
      userType: userType,
      email: email,
    };

    return jwt.sign(payload, process.env.JWT_SECRET_KEY);
  }
}

const jwtHelper = new JwtHelper();
export default jwtHelper;
