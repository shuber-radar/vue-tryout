// The following line loads the standalone build of Vue
// instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import VueResource from 'vue-resource'
import Users from './components/users/Users.vue'
import MainNavigation from './components/navigation/MainNavigation.vue'

// configuration
Vue.use(VueResource)
Vue.http.headers.common['X-CSRF-Token'] =
  document.head.querySelector('[name=csrf-token]').content

// rendering Vue
new Vue({ // eslint-disable-line no-new
  el: '#app',
  components: {
    Users,
    MainNavigation
  }
})
