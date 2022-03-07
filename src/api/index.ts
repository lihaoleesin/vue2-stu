
const api = {
  getCategoryDetail: '/docker_probabilityRelease/ajax', // 获取详情
};

let httpPrefix = '';
if (window.location.host.includes('正式环境地址')) {
  httpPrefix = '正式前缀';
} else {
  /** 后端本地服务器 */
  // httpPrefix = 'http://10.0.31.32:7001';
}
Object.keys(api).forEach(item => {
  if (item && Object.prototype.hasOwnProperty.call(api, item) && api[item] && !api[item].match(/^http[s]?:\/\//)) {
    const url = api[item];
    api[item] = httpPrefix + url;
  }
});

export default api;
