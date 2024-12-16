const scope = require('./commit-scope')

module.exports = {
  extends: ['gitmoji'],
  rules: {
    'header-max-length': [0, 'always', 100],
    'scope-case': [2, 'always', 'kebab-case'],
    'scope-empty': [2, 'never'],
    'scope-enum': [2, 'always', scope],
  },
}
