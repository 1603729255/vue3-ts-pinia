//  src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [];
const modules: any = import.meta.glob('../views/**/**.vue');
console.log(modules);

if (modules) {
  for (const key in modules) {
    if (Object.prototype.hasOwnProperty.call(modules, key)) { 
      let name = key.split('.vue')[0].split('/')[key.split('.vue')[0].split('/').length - 1];
      // home 从定向
      routes.push({
        path: `/${name == 'index' ? '' : name}`,
        name,
        meta: {
          title: name,
        },
        component: modules[key],
      });
    }
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
