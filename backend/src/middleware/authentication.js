import resHelper from '../utils/Helpers/resHelper';

class Authentication {
  GrantAccess() {
    return async (req, res, next) => {
      const token = req.headers.Authentication;
      if (!token) {
        resHelper.unauthorized(res);
      }
    };
  }
}

export default new Authentication();
