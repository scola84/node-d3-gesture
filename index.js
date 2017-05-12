import { selection } from 'd3';
import Hammer from 'hammerjs';
import propagating from 'propagating-hammerjs';

selection.prototype.gesture = function gesture(options) {
  options = Object.assign({}, options, {
    inputClass: Hammer.TouchMouseInput
  });

  return propagating(new Hammer(this.node(), options));
};
