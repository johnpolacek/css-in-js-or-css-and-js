var package = require('./package.json')
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
	exportPathMap: function () {
		return {
			'/': { page: '/' },
			'/in': { page: '/in' }
		}
  	},
  	assetPrefix: process.env.NODE_ENV === 'production' ? '/'+package.name : ''
})