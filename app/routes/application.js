import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  actions:{
    toggleSidebar(){
       Ember.$('#sub-sidebar').sidebar("toggle");
    }
  }
});
