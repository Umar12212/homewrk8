let myArray = [];

function handleInput() {
  let userInput = prompt("Введите команду: ");

  if (userInput === 'stop') {
    console.log(myArray);
    return;
  }

  let command = userInput.split(' ')[0];
  let value = userInput.split(' ')[1];

  if (command === 'add') {
    myArray.push(value);
    console.log("Массив после добавления элемента:", myArray);
  } else if (command === 'del') {
    let index = myArray.indexOf(value);
    if (index !== -1) {
      myArray.splice(index, 1);
    }
    console.log("Массив после удаления элемента:", myArray);
  }

  handleInput();
}

handleInput();