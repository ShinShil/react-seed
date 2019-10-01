const requireTask = (taskName, ...buildArguments) => {
    const res = require(`${__dirname}/tasks/${taskName}`);
    return res[taskName] ? res[taskName](...buildArguments) : res(...buildArguments);
};

const taskBuilder = {
    initDirectories: [__dirname],
    createComponent: [__dirname, 'src/jsx/components']
};

const tasks = {};
for (const key of Object.keys(taskBuilder)) {
    tasks[key] = requireTask(key, ...taskBuilder[key]);
}

tasks.createContainer = requireTask('createComponent', __dirname, 'src/jsx/containers');
tasks.createPage = requireTask('createComponent', __dirname, 'src/jx/pages');
tasks.tasks = function() {
    Object.keys(tasks).forEach(console.log);
};

tasks[process.argv[2]](() => console.log(`${process.argv[2]} done`));

