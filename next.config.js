module.exports = {
  future: {
    webpack5:true
  },
  images: {
    domains:["apis.manon.icu"]
  },
  webpack(config, options) {
    console.log(config.resolve)
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs:false
      }
    }
    // if (!options.isServer) {
		// 	config.node = {
		// 		fs: "empty",
		// 		path: true
		// 	};
		// }
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};