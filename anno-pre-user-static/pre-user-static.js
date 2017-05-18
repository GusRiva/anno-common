const usersExample = require('./users-example.json')
const {envyConf} = require('envyconf')

function UserMemoryMiddlewareFactory() {

    const config = envyConf('ANNO', {
        MW_USER_DATA: JSON.stringify(usersExample)
    })
    const users = JSON.parse(config.MW_USER_DATA)
    Object.keys(users).forEach(id => {
        if (!users[id].id) {
            users[id].id = id
        }
        // TODO aliases
    })
    this.users = users

    return function UserMemoryMiddleware(ctx, cb) {
        if (!( 'user' in ctx )) return cb()
        const userId = typeof ctx.user === 'string' ? ctx.user 
            : ctx.user.user ? ctx.user.user 
            : ctx.user.id
        if (userId in this.users) {
            // console.log(`Found user ${userId}`, this.users[userId])
            if (typeof ctx.user === 'string') ctx.user = {id: userId}
            Object.assign(ctx.user, this.users[ctx.user.id])
        } else {
            // console.log(`User not found: ${userId}`)
        }
        return cb()
    }

}

module.exports = UserMemoryMiddlewareFactory