import { useStore } from 'vuex'
import { computed } from 'vue'

const useUI = () => {
    const store = useStore()

    // const openMenu = computed( () => store.getters['ui/getSideMenuOpen'] )

    const openMenu = computed({
        get() {
            return store.getters['ui/getSideMenuOpen']
        },
        set(val) {
            store.commit('ui/toggleSideMenu')
        }
    })

    const toggleSideMenu = () => {
        store.commit('ui/toggleSideMenu')
    }

    return {
        openMenu,
        toggleSideMenu
    }
}

export default useUI