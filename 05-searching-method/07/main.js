
const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];

function updateTask(id, newName) {

  targetTask = tasks.filter(element => element.id === id); 

  targetTask[0].name = newName

  

}

// ??