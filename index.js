/**
 * @campaign-manager/design-system
 * Design tokens, guidelines, and global atoms for Campaign Manager UI
 *
 * Usage:
 *   import tokens from '@campaign-manager/design-system';
 *   import '@campaign-manager/design-system/tokens.css';
 *   import '@campaign-manager/design-system/atoms.css';
 */

const tokens = require('./tokens/tokens.json');

module.exports = { tokens };
module.exports.tokens = tokens;
module.exports.default = tokens;
