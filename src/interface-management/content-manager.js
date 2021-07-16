import { createListFromObjects } from "./interface-creators/menu-creator.js";
import { allWorkspaces, getWorkspaceTitle } from "../data-management/data-storage.js";
// import { getTasksTitles } from '../app-coordinator.js'
// import { welcomeWorkspace } from '../data-management/data-storage';
// import { sidebarWorkspacesTitles } from '../data-management/data-storage';
import { viewObjectForm } from "./interface-creators/form-creator.js";

// DISPLAY TASKS FROM WORKSPACE
export function displayWorkspaceTasks(workspaceId) {
	const taskList = document.querySelector("#task-list");

	// Set title to selected Workspace
	const oldTitle = document.querySelector(".selected-workspace-title");
	taskList.removeChild(oldTitle);
	// Create new title
	let newTitle = document.createElement("h2");
	newTitle.textContent = getWorkspaceTitle(workspaceId);
	newTitle.classList.add("selected-workspace-title");
	// Append new title
	taskList.appendChild(newTitle);

	// Delete old tasks
	const oldTasks = document.querySelector(".task-list-parent");
	taskList.removeChild(oldTasks);
	// Append new tasks
	createListFromObjects(
		"task",
		allWorkspaces[workspaceId].tasks,
		["title", "description", "dueDate", "priority"],
		taskList
	);
}

// DISPLAY DEFAULT WORKSPACE WHEN START
displayWorkspaceTasks(0);

// CONTENT EVENT LISTENERS
const newTaskBtn = document.querySelector(".add-task");
const addTaskForm = document.querySelector("#add-task-form");
newTaskBtn.addEventListener("click", () => {
	viewObjectForm(addTaskForm);
});
