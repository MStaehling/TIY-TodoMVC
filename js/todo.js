(function(window){
   var taskList = [];

   function listTasks(list){
   }

   function addTask(task, list){
     return list.push(task);
   }

   function deleteTask (position, list){
     return list.splice(position, 1);
   }

   window.todos = {
     "taskList": taskList,
     "addTask": addTask,
     // "completeTask": completeTask,
     "deleteTask": deleteTask
   };

})(window);
