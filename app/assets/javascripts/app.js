Vue.http.headers.common['X-CSRF-Token'] = $('[name="csrf-token"]').attr('content');

var vm = new Vue({
  el: '#app',
});
