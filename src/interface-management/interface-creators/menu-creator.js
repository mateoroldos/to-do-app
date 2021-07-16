import { getFromObjects } from "../../app-coordinator";

// CREATE LIST FROM AN ARRAY
export function createList(classPrefix, menuContentArray, appendElement) {
	// Create list's ul div
	const listParent = document.createElement("div");
	listParent.classList.add(classPrefix + "-list-parent");

	for (let i = 0; i < menuContentArray.length; i++) {
		// Create list elements
		const listElement = document.createElement("button");
		listElement.classList.add(classPrefix + "-list-element");
		listElement.textContent = menuContentArray[i];

		// Append list element
		listParent.appendChild(listElement);
	}

	// Append list
	appendElement.appendChild(listParent);
}

// CREATE LIST WITH AN ARRAY OF OBJECTS
export function createListFromObjects(classPrefix, menuContentArray, objectElementsToDisplay, appendElement) {
	// Create list's ul div
	const listParent = document.createElement("div");
	listParent.classList.add(classPrefix + "-list-parent");

	for (let index = 0; index < menuContentArray.length; index++) {
		// Create list elements
		const listElement = document.createElement("button");
		listElement.classList.add(classPrefix + "-list-element");
		listElement.setAttribute("data-workspaceid", getFromObjects(menuContentArray, "id")[index]);
		for (let i = 0; i < objectElementsToDisplay.length; i++) {
			const buttonSubDiv = document.createElement("div");
			buttonSubDiv.textContent = getFromObjects(menuContentArray, objectElementsToDisplay[i])[index];
			listElement.appendChild(buttonSubDiv);
		}

		// Append
		listParent.appendChild(listElement);
	}

	appendElement.appendChild(listParent);
}
