module.exports = {

    // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

        /**
         * this will enable preact instead of react. uncomment below to enable only in production
         * from: https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/master/next.config.js
         */
        // if (!dev && !isServer) {
            // Replace React with Preact only in client production build
            Object.assign(config.resolve.alias, {
                react: 'preact/compat',
                'react-dom/test-utils': 'preact/test-utils',
                'react-dom': 'preact/compat',
            })
        // }

        // Important: return the modified config
        return config
    },
}
