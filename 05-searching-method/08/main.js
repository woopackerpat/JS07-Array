
const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];

// const deleteTask = id => {
//   return  tasks.filter(element => element.id !== id)
// }

//เฉลย

const deleteTask = id => {
  const newTasks = tasks.slice(); //เพื่อไม่ให้กระทบตัวเดิม
  const idx = tasks.findIndex(task => task.id === id)
  if(idx !== -1) {
    newTasks.splice(idx, 1) //ถ้าไม่ใส่แล้วไม่มี id นั้น idx จะเป็น -1 จะทำให้ตัวสุดท้ายหายไป
  } 
}