interface Task {
 title:string;
 completed?:boolean;
}

function taskStatus(task:Task){
  if(task.completed){
   return "Parabens! tsk concluida";
  }else{
   return "vamo ver essas task ai ne man";
  }
}

const task1:Task = {title:"task1", completed:true};
const task2:Task = {title:"task2"} 

console.log(taskStatus(task1))
console.log(taskStatus(task2))