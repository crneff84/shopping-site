import Ember from 'ember';

export function soldOut(params/*, hash*/) {
  var item = params[0];
 if(item.get('quantity') === 0) {
   return Ember.String.htmlSafe('<span> Sold Out!</span>');
 }
}

export default Ember.Helper.helper(soldOut);
