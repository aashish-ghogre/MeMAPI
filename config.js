import local_config from "./env/local/config";

var CONFIG = {};
if (!process.env.NODE_ENV) {
  console.log(local_config);
  CONFIG = local_config;
}

export default CONFIG;
