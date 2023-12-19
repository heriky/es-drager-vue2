export type { DragData, DragerProps } from './src/drager'
import Drager from './src/drager.vue'

export const install = (Vue: any) => {
  Vue.component('es-drager', Drager)
}

Drager.install = install

export { Drager as ESDrager }
export default Drager as any & typeof Drager
