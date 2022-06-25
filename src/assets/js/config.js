let root_url = "https://screen-api-biz.cnool.net"; //接口跟地址
let community_url = "https://communityapi-dev-biz.cnool.net/admin-provider";

export default {
  getProjectModelData: root_url + "/projectBlockModel/findByModuleTypeAndPosition", //根据moduletype和位置获取数据

  externalConnection: community_url + '/externalConnection/query', //获取社区租户集合
  getWeather: community_url + '/externalConnection/getWeather'//获取天气

};