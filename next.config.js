/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: false,
  swcMinify: false,
}

nextConfig.webpack = config => {
  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  })

  return config
}

module.exports = nextConfig
