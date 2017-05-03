const expressJWT = require('express-jwt')
const {envyConf} = require('envyconf')

module.exports = () => {
    const secret = envyConf('ANNO', {
        SERVER_JWT_SECRET: 'S3cr3t!'
    }).SERVER_JWT_SECRET
    const jwt = expressJWT({secret: secret})
    return (req, resp, next) => {
        jwt(req, resp, (err) => {
            if (err && err.code !== 'credentials_required')
                console.log("JWT Error", err)
            // XXX Note we don't pass any errors on so ACL can be handled by
            // anno-acl
            next()
        })
    }
}
