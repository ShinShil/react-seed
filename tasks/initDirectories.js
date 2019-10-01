const fsUtils = require(`${__dirname}/fsUtils`);

module.exports = function(baseDir = '') {
    return function (callback) {
        const folders = [{
            src: [
                {jsx: ['components', 'containers', 'pages', 'layouts']},
                {lib: ['axios', 'redux', 'constants']},
                'utils'
            ]
        }];

        fsUtils.createDirectoryObject(folders, baseDir);
        callback();
    }
};
