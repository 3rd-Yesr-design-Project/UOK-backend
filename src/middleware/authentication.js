import resHelper from '../utils/Helpers/resHelper';
import jwt from 'jsonwebtoken';
import userRepository from '../repositories/userRepository';

class Authentication {
  GrantAccess() {
    return async (req, res, next) => {
      const token = req.headers.authorization;
      if (!token) {
        resHelper.unauthorized(res);
      }

      try {
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const isUser = await userRepository.fetchUserByEmail(payload.email);
        if (!isUser) {
          throw new Error('Your Email is Not Exist');
        }
        req.user = payload;
        next();
      } catch (error) {
        console.log(error);
        resHelper.unauthorized(res);
      }
    };
  }
}

export default new Authentication();
