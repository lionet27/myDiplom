const Tasks={
   
    state:{
        
        tasks:[
            {
                tasktext:'Создать список задач',
                dateEnd:'2024-04-01',
                important:true,
                urgently:true,
                doing:true,
                done:false,
                points:5,
            },
            {
                tasktext:'Положить фотографии в фотоальбом',
                dateEnd:'2024-08-01',
                important:true,
                urgently:false,
                doing:false,
                done:false,
                points:3,
            },
            {
                tasktext:'Помыть пол',
                dateEnd:'2024-04-01',
                important:false,
                urgently:true,
                doing:false,
                done:false,
                points:5,
            },
            {
                tasktext:'Нарисовать картину',
                dateEnd:' ',
                important:false,
                urgently:false,
                doing:false,
                done:false,
                points:2,
            },
            {
                tasktext:'Сделать кредитный калькулятор',
                dateEnd:'2024-04-11',
                important:true,
                urgently:true,
                doing:true,
                done:false,
                points:5,
            },

        ],
       
        
    },
    getters:{
       
        // importantUrgentTasks(state) {
        //     return state.tasks.filter(task => task.important==true && task.urgently==true && !task.done);
              
        //   },
        //   importantNotUrgentTasks(state) {
        //     return state.tasks.filter(task => task.important && !task.urgently && !task.done);
        //   },
        //   notImportantUrgentTasks(state) {
        //     return state.tasks.filter(task => !task.important && task.urgently && !task.done);
        //   },
        //   notImportantNotUrgentTasks(state) {
        //     return state.tasks.filter(task => !task.important && !task.urgently && !task.done);
        //   },
        //   toDoTasks(state){
        //     return state.tasks.filter(task => !(!task.important && !task.urgently)&&!task.doing&&!task.done);
        //   },
        //   doingTasks(state){
        //     return state.tasks.filter(task => task.doing&&!task.done);
        //   },
        //   doneTasks(state){
        //     return state.tasks.filter(task => task.done);
        //   },
          // possiblePoints(state){
          //   return state.tasks.reduce((sum, task) => {
          //       if (!task.done) {
          //           return sum + task.points;
          //       } else {
          //           return sum;
          //       }
          //   }, 0);
          // }

                   

    },
    mutations:{
      // isOverdue(state, dateEnd) {
      //   const currentDate = new Date();
      //   console.log(currentDate);
      //   const end = new Date(dateEnd);
      //   console.log(end);
      //   console.log(currentDate > end);
      //   return currentDate > end;
      // },
        // addTask(state,newTask){
        //     state.tasks.push({
        //         tasktext: newTask.tasktext,
        //         dateEnd: newTask.dateEnd,
        //         important: newTask.important,
        //         urgently: newTask.urgently,
        //         done: false,
        //         doing:newTask.doing,
        //         points: newTask.points 
        //       });
        // },
        
      //   deleteTask(state,tasktext) {
      //       const index = state.tasks.findIndex(task => task.tasktext === tasktext);
      //       if (index !== -1) {
      //           state.tasks.splice(index, 1);
      //       } else {
      //         console.error('Task with tasktext ' + tasktext + ' not found');
      //       }
      //   },
      //  doingStatusTask(state,tasktext) {
      //   const index = state.tasks.findIndex(task => task.tasktext === tasktext);
      //       if (index !== -1) {
      //           state.tasks[index].doing=!state.tasks[index].doing;
      //       } else {
      //         console.error('Task with tasktext ' + tasktext + ' not found');
      //       }
      // },
      // doneTask(state,tasktext){
      //   const index = state.tasks.findIndex(task => task.tasktext === tasktext);
      //       if (index !== -1) {
      //           state.tasks[index].done=true;
      //           state.totalScoredPoints+=state.tasks[index].points;
      //       } else {
      //         console.error('Task with tasktext ' + tasktext + ' not found');
      //       }
      // },
      // doneToDoingTask(state,tasktext){
      //   const index = state.tasks.findIndex(task => task.tasktext === tasktext);
      //       if (index !== -1) {
      //         if(state.tasks[index].done){
      //           state.tasks[index].done=false;
      //           state.totalScoredPoints-=state.tasks[index].points;
      //         }
      //       } else {
      //         console.error('Task with tasktext ' + tasktext + ' not found');
      //       }
      // },

      // editTask(state,tasktext){
      //   const index = state.tasks.findIndex(task => task.tasktext === tasktext);
      //       if (index !== -1) {
      //           state.tasks[index].tasktext=prompt('Измените задачу?',state.tasks[index].tasktext);
      //           state.tasks[index].dateEnd=prompt('Измените дату?',state.tasks[index].dateEnd);
      //           state.tasks[index].important=confirm(`Сейчас статус важности этой задачи:${state.tasks[index].important}. Если считаете эту задачу важной, нажмите OK, если нет, то Отмена`);
      //           state.tasks[index].urgently=confirm(`Сейчас статус  срочности этой задачи:${state.tasks[index].urgently}. Если считаете эту задачу срочной, нажмите OK, если нет, то Отмена`);
      //           state.tasks[index].points=parseInt(prompt('Измените количество баллов за выполнение задачи?',state.tasks[index].points));
      //       } else {
      //         console.error('Task with tasktext ' + tasktext + ' not found');
      //       }
      // },
        // changeTag(state, selectTag) {
        //     if (state.selectedTag) {
        //         state.selectedTag.classList.remove('active');
        //     }
        //     state.tag = selectTag;
        //     state.selectedTag = event.target;
        //     state.selectedTag.classList.add('active');
        // }
    
    },
    actions:{

    },
    modules:{
        
    },

};
export default Tasks;