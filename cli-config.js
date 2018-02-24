const webpackMerge = require('webpack-merge');
const packageConfig = require(process.cwd() + '/config.json');

packageConfig.cli = packageConfig.cli || {};

const cliDefaultConfigs = {
    minimumNodeVersion: 8,
    folderPaths : {
        prod: './dist',
        dev: './dist-dev',
        docs: './docs',
        coverage: './coverage',
        mockapi: './mock-api'
    },
    server : {
        port: 9000,
        emulatorPort: 7000,
        emulatorAPIFolderPath: '/api-endpoints'
    }
};
module.exports = webpackMerge(cliDefaultConfigs, packageConfig.cli);
