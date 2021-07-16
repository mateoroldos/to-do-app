import { taskFactory } from "../../data-management/task-object";
import { getCurrentWorkspace, allWorkspaces } from "../../data-management/data-storage";
import { displayWorkspaceTasks } from "../content-manager";

export function createObjectForm(appendElement, inputsTypeArray, inputsNameArray, id) {
	let f = document.createElement("form");
	f.setAttribute("method", "post");
	f.setAttribute("action", "submit.php");
	f.setAttribute("id", id);
	f.classList.toggle("hide-form");

	for (let i = 0; i < inputsTypeArray.length; i++) {
		let inputDiv = document.createElement("div");
		inputDiv.classList.add("input-div");

		let inputLabel = document.createElement("label");
		inputLabel.textContent = inputsNameArray[i];

		let input = document.createElement("input"); //input element, text
		input.setAttribute("type", inputsTypeArray[i]);
		input.setAttribute("name", inputsNameArray[i]);

		inputDiv.appendChild(inputLabel);
		inputDiv.appendChild(input);
		f.appendChild(inputDiv);
	}

	let s = document.createElement("input"); //input element, Submit button
	s.setAttribute("type", "submit");
	s.setAttribute("value", "Submit");

	f.appendChild(s);

	//and some more input elements here
	//and dont forget to add a submit button

	appendElement.appendChild(f);

	// Form submit event
	f.addEventListener("submit", (e) => {
		e.preventDefault();
		const newTask = taskFactory(
			f[inputsNameArray[0]].value,
			f[inputsNameArray[1]].value,
			f[inputsNameArray[2]].value,
			f[inputsNameArray[3]].value
		);
		allWorkspaces[getCurrentWorkspace()].addToWorkspace(newTask);
		displayWorkspaceTasks(getCurrentWorkspace());
		f.classList.toggle("view-form");
		f.classList.toggle("hide-form");
	});
}

const contentSection = document.querySelector("#content-section");
createObjectForm(
	contentSection,
	["text", "text", "number", "text"],
	["title", "description", "dueDate", "priority"],
	"add-task-form"
);

export function viewObjectForm(form) {
	form.classList.toggle("view-form");
	form.classList.toggle("hide-form");
}
