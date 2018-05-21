// 定义路由组件
const adList = require('../components/adList.vue');
const adListV2 = require('../components/adListV2.vue');
const adDetail = require('../components/adDetail.vue');

// 定义路由
 const routes = [
  { path: '/',component:adList,},
  { path: '/adListV2',component:adListV2,},
  { path: '/adDetail',component:adDetail,},
];

module.exports = {
	routes,
};
