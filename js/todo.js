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

   function footerCount(element){
       if ( taskList.length === 1 ) {
         element.textContent = taskList.length + " Item Left";
       } else {
         element.textContent = taskList.length + " Items Left";
       }
   }



   window.todos = {
     "taskList": taskList,
     "addTask": addTask,
     //"completeTask": completeTask,
     "deleteTask": deleteTask,
     "footerCount": footerCount
   };

})(window);
