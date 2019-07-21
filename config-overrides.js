const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require("path");

// MODIFY WEBPACK CONFIG HERE

module.exports = override(
    // Import from specific components instead of whole library, helps reduce bundle size
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    // Modify Less variables in Ant design
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { 
            '@primary-color': '#06047f',
            'font-family': "'Poppins', sans-serif"
        },
    }),
    // Ensures we only build icons we need, greatly reduces bundle size
    addWebpackAlias({
        "@ant-design/icons/lib/dist$": path.resolve(__dirname, "./src/icons/index.js")
    })
);