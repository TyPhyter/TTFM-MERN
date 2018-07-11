const jwt = require('jsonwebtoken');

const jtoken = {

    verifyToken(token) {

        return jwt.verify(token, 'mysecret', (err, decoded) => {
            if(err) {
                console.log(err);
                return err;
            }
            console.log(decoded);
            decoded.verified = true;
            return decoded;
        });
    },

    middleware(options) {
        return (req, res, next) => {

            console.log('jtoken');

            const token = req.body.token || req.query.token;
            const result = this.verifyToken(token);

            res.locals.token = token;
            result.verified ? res.locals.tokenDecoded = result : res.locals.tokenError = result;
            res.locals.verified = !!result.verified;

            next()

        }
    }
}

module.exports = jtoken;