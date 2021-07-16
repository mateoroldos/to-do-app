import { currentWorkspace } from "./data-management/data-storage";

// Get specific element from array of objects
export function getFromObjects(objectsArray, element) {
    let returnData = [];
    for (let i = 0; i < objectsArray.length; i++) {
        let dataFromThisObject = objectsArray[i][element];
        returnData.push(dataFromThisObject);
    }
    return returnData;
}

// Get all workspaces titles
// export function getWorkspacesIs(workspacesArray) {
//     let titles = [];
//     for (let i = 0; i < workspacesArray.length; i++) {
//         const taskTitle = workspacesArray.id[i].title;
//         titles.push(taskTitle);
//     }
//     return titles;
// }
