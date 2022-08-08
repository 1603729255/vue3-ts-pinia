
import { defineStore } from 'pinia'


interface userStore {
  token: string
  userInfo: any
}
// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const userStore = defineStore({
  id: 'userStore', // id: 必须的，在所有 Store 中唯一
  // state: 返回对象的函数
  state: (): userStore => ({
    token: '我是token123',
    userInfo: {}
  }),
  getters: {},
  actions: {
    // 不使用箭头函数
    setToken(token: string) {
      this.token = token
    },
    setUserIngo(userInfo: any) {
      this.userInfo = userInfo
    }
  },
  // 持久化
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'userStore',
        storage: localStorage // storage: sessionStorage,
      }
    ]
  }
})