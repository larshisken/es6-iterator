/**
 * @Author: Lars Hisken
 * @Date:   2017-08-29T13:23:23+02:00
 * @Email:  larshisken@protonmail.com
 * @Last modified by:   Lars Hisken
 * @Last modified time: 2017-08-29T22:55:47+02:00
 */

module.exports = (pixels = [], maxDistanceToCenter = 25) => {

	const pixelSet = new Set(pixels);

	const pixelSetIterator = () => {

		// Iterator index
		let idx = 0;

		// Iterator next function
		const nextFunc = () => {
			const pixel = pixels[idx++];
			const done = (typeof pixel === 'undefined');

			if (pixel === undefined) {
				return {
					done: true
				}
			} else {
				const distanceToCenter = Math.hypot(pixel.x-0, pixel.y-0);
				const value = Object.assign(pixel, {
					distanceToCenter: distanceToCenter,
					visible: (distanceToCenter <= maxDistanceToCenter)
				});

				return {
					value: value,
					done: false
				}
			}
		}

		// Iterator return value
		return {
			next: nextFunc
		};

	};

	Object.defineProperty(pixelSet, Symbol.iterator, {
		enumerable: false,
		writable: false,
		configurable: true,
		value: pixelSetIterator
	});

	return {
		pixels: pixelSet
	};

};
