const scope = require('./commit-scope')

module.exports = {
  types: [
    { value: ':sparkles: feat', name: '✨ feat: Adding a new feature' },
    { value: ':bug: fix', name: '🐛 fix: Fixing a bug' },
    { value: ':memo: docs', name: '📝 docs: Add or update documentation' },
    {
      value: ':lipstick: style',
      name: '💄 style: Add or update styles, ui or ux',
    },
    {
      value: ':recycle: refactor',
      name: '♻️  refactor: Code change that neither fixes a bug nor adds a feature',
    },
    {
      value: ':zap: perf',
      name: '⚡️ perf: Code change that improves performance',
    },
    {
      value: ':white_check_mark: test',
      name: '✅ test: Adding tests cases',
    },
    {
      value: ':truck: chore',
      name: '🚚 chore: Changes to the build process or auxiliary tools and libraries such as documentation generation',
    },
    { value: ':rewind: revert', name: '⏪️ revert: Revert to a commit' },
    { value: ':construction: wip', name: '🚧 wip: Work in progress' },
    {
      value: ':construction_worker: build',
      name: '👷 build: Add or update regards to build process',
    },
    {
      value: ':green_heart: ci',
      name: '💚 ci: Add or update regards to build process',
    },
  ],
  scopes: scope,
  allowBreakingChanges: ['feat', 'fix'],
}
