// component changes when vm.currentView changes
var home = {
  template: '<p>homepage</p>'
}

var about = {
  template: '<p>about</p>'
}

var vm = new Vue({
  el: '#example',
  data: {
    currentView: home
  }
});

vm.currentView = about;
