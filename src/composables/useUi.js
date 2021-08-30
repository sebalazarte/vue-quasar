import { useStore } from "vuex";
import {computed} from 'vue'
const useUi = () => {

    const store = useStore();

    return {
        // sideMenuOpen: computed(() => store.getters['ui/isSideMenuOpen']),
        sideMenuOpen: computed({
            get(){
                return store.getters['ui/isSideMenuOpen']
            },
            set(value){
                store.commit('ui/toogleSideMenu')
            }
        }),
        toogleSideMenu: () => {
          store.commit('ui/toogleSideMenu')
        },
    }
}

export default useUi;