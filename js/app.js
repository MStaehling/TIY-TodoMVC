(function (window) {
    'use strict';
    // I can add a task to my list...
    // 1. What event should I be listening for? keydn, keyup, keypress
    // 2. What element makes sense to listen for that event? input.new-todo
    // 3. What do I need to do when that event fires?
            // TO ADD A NEW TASK:
            // 1. Click on "What needs to be done?" (input.new-todo)
            // 2. Type the thing you want to remember (task!).
            // 3. Press the "Enter" key
            // 4. ROBOT: Save the thing to remember (task) to the list of things to remember (taskList)
            // 5. ROBOT: Remove the thing to remember (task) from the "What needs to be done?" box (input.new-todo)
            // 6. ROBOT: Update the number of tasks in the footer....
            // 7. ROBOT: Add a new task (ul.todo-list > li) to the list of tasks _in the display_ (ul.todo-list)

    var newTodoInput = document.querySelector('input.new-todo');

      // newTodoInput.addEventListener('keyup', function() { console.log(arguments); });
        newTodoInput.addEventListener('keyup', function addTodoController(event){
            if ( event.keyCode === 13 ){
                var task = document.querySelector('input.new-todo').value;
                todos.taskList.push(task);
console.log(todos.taskList.length)
							  document.querySelector('input.new-todo').value= "";

								if (todos.taskList.length === 1) {
									(document.querySelector('span.todo-count').textContent = (todos.taskList.length + " Item Left"));
								} else {
									(document.querySelector('span.todo-count').textContent = (todos.taskList.length + " Items Left"));
								};

// working on tomorrow
								document.querySelector('ul.todo-list > li').textContent = task;



							//	todos.taskList.length =	document.querySelector('.todo-count') ;
//console.log(document.querySelector('.todo-count'));

                console.log(todos.taskList);
                }
            // TO ADD A NEW TASK:
            // 7. ROBOT: Add a new task (ul.todo-list > li) to the list of tasks _in the display_ (ul.todo-list)
        });
})(window);


//DELETE A TASK
// 1. What event should I be listening for? click
// 2. What element makes sense to listen for that event? input.new-todo?
// 3. What do I need to do when that event fires?




//EDIT A TASK
// 1. What event should I be listening for? dblclick, keyup
// 2. What element makes sense to listen for that event?
// 3. What do I need to do when that event fires?




//COMPLETE A TASK
// 1. What event should I be listening for? click
// 2. What element makes sense to listen for that event? .completed or .view
// 3. What do I need to do when that event fires?
