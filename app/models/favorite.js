import DS from 'ember-data';

export default DS.Model.extend({

    url: DS.attr(),
    description: DS.attr(),
    title: DS.attr(),

});
