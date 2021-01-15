// declare module 'path'

import { AxiosInstance } from 'axios'
/** 将第三方变量挂载到每一个 vue 示例中  */
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $axios: AxiosInstance
        // $store: Store<StateType>
        // $route: RouteLocationNormalizedLoaded
        // $router: Router
    }
}
