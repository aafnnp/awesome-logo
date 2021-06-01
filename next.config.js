module.exports = {
  webpack(config, { isServer }) {
    if (!isServer) {
			config.node = {
				fs: "empty",
				path: true
			};
		}
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};