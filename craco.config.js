const CracoAlias = require("craco-alias");
const path = require("path");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
    configure: (config, { env, paths }) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
  },
};
