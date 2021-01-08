

export default {
    // 命名空间
    namespaced:true,
    state:{
        username:'admin',
        age:22,
        email:'admin@1000phone.com',
    },
    mutations:{
        // 更改用户名
        setUsername(state,arg){
            state.username=arg
        },
        // 更改年龄
        setAge(state,arg){
            state.age = arg
        },
       
    },
    actions:{
        //更改年龄
        setAge(context,arg){
            setTimeout(()=>{
                context.commit('setAge',arg)
            },5000)
        }
    },
    getters:{
        setEmail(state){
           return state.email = 'qwert@qq.com'
        }
    }
}