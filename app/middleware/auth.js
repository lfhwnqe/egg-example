'use strict';



module.exports = (opts) => {
    return async (ctx, next) => {
        const {
            userId
        } = ctx.request.body
        // 多个地方调用就需要写多个代码，此时适合使用中间件
        const isUserVaild = await ctx.service.user.isUserLogin(userId)
        if (!isUserVaild) throw new Error('invalid user from auth middeware')
        await next()
    }
}