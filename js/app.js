(function(window) {
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
  var todoCount = document.querySelector('span.todo-count');
  // newTodoInput.addEventListener('keyup', function() { console.log(arguments); });
  newTodoInput.addEventListener('keyup', function addTodoController(event) {
    if (event.keyCode !== 13 || newTodoInput.value === "") return; //didn't press the "Enter" key!
    var task = newTodoInput.value;
    //todoCountElement = document.querySelector('span.todo-count');
    todos.addTask(task, todos.taskList);
    //console.log(todos.taskList.length)


    todos.footerCount(todoCount);
    newTodoInput.value = ""; //FIXME refractor into function...
    //newTodoInput.reset

    //   var todoCountText = todos.taskList.length + ' Item';
    //   if (todos.taskList.length === 1) {
    //     //todoCountText = todoCountText + ' Left';
    //     todoCountText += ' Left';
    //   } else {
    //     //todoCountText = TodoCountText + 's Left';
    //     todoCountText += 's Left';
    //   };
    // }
    //todoCountElement.text = todoCountText;





    //TODO Add a <li> representtation of 'task'...

    document.querySelector('ul.todo-list').innerHTML += (
        "<li><div><input class='toggle' type='checkbox'><label>" + task + "</label><button class='destroy'x></button></input class='toggle' type='checkbox'></div></li>"
      )
      // var list = document.querySelector('ul.todo-list');
      //list.innerHTML += ('blah ablah blah');
      //list.innerHTML = list.innerHTML + "blah blah blah";
    console.log(todos.taskList);

    // TO ADD A NEW TASK:
    // 7. ROBOT: Add a new task (ul.todo-list > li) to the list of tasks _in the display_ (ul.todo-list)

  });
  //DELETE A TASK: CONTROLLER
  // 1. What event should I be listening for? mouseover, click
  // 2. What element makes sense to listen for that event? li....button.destroy? ul.todo-list
  // 3. What do I need to do when that event fires?
  // 1. Remove from where it's saved
  // 2. Delete task field on the display
  // 3. update task # or remove it if 0
  // 4. click will tell what Index position of the array
  var list = document.querySelector('ul.todo-list');

  var deleteTaskButtons = document.querySelector('button.destroy');
  //

  // deleteTask.addEventListener('mouseover', function(){
  // 	console.log("hello");
  // });




  // deleteTaskButtons.addEventListener('click', function deleteTaskController(event){
  //
  //   console.log("sup")
  // })




  //  Potentially something to delete a task
  // _.forEach(list, function(element, index, deleteTaskButtons) {
  //   element.addEventListener('click', function() {
  //if (event.target.tagNAme == "BUTTON" && event.target.className == "DESTROY"){
  //console.log('delete me', event.target);
  //}
  //     console.log("works");
  //   });
  //
  // });



  //EDIT A TASK
  // 1. What event should I be listening for? dblclick, keyup [enter 13, tab, excape 27]
  // 2. What element makes sense to listen for that event? ul.todo-list
  // 3. What do I need to do when that event fires?

  var editTask = document.querySelectorAll('li');

  _.forEach(editTask, function(element, index, editTask) {
    element.addEventListener('dblclick', function() {
      console.log("Happy, Happy, Joy, Joy!!")
    })
  })





  //COMPLETE A TASK
  // 1. What event should I be listening for? mouseover, click
  // 2. What element makes sense to listen for that event? .completed or .view
  // 3. What do I need to do when that event fires?


  //VIEW A TASK
  // 1. What event should I be listening for?
  // 2. What element makes sense to listen for that event?
  // 3. What do I need to do when that event fires?



})(window);
