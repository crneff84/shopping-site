import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    removeFromCart(item) {
      this.sendAction('refresh', item);
    },
    checkout(shoppingCart) {
      this.sendAction('checkout', shoppingCart);
    },

  }
});
