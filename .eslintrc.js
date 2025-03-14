module.exports = {
  extends: ['react-app', 'react-app/jest'],
  rules: {
    'no-unused-vars': 'warn', // Treat unused variables as warnings
    'no-console': 'warn', // Treat console.log as warnings
    'react/prop-types': 'off', //disable prop-types rule.
    // Add other rules as needed
  },
};