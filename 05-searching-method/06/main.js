const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];

//วิธี 1
  tasks.forEach((element, index) => {
    if(element.id === 2) console.log(index)
  })

  //วิธี 2

  const idx = tasks.findIndex(element => element.id === 2);
  console.log(idx)