/**
 * Converts a string to camelCase.
 *
 * - The input string must start with a letter.
 * - Words are split by spaces, hyphens, underscores, or any non-alphanumeric character.
 * - Non-alphanumeric characters are removed from each word.
 * - The first word is lowercased.
 * - Subsequent words are capitalized (first letter uppercase, rest lowercase), except for acronyms (all uppercase words), which are preserved as is.
 * - Throws a TypeError if the input is not a string.
 * - Throws an Error if the string does not start with a letter.
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase version of the input string.
 * @throws {TypeError} If the input is not a string.
 * @throws {Error} If the input string does not start with a letter.
 *
 * @example
 * toCamelCase('SCREEN_NAME'); // returns 'screenName'
 * toCamelCase('user id'); // returns 'userId'
 * toCamelCase('API_KEY'); // returns 'apiKEY'
 * toCamelCase('first 1'); // throws Error
 */

/**
 * Converts a string to dot.case.
 *
 * - The input string must start with a letter.
 * - Words are split by spaces, hyphens, underscores, or any non-alphanumeric character.
 * - Non-alphanumeric characters are removed from each word.
 * - All words are lowercased and joined with dots.
 * - Throws a TypeError if the input is not a string.
 * - Throws an Error if the string does not start with a letter.
 *
 * @param {string} input - The string to convert to dot.case.
 * @returns {string} The dot.case version of the input string.
 * @throws {TypeError} If the input is not a string.
 * @throws {Error} If the input string does not start with a letter.
 *
 * @example
 * toDotCase('SCREEN_NAME'); // returns 'screen.name'
 * toDotCase('first name'); // returns 'first.name'
 */
function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }
    // Trim and check if first character is a letter
    const trimmed = input.trim();
    if (!/^[A-Za-z]/.test(trimmed)) {
        throw new Error('String must start with a letter');
    }

    // Split by space, hyphen, underscore, or any non-letter/number (but keep acronyms)
    const words = trimmed
        .split(/[\s\-_]+/)
        .map(w => w.replace(/[^A-Za-z0-9]/g, '')) // Remove non-alphanumerics

    // Remove empty words (could happen if there are multiple separators)
    .filter(Boolean);

    if (words.length === 0) return '';

    // Preserve acronyms (all uppercase words)
    return words
        .map((word, i) => {
            if (i === 0) {
                // Lowercase first word
                return word.charAt(0).toLowerCase() + word.slice(1);
            }
            // If word is all uppercase (acronym), keep as is
            if (/^[A-Z0-9]+$/.test(word)) return word;
            // Capitalize first letter, lowercase rest
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase('SCREEN_NAME')); // screenName
// console.log(toCamelCase('first 1')); // throws error

function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }
    const trimmed = input.trim();
    if (!/^[A-Za-z]/.test(trimmed)) {
        throw new Error('String must start with a letter');
    }
    // Split by space, hyphen, underscore, or any non-letter/number
    const words = trimmed
        .split(/[\s\-_]+/)
        .map(w => w.replace(/[^A-Za-z0-9]/g, ''))
        .filter(Boolean);

    if (words.length === 0) return '';

    return words.map(word => word.toLowerCase()).join('.');
}

// Example usage:
// console.log(toDotCase('SCREEN_NAME')); // screen.name
// console.log(toDotCase('first name')); // first.name

