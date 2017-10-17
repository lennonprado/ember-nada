import Service from '@ember/service';

export default Service.extend({

  items: null,

  init(){
      this._super(...arguments);
      this.set('items',[]);
  },
  add(item){
    this.get('items').pushObject(item);
  },
  remove(){
    this.get('items').removeObject(item);
  },
  empty(){
    this.get('items').clear();
  },
  getItems(){
    return(this.get('items'));
  }
});
