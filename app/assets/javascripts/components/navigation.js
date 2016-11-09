// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

Vue.component('navigation-link', {
  props: ['link'],
  template: `<li>
    <a :href="link.route">{{link.name}}</a>
  </li>`
});

Vue.component('navigation-component', {
  template: `<div class="navigation-component">
    <h1>POC vue + rails</h1>
    <ul>
      <navigation-link v-for="link in links" :link="link"></navigation-link>
    </ul>
  </div>`,

  data: function () {
    return {
      links: [
        {
          route: Routes.root_path(),
          name: "home"
        },
        {
          route: Routes.users_path(),
          name: "users"
        }
      ]
    };
  },

  created: function () {
  },

  methods: {
  }
})
