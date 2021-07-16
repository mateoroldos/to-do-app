import { createList, createListFromObjects } from "./interface-creators/menu-creator.js";
import { sidebarMenuData, setCurrentWorkspace } from "../data-management/data-storage";
import { sidebarWorkspacesTitles, allWorkspaces } from "../data-management/data-storage";
import { displayWorkspaceTasks } from "./content-manager.js";
import { getFromObjects } from "../app-coordinator.js";

// Create Sidebar Menu
const sidebarMenu = document.querySelector("#sidebar-menu");
createList("sidebar-menu", sidebarMenuData, sidebarMenu);

// Create Sidebar Workspaces
const sidebarWorkspacesParentDiv = document.querySelector("#sidebar-workspaces");
createListFromObjects("sidebar-workspaces", allWorkspaces, ["title"], sidebarWorkspacesParentDiv);

// SIDEBAR EVENT LISTENERS
const workspaceListElements = document.querySelectorAll(".sidebar-workspaces-list-element");
for (let i = 0; i < workspaceListElements.length; i++) {
    workspaceListElements[i].addEventListener("click", () => {
        let selectedWorkspaceId = workspaceListElements[i].dataset.workspaceid;
        console.log(selectedWorkspaceId);
        displayWorkspaceTasks(selectedWorkspaceId);
        setCurrentWorkspace(selectedWorkspaceId);
        // displayWorkspace()
        // let selectedWorkspace = workspaceLinks[i]
        // displayWorkspace(selectedWorkspace);
    });
}
