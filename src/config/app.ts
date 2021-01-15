/**
 * 跟应用全局相关的静态配置放在这里
 * 在Vue2.0时代，可以通过向Vue原型链注入以实现全局
 * 但在3.0则不允许了，在此将其抽离。
 * 感谢在没有中文文档时期的思路：https://github.com/ibwei/vue3-ts-base/blob/master/src/config/app.ts
 */

import axios from '../utils/axios'

const AppGlobalConfig = {
    $axios: axios
}
export { AppGlobalConfig }