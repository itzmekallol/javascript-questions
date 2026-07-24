/**
 * Q24 — Default export.
 * A module can have at most ONE default export. Unlike named exports,
 * the importing file can call it whatever it wants (no curly braces needed).
 */

export default function greet(name) {
  return `Hello, ${name}! Welcome to ES6 modules.`;
}
