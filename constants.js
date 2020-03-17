/**
 * An immutable array containing all
 * radian values listed on the unit circle.
 */
export const RADIANS = Object.freeze([
    0,
    Math.PI / 6,
    Math.PI / 4,
    Math.PI / 3,
    Math.PI / 2,
    2 * Math.PI / 3,
    3 * Math.PI / 4,
    5 * Math.PI / 6,
    Math.PI,
    7 * Math.PI / 6,
    5 * Math.PI / 4,
    4 * Math.PI / 3,
    3 * Math.PI / 2,
    5 * Math.PI / 3,
    7 * Math.PI / 4,
    11 * Math.PI / 6,
]);

/**
 * The amount of bars to draw onto the canvas.
 */
export const BAR_AMOUNT = 50;

/**
 * The width of each Bar object in pixels.
 */
export const BAR_WIDTH = 20;

/**
 * The scalar used to provide space
 * between each Bar object on the canvas.
 */
export const BAR_GAP_SCALAR = 1.5;

/**
 * The amount of space between
 * each bar on the canvas.
 */
export const BAR_GAP = BAR_WIDTH * BAR_GAP_SCALAR;

/**
 * The value to multiply
 * each Bar object's height by.
 */
export const BAR_HEIGHT_SCALER = 100;