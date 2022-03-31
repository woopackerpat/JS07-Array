
const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];

const deleteTask = id => {
    tasks = tasks.filter(element => element.id !== id)
}