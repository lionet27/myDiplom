const TasksSon={
   
    state:{
        
        tasks:[
            {
                tasktext:'Сделать доклад',
                dateEnd:'2024-04-01',
                important:true,
                urgently:true,
                doing:true,
                done:false,
                points:5,
            },
            {
                tasktext:'Прорешать математика Петерсон',
                dateEnd:'2024-08-01',
                important:true,
                urgently:false,
                doing:false,
                done:false,
                points:3,
            },
            {
                tasktext:'Убраться в комнате ',
                dateEnd:'2024-04-01',
                important:false,
                urgently:true,
                doing:false,
                done:false,
                points:5,
            },
            {
                tasktext:'Научиться выжигать',
                dateEnd:' ',
                important:false,
                urgently:false,
                doing:false,
                done:false,
                points:2,
            },
            {
                tasktext:'Сделать завтрак',
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
       
    },
    mutations:{
      isOverdue(state, dateEnd) {
        const currentDate = new Date();
        console.log(currentDate);
        const end = new Date(dateEnd);
        console.log(end);
        console.log(currentDate > end);
        return currentDate > end;
      },
        addTask(state,newTask){
            state.tasks.push({
                tasktext: newTask.tasktext,
                dateEnd: newTask.dateEnd,
                important: newTask.important,
                urgently: newTask.urgently,
                done: false,
                doing:newTask.doing,
                points: newTask.points 
              });
        },
      
    },
    actions:{

    },
    modules:{
        
    },

};
export default TasksSon;