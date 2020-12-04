import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Loading from 'components/lib/loading'
import CenterContainer from 'components/lib/center-container'

Vue.config.productionTip = false

Vue.component('loading', Loading)
Vue.component('center-container', CenterContainer)

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App },
})
