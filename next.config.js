module.exports = {
  future: {
    webpack5:true
  },
  images: {
    domains:["apis.manon.icu"]
  },
  webpack(config) {
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs:false
      }
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};