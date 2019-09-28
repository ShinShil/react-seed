const requireTask = (taskName, ...buildArguments) => {
    const res = require(`${__dirname}/tasks/${taskName}`);
    return res[taskName] ? res[taskName](...buildArguments) : res(...buildArguments);
};

const taskBuilder = {
    initDirectories: [__dirname],
    createComponent: [__dirname]
};

const tasks = {};
for (const key of Object.keys(taskBuilder)) {
    tasks[key] = requireTask(key, ...taskBuilder[key]);
}

tasks[process.argv[2]](() => console.log(`${process.argv[2]} done`));

