/*
 * js Javascript Library
 * 
 * create:
 * @2010-07-22 by mytharcher
 * 
 * update:
 */

///import js.transition.Easing;

/**
 * @class js.transition.Easing
 */
/**
 * 二次渐强变化
 * @method js.transition.Easing.quadIn
 * 
 * @param {Number} t 0~1之间的数，代表当前进行到的时间总量的百分比
 * 
 * @return {Number}
 */

js.transition.Easing.quadIn = function (t) {
	return t * t;
};