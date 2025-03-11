let tasks = [];       // Array to store tasks
let nextTaskId = 1;   // Auto-incrementing ID

// Create a new task
function addTask(name, description) {
    const newTask = { id: nextTaskId++, name, description };
    tasks.push(newTask);
    return newTask;
}

// Read: Get all tasks
function getAllTasks() {
    return tasks;
}

// Update an existing task by id
function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (!task) {
        console.log(`Task with id ${id} not found`);
        return null;
    }
    if (newName !== undefined) {
        task.name = newName;
    }
    if (newDescription !== undefined) {
        task.description = newDescription;
    }
    return task;
}

// Delete a task by id
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) {
        console.log(`Task with id ${id} not found`);
        return null;
    }
    // Remove the task from the array and return it
    return tasks.splice(index, 1)[0];
}

// --- Example Usage ---
// Add tasks
console.log("Adding tasks:");
console.log(addTask("Buy groceries", "Milk, Bread, Eggs"));
console.log(addTask("Walk the dog", "Take the dog for a walk in the park"));

// View all tasks
console.log("\nAll tasks:");
console.log(getAllTasks());

// Update a task
console.log("\nUpdating task with id 1:");
console.log(updateTask(1, "Buy groceries and supplies", "Milk, Bread, Eggs, and Butter"));

// View all tasks after update
console.log("\nTasks after update:");
console.log(getAllTasks());

// Delete a task
console.log("\nDeleting task with id 2:");
console.log(deleteTask(2));

// Final tasks list
console.log("\nFinal tasks:");
console.log(getAllTasks());
