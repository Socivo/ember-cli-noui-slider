import Ember from 'ember';
import layout from '../templates/components/noui-slider';

export default Ember.Component.extend({
  min: 0,
  max:100,

  didInsertElement() {
    let this$ = this.$().get(0);
    noUiSlider.create(this$, {
      start: [ this.get('min'), this.get('max') ],
      range: {
        'min': [  this.get('min') ],
        'max': [ this.get('max') ]
      }
    });
  }
});
