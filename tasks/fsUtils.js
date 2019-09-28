const fs = require('fs');

function createDirectory(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        console.log('📁  folder created:', dir);
    }
}

function getExplorerName(directoryName, directoryParent) {
    return `${directoryParent}${directoryParent === '' ? '' : '\\'}${directoryName}`;
}

function createDirectoryObject(directoryObject, directoryParent = '') {
    enumerateStringTree(directoryObject, createDirectory, directoryParent);
}

function enumerateStringTree(treeObject, onString, treeParentPath = '', pathBuilder = getExplorerName) {
    if (treeObject == null) {
        throw new Error('directoryObject can not be null');
    }
    if (typeof treeObject === 'object') {
        if (typeof treeObject.length === 'number') {
            treeObject
                .forEach(childTreeObject => enumerateStringTree(childTreeObject, onString, treeParentPath, pathBuilder))
        } else {
            Object.keys(treeObject)
                .forEach(childTreeObject => {
                    const newPath = pathBuilder(childTreeObject, treeParentPath);
                    onString(newPath);
                    enumerateStringTree(treeObject[childTreeObject], onString, newPath, pathBuilder);
                });
        }
    } else if (typeof treeObject === 'string') {
        onString(pathBuilder(treeObject, treeParentPath));
    } else {
        throw new Error('bad value for treeObject it should be object or string or array')
    }
}

function createFile(pathToFile, content, err) {
    fs.writeFile(pathToFile, content, err);
}

exports = Object.assign(exports, {
    createDirectory, createDirectoryObject, getExplorerName, createFile
});
