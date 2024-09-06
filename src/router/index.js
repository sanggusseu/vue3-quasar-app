import { route } from 'quasar/wrappers';
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router/auto';
import { routes } from 'vue-router/auto-routes'; // 자동 생성된 라우트 가져오기
import { setupLayouts } from 'virtual:generated-layouts'; // 레이아웃 설정

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  // setupLayouts로 자동 생성된 라우트에 레이아웃 적용
  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    history: createHistory(process.env.VUE_ROUTER_BASE),
    routes: setupLayouts(routes), // 자동 라우트에 레이아웃 설정
  });

  return Router;
});
