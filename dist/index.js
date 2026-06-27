/** @license Apache-2.0 */

'use strict';

/**
* Return the index of the first falsy element in a one-dimensional ndarray.
*
* @module @stdlib/blas-ext-base-ndarray-gindex-of-falsy
*
* @example
* var vector = require( '@stdlib/ndarray-vector-ctor' );
* var gindexOfFalsy = require( '@stdlib/blas-ext-base-ndarray-gindex-of-falsy' );
*
* var x = vector( [ 1.0, 3.0, 0.0, 2.0 ], 'generic' );
*
* var v = gindexOfFalsy( [ x ] );
* // returns 2
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
