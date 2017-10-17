import Route from '@ember/routing/route';

export default Route.extend({

  model(){
    return this.store.createRecord('favorite');
  },
  actions: {
    addFav(favorite){
        favorite.save();
    }
  }

});
