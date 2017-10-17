import Route from '@ember/routing/route';


export default Route.extend({

  ver:true,

  actions: {
    doSearch(serchTerm){
      console.log(serchTerm);
    },
    toggle(){
      this.toggleProperty('ver');
      console.log();
    },
    irImages(searchTerm){
      this.transitionTo('images', {queryParams: {q: searchTerm}});
    }

  }
});
