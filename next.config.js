const path = require("path");

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.alias["@server"] = path.resolve(__dirname, "server");
    }
    config.resolve.alias["@client"] = path.resolve(__dirname, "client");
    return config;
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};
