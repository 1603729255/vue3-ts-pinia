
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import { userStore } from './modules/user';

const pinia = createPinia()
pinia.use(piniaPersist)
export {userStore}
export default pinia
