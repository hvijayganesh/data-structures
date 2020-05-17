'use strict';
const _ = require('lodash');

var _getFirstSecondLargest = function(stones) {
    let first = {}
    first.value = Number.MIN_SAFE_INTEGER,
    first.index = null;
    
    let second = {}
    second.value = Number.MIN_SAFE_INTEGER;
    second.index = null
    _.each(stones, (stone, i) => {
        if (stone > first.value) {
            if (first.value > second.value) {
                second.value = first.value;
                second.index = first.index;
            }
            first.value = stone
            first.index = i;
        } else if (stone > second.value) {
            second.value = stone
            second.index = i;
        }
    })
    return { first, second }
}

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if (_.isEmpty(stones)) {
        return 0;
    }
    while (stones.length != 1) {
        let { first, second } = _getFirstSecondLargest(stones);
        stones[first.index] = first.value - second.value;
        _.pullAt(stones, [second.index]);
    }
    return stones[0];
};

module.exports = lastStoneWeight;