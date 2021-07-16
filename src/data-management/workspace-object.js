export const workspaceFactory = (title, id, description) => {
    let tasks = []
    const addToWorkspace = (task) => tasks.push(task);
    return { title, id, description, tasks, addToWorkspace };
};