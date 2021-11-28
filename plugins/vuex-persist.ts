import VuexPersistence from 'vuex-persist'
import { RootState, Store } from '~/store'

export default ({ store }: any) => {
  new VuexPersistence<RootState>({
    storage: window.localStorage,
    key: 'cart',
  }).plugin(store)
}
