import Ember from 'ember';
import layout from '../templates/components/noui-slider';

export default Ember.Component.extend({
  // default values
  min: 0,
  max:100,
  step: 1,
  start: Ember.computed(function() {
    return [ this.get('min'), this.get('max') ];
  }),

  didInsertElement() {
    let this$ = this.$().get(0);
    noUiSlider.create(this$, {
      start: this.get('start'),
      step: this.get('step'),
      range: {
        'min': [  this.get('min') ],
        'max': [ this.get('max') ]
      }
    });
    // add bindings
    // send action when slider value update
    this$.noUiSlider.on('update', () => {
      this.sendAction('onUpdate', this$.noUiSlider.get());
    });
    // send action when user stops sliding
    this$.noUiSlider.on('change', () => {
      this.sendAction('onChange', this$.noUiSlider.get());
    });
  }
});
