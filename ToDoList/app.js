// selectors
const todoText=document.querySelector(".todo-text");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
const filterOption=document.querySelector('.filter-todo')

// Event listeners
document.addEventListener('DOMContentLoaded',getTodos);
todoButton.addEventListener("click",addtodo);
todoList.addEventListener('click',deleteCheck);//we used todoList as we complete and trash buttons in it
filterOption.addEventListener('click',filterTodo)
// functions

function addtodo(event){
//   prevent form from submitting
   event.preventDefault();
 // todoDiv which contains delete checked items
  const todoDiv=document.createElement('div');
  todoDiv.classList.add('todoItems');
  
  const olLi=document.createElement('li');
  todoVal=document.createTextNode(todoText.value);
  
  if(todoText.value==""){
       todoText.value=prompt('Please enter any task');
       todoVal=document.createTextNode(todoText.value);
   
   olLi.appendChild(todoVal);
  }
  else{
  olLi.appendChild(todoVal);
}
 
   
  olLi.classList.add('todo-li');
  todoDiv.appendChild(olLi);
  // add todo to local storage

  saveLocalTodos(todoText
    .value);

  
 
//   checkMark button
 const completedButton=document.createElement('button');
 completedButton.innerHTML='<i class="fas fa-check"></i>';
 completedButton.classList.add('complete-btn')
 todoDiv.appendChild(completedButton);

//  trsahButton
const trashButton=document.createElement('button');
trashButton.innerHTML='<i class="fas fa-trash"></i>';
trashButton.classList.add('trash-btn');
todoDiv.appendChild(trashButton);

//check for nonempty taks




// append to ul list

 todoList.appendChild(todoDiv);
//  to clear todo input value
  todoText.value="";
}

function deleteCheck(e){
    const item=e.target;
    // delete todo
    if(item.classList[0]==='trash-btn'){
      const todo=item.parentElement;
      todo.classList.add('fall');
      removeLocalTodo(todo);
      todo.addEventListener('transitionend',function(){
        todo.remove();
      })
    }

    if(item.classList[0]==='complete-btn'){
      var todo=item.parentElement;
      todo.classList.toggle('completed')
    }

    if(item.classList[0]!=='complete-btn'){
      var todo=item.parentElement;
      todo.classList.toggle('incomplete')
    }
  }
function filterTodo(e){
    const todos=todoList.childNodes;
    // todosCase=[];
    todos.forEach(function(todo){
            switch(e.target.value){
        case "all":
                  todo.style.display='flex';
                  document.getElementById('alert').innerHTML="";
                  break;
        case "completed":
          if(todo.classList.contains("completed")){
            todo.style.display="flex";
            document.getElementById('alert').innerHTML="";
          }
          else{
            todo.style.display="none";
            document.getElementById('alert').innerHTML="";
          }
          break;
        case "incomplete":
          if(!todo.classList.contains('completed')){
            todo.style.display='flex';
            document.getElementById('alert').innerHTML="";
          }
          else{
            todo.style.display='none';
            //  document.getElementById('alert').innerHTML="Congrats! you have completed all the tasks 😊";
          }
          break;
      }
       console.log(todo.classList);
      if(!todo.classList.contains('completed') && e.target.value=='completed'){
        console.log(true);
        document.getElementById('alert').innerHTML="Alas! you have not completed any tasks 😔";
      }
      else{
        
        document.getElementById('alert').innerHTML="";
      }
    })

    }

function saveLocalTodos(todo){
  // check -- do i already have thing in there
  let todos;
  if(localStorage.getItem('todos')===null){
    todos=[];
  }
  else{
    todos=JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem("todos",JSON.stringify(todos));
} 

function getTodos(){
   let todos;
   if(localStorage.getItem('todos')===null){
    todos=[];
  }
  else{
    todos=JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function(todo){
    const todoDiv=document.createElement('div');
    todoDiv.classList.add('todoItems');
    
    const olLi=document.createElement('li');
    todoVal=document.createTextNode(todo);
    olLi.appendChild(todoVal);
   
     
    olLi.classList.add('todo-li');
    todoDiv.appendChild(olLi);
  
    
   
  //   checkMark button
   const completedButton=document.createElement('button');
   completedButton.innerHTML='<i class="fas fa-check"></i>';
   completedButton.classList.add('complete-btn')
   todoDiv.appendChild(completedButton);
  
  //  trsahButton
  const trashButton=document.createElement('button');
  trashButton.innerHTML='<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  
  //check for nonempty taks  
  // append to ul list
  
   todoList.appendChild(todoDiv);

  });

}
 function removeLocalTodo(todo){
    
  let todos;
  if(localStorage.getItem('todos')===null){
   todos=[];
 }
 else{
   todos=JSON.parse(localStorage.getItem('todos'));
 }
  const todoIndex=todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex),1);
  localStorage.setItem('todos',JSON.stringify(todos));

}