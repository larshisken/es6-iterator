/**
 * @Author: Lars Hisken
 * @Date:   2017-08-29T13:23:23+02:00
 * @Email:  larshisken@protonmail.com
 * @Last modified by:   Lars Hisken
 * @Last modified time: 2017-08-29T22:55:31+02:00
 */

import { default as render } from './modules/render';

(function IIFE() {

	const pixels = [
		{ x: -3, y: 0 },
		{ x: 2, y: 3 },
		{ x: 15, y: 3 },
		{ x: 3, y: 3 },
		{ x: 4, y: 3 }
	];

	const renderer = render(pixels, 5);

	for (let v of renderer.pixels) {
		console.log(v);
	}

})();
