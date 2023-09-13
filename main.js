let myArray = [];

function handleInput() {
  let userInput = prompt("Введите команду: ");

  if (userInput === 'stop') {
    console.log(myArray);
    return;
  }

  let [command, value] = userInput.split(' ');

  if (command === 'add') {
    myArray.push(value);
    console.log("Массив после добавления элемента:", myArray);
  } else if (command === 'del') {
    let index = -1;
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i] === value) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      myArray.splice(index, 1);
    }
    console.log("Массив после удаления элемента:", myArray);
  }

  handleInput();
}

handleInput();
