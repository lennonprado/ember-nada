import Component from '@ember/component';

export default Component.extend({

  ver:false,

  actions: {

    toggleImage(){
      this.toggleProperty('ver');
    }
  }

});
