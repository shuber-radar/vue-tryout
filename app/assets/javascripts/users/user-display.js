Vue.component('user-display', {
  props: ['user'],
  template:
    `<li>{{user.name}}, {{user.email}}{{user.admin ? ", Admin" : ""}}</li>`
});
