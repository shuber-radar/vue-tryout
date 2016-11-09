import Vue from 'vue'
import Users from '../../src/components/users/Users.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Users)
    })
    expect(vm.$el.querySelector('h1').textContent)
      .toBe('Users')
  })
})

// also see example testing a component with mocks at
// github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
