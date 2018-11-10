import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/home.vue'
import Profissao from './components/profissao.vue'



Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes: [
        {path: '/', component: Home},
        {path: '/:profissao', component: Profissao}
    ]
})