import Route from '@ember/routing/route';

export default Route.extend({

  bookmarks: Ember.inject.service(),

  model(){

    return this.get('bookmarks').getItems();

  },


});
