import { taskFactory } from "./task-object.js";
import { workspaceFactory } from "./workspace-object";

// All workspaces array
let allWorkspaces = [];

// Current Workspace the user is working on
let currentWorkspace = 0;
function setCurrentWorkspace(workspaceId) {
	currentWorkspace = workspaceId;
	return currentWorkspace;
}
function getCurrentWorkspace() {
	return currentWorkspace;
}

// DISPLAT WORKSPACE TITLE
export function getWorkspaceTitle(workspaceId) {
	console.log(allWorkspaces[workspaceId].title);
	return allWorkspaces[workspaceId].title;
}

// Welcome Workspace
const welcomeWorkspace = workspaceFactory("Welcome Workspace", "0", "description");
allWorkspaces.push(welcomeWorkspace);
const secondWorkspace = workspaceFactory("Second Workspace", "1", "description");
allWorkspaces.push(secondWorkspace);

// Welcome Tasks
const welcomeTask = taskFactory("titulo", "descripcion bla bla bla", "fecha", "5");
const welcomeTaskTwo = taskFactory("titulo2", "descripcion bla bla2 bla", "dwed", "52");
const otherTask = taskFactory("othertask", "descripcion bla bla2 bla", "dwed", "52");

// Add tasks to workspaces
welcomeWorkspace.addToWorkspace(welcomeTask);
welcomeWorkspace.addToWorkspace(welcomeTaskTwo);
secondWorkspace.addToWorkspace(otherTask);

// Sidebar Menu
let sidebarMenuData = ["⭐ Stared", "🙂 My Tasks"];

// Sidebar Workspaces DELETE AND CREATE A FUNCTION THAT GETS THEM FORM ALL WORKSPACES
let sidebarWorkspacesTitles = [welcomeWorkspace.title];

export {
	sidebarMenuData,
	sidebarWorkspacesTitles,
	allWorkspaces,
	welcomeWorkspace,
	setCurrentWorkspace,
	getCurrentWorkspace,
};
