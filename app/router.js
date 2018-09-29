'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/', controller.home.index);
  router.get('/product', controller.product.index)
  router.get('/product/getOneById', controller.product.getOneById)
  router.post('/product/addOne', controller.product.addOne)
  router.post('/cart/addProductToCart', app.middleware.auth(), controller.cart.addProductToCart)
  // router.get('/admin/articles', controller.admin.articles);
  router.post('/newUser', controller.user.add) //增加
  router.put('/user', controller.user.modify) // 修改
  router.post('/user', controller.user.login) // 登陆

  router.get('/articles', controller.article.list)
  router.post('/articles', app.middleware.auth(), controller.article.addArticle)
  router.put('/articles', app.middleware.auth(), controller.article.modifyArticle)
};