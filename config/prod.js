const env = process.env.npm_lifecycle_event.split(':')[1]
const isView = runtime === 'view'

module.exports = {
  env: {
    NODE_ENV: '"production"',
    BUILD_ENV: '"'+ env +'"'
  },
  defineConstants: {
  },
  weapp: {},
  h5: {}
}
