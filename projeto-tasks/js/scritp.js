function addTasks(){
    const taskTitle = document.querySelector("#task-title").value;

    //função de remover tarefas
    function removeTask(task){
        task.parentNode.remove(true)
    }

    //função de completar tareda
    function completeTask(task) {
        const taskToComplete = task.parentNode;
        taskToComplete.classList.toggle('done'); //"Done" verifica se tiver essa classe ele tira se não tiver ele coloca.  
    }
 
    if (taskTitle) {
        //clona template
        const template = document.querySelector('.template');
        const newTask = template.cloneNode(true);
      
        //adicionar título
        newTask.querySelector('.task-title').textContent = taskTitle;
        newTask.classList.remove('template');
        newTask.classList.remove('hide');
        const list = document.querySelector('#task-list');
        list.appendChild(newTask);
        document.querySelector("#task-title").value = '';

        //evento de remover tarefas
        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click',function(){
            removeTask(this)            
        });

        //evento de completar tarefa
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click',function(){
            completeTask(this)
        });
     }
}



// evento para adicionar tarefas
const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener('click', function(e) {
    e.preventDefault();
    addTasks()
})