import Route from '@ember/routing/route';

export default Route.extend({

  ajax: Ember.inject.service(),

  model(params, transition){

    return this.get('ajax').request('https://images-api.nasa.gov/search?media_type=image&nasa_id='+params.nasa_id);

  },

});
