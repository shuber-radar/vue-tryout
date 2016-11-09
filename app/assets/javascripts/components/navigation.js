// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

Vue.component('navigation-component', {
  template: `<div class="navigation-component">
    <h1>POC vue + rails</h1>
    <ul>
      <li>
        <a href="${Routes.root_path()}">home</a>
      </li>
      <li>
        <a href="${Routes.users_path()}">users</a>
      </li>
    </ul>
  </div>`,

  data: function () {
    return {};
  },

  created: function () {
  },

  methods: {
  }
})
