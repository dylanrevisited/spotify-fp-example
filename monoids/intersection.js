'use strict'
const Intersection = xs => ({
  xs,
  concat: ({xs: ys}) =>
    Intersection(xs.filter(x => ys.some(y => y === x)))
});

Intersection.empty = () => Intersection([])


module.exports = Intersection