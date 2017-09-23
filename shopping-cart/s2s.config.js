// @flow
const path = require('path')

const cwd = process.cwd()
const getRootDir = (...x) => path.resolve(cwd, 'src', ...x)
const getTyepDir = x => getRootDir('types', x)
const rootReducerPath = getRootDir('reducer.js')
const rootActionPath = getTyepDir('action.js')
const rootStatePath = getTyepDir('state.js')

module.exports = {
  watch: './**/*.js',
  plugins: [
    {
      test: /actionTypes.js$/,
      plugin: ['s2s-action-types', { removePrefix: 'src/containers' }],
    },
    {
      test: /actionTypes.js$/,
      output: 'actions.js',
      plugin: ['s2s-action-creater'],
    },
    {
      test: /actionTypes.js$/,
      input: rootActionPath,
      output: rootActionPath,
      plugin: [
        's2s-action-root',
        { input: 'src/**/actionTypes.js', output: rootActionPath },
      ],
    },
    {
      test: /containers\/.+reducer.js/,
      input: rootStatePath,
      output: rootStatePath,
      plugin: [
        's2s-state-root',
        { input: 'src/containers/**/reducer.js', output: rootStatePath },
      ],
    },
    {
      test: /containers\/.+reducer.js/,
      input: rootReducerPath,
      output: rootReducerPath,
      plugin: [
        's2s-reducer-root',
        { input: 'src/containers/**/reducer.js', output: rootReducerPath },
      ],
    },
  ],
  templates: [
    { test: /containers\/.*\/index.js/, input: 'containers.js' },
    { test: /components\/.*\/index.js/, input: 'components.js' },
    { test: /components\/.*\/index.test.js/, input: 'component.test.js' },
    { test: /reducer.js/, input: 'reducer.js' },
    { test: /reducer.test.js/, input: 'reducer.test.js' },
    { test: /selectors.js/, input: 'selectors.js' },
    { test: /selectors.test.js/, input: 'selectors.test.js' },
    { test: /logic.js/, input: 'logic.js' },
  ],
}
