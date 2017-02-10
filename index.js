import { selection } from 'd3';
import Hammer from 'hammerjs';
import propagating from 'propagating-hammerjs';

selection.prototype.gesture = function swipe(options) {
  return propagating(new Hammer(this.node(), options));
};
