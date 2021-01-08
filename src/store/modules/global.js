export default {
    namespaced:true,
    state: {
        // 更改底部导航
        is_show: true
    },
    mutations: {
        // 更改底部导航  
        setFooter(state, arg) {  
            state.is_show = arg
        }
    }
}