const fsUtils = require('./fsUtils');

function getFiles(componentName) {
    return [
        {
            name: `${componentName}.js`,
            content:
`export class ${componentName}Component`
        },
        {
            name: `${componentName}.html`,
            content:
`<h1>Hello component</h1> `
        },
        {
            name: `${componentName}.scss`,
            content:
`// start writing css `
        }
    ];
}

function generateComponentFiles(componentName, srcDirectory, pathToComponents) {
    fsUtils.createDirectory(pathToComponents);
    const dir = pathToComponents + '\\' + componentName;
    fsUtils.createDirectory(dir);
    getFiles(componentName).forEach(file => {
        fsUtils.createFile(dir + '\\' + file.name, file.content, (err) => {
            if (err) {
                console.log(`Fail to create ${pathToComponents}`);
                throw err;
            } else {
                console.log(`Created: ${pathToComponents}`)
            }
        })
    });
}

module.exports = function (src = '', pathToComponents) {
    return function (callback) {
        if(process.argv.length > 2) {
            for (let i = 3; i < process.argv.length; ++i) {
                generateComponentFiles(process.argv[i], src, pathToComponents);
            }
        } else {
            console.log('Please specify component name');
        }
        callback();
    };
};
