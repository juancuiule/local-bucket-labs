module.exports = {
  swFilePath: './build/service-worker.js',
  stripPrefix: 'build/',
  runtimeCaching: [
    {
      urlPattern: /http:\/\/localhost:5000\/common\//,
      handler: 'fastest',
    },
  ],
  handleFetch: false,
}
