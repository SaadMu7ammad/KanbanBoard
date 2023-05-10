const deleteAllBtn = document.querySelector('.del-all-btn');
const YesDeleteAllBtn = document.querySelector('.yes-all');
const NoDeleteAllBtn = document.querySelector('.no-all');

// let LocalContaienr = getLocal(id);
// let InProgressContaienr = getInPorgress();
// let DoneContaienr = getDone();
let oldValueTask;
let todoTasks = JSON.parse(localStorage.getItem('todoTasks')) || [];
let inProgressTasks = JSON.parse(localStorage.getItem('inProgressTasks')) || [];
let doneTasks = JSON.parse(localStorage.getItem('doneTasks')) || [];
function saveToLocalStorage() {
  localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
  localStorage.setItem('inProgressTasks', JSON.stringify(inProgressTasks));
  localStorage.setItem('doneTasks', JSON.stringify(doneTasks));
}

let Tracker = 1;

deleteAllBtn.addEventListener('click', () => {
  document.querySelector('.overlay').classList.toggle('show');
});
NoDeleteAllBtn.addEventListener('click', () => {
  document.querySelector('.overlay').classList.toggle('show');
});
YesDeleteAllBtn.addEventListener('click', () => {
  // document.querySelector('.overlay').classList.toggle('show');
  todoTasks = [];
  inProgressTasks = [];
  doneTasks = [];
  saveToLocalStorage();
  document.querySelector('.overlay').classList.toggle('show');

  window.location.reload();
});
//add a new task in each category
const toDoBtn = document.querySelector('.to-do-btn');
const InprogressBtn = document.querySelector('.in-progress-btn');
const DoneBtn = document.querySelector('.done-btn');

toDoBtn.addEventListener('click', () => {
  const listItem = document.createElement('li');
  listItem.setAttribute('draggable', 'true');

  listItem.innerHTML = `<input type="text" placeholder="enter ur task" />
  <button class="edit-btn">
  <i class="fa-solid fa-pen-to-square"></i></button>
<button class="del-btn">
  <i class="fa-solid fa-trash"></i>
</button>`;
  listItem.setAttribute('id', Tracker++);

  document.querySelector('.todo').appendChild(listItem);

  listItem.querySelector('.del-btn').addEventListener('click', (e) => {
    console.log(e.target.closest('.del-btn'));
    console.log(e.target.closest('li').getAttribute('id'));
    console.log(e.target.closest('li').querySelector('input').value);
    let selectedDeleted = e.target.closest('li').querySelector('input').value;
    for (let i = 0; i < todoTasks.length; i++) {
      if (todoTasks[i] === selectedDeleted) {
        todoTasks.splice(i, 1);
        localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
        break;
      }
    }
    e.target.closest('li').remove();
  });
  listItem.querySelector('.edit-btn').addEventListener('click', () => {
    listItem.querySelector('input').focus();
    // txt = listItem.querySelector('input').value;
  });
  listItem.querySelector('input').addEventListener('focus', (e) => {
    // console.log('Input has focus');

    txt = e.target.value;

    console.log(e.target.value);
    oldValueTask = e.target.value;
    // console.log('all tasks printed in done');
  });
  listItem.querySelector('input').addEventListener('change', (e) => {
    console.log(e.target.value);
    txt = e.target.value;
    // console.log(it.closest('li').getAttribute('id'));
    // listItem.querySelector('input').focus()
    // loadFromLocalStorage();
    // setDone(it.closest('li').getAttribute('id'), event.target.value);
    if (e.target.value.trim() !== null) {
      todoTasks.push(e.target.value);
    }
    // console.log(doneTasks);
    // foundedIndex = -1;
    // doneTasks = JSON.parse(localStorage.getItem('doneTasks'))
    for (let i = 0; i < todoTasks.length; i++) {
      if (todoTasks[i] === oldValueTask.trim()) {
        foundedIndex = i;
        console.log(oldValueTask);
        todoTasks[i] = e.target.value;
        todoTasks.splice(i, 1);
      }
    }
    // doneTasks.forEach((tasks) => {
    //   // console.log(tasks);
    //   if (tasks === oldValueTask.trim()) {
    //     tasks = e.target.value;
    //   }

    // console.log(doneTasks);
    saveToLocalStorage();
    window.location.reload();
  });

  // it.addEventListener('change', (event) => {
  //   console.log(event.target.value);

  //   console.log(it.closest('li').getAttribute('id'));

  //   // loadFromLocalStorage();
  //   // setDone(it.closest('li').getAttribute('id'), event.target.value);
  // });
  reload();
  localReload();
});

InprogressBtn.addEventListener('click', () => {
  const listItem = document.createElement('li');
  listItem.setAttribute('draggable', 'true');

  listItem.innerHTML = `<input type="text" placeholder="enter ur task" />
  <button class="edit-btn">
  <i class="fa-solid fa-pen-to-square"></i></button>
<button class="del-btn">
  <i class="fa-solid fa-trash"></i>
</button>`;
  listItem.setAttribute('id', Tracker++);

  document.querySelector('.nowdo').appendChild(listItem);

  listItem.querySelector('.del-btn').addEventListener('click', (e) => {
    console.log(e.target.closest('.del-btn'));
    console.log(e.target.closest('li').getAttribute('id'));
    console.log(e.target.closest('li').querySelector('input').value);
    let selectedDeleted = e.target.closest('li').querySelector('input').value;
    for (let i = 0; i < inProgressTasks.length; i++) {
      if (inProgressTasks[i] === selectedDeleted) {
        inProgressTasks.splice(i, 1);
        localStorage.setItem(
          'inProgressTasks',
          JSON.stringify(inProgressTasks)
        );
        break;
      }
    }

    e.target.closest('li').remove();
  });
  listItem.querySelector('.edit-btn').addEventListener('click', () => {
    listItem.querySelector('input').focus();
  });
  listItem.querySelector('input').addEventListener('focus', (e) => {
    // console.log('Input has focus');
    txt = e.target.value;

    console.log(e.target.value);
    oldValueTask = e.target.value;
    // console.log('all tasks printed in done');
  });
  listItem.querySelector('input').addEventListener('change', (e) => {
    console.log(e.target.value);

    // console.log(it.closest('li').getAttribute('id'));
    //
    // loadFromLocalStorage();
    // setDone(it.closest('li').getAttribute('id'), event.target.value);
    if (e.target.value.trim() !== null) {
      inProgressTasks.push(e.target.value);
    }
    // console.log(doneTasks);
    // foundedIndex = -1;
    // doneTasks = JSON.parse(localStorage.getItem('doneTasks'))
    for (let i = 0; i < inProgressTasks.length; i++) {
      if (inProgressTasks[i] === oldValueTask.trim()) {
        foundedIndex = i;
        console.log(oldValueTask);
        inProgressTasks[i] = e.target.value;
        inProgressTasks.splice(i, 1);
      }
    }
    // doneTasks.forEach((tasks) => {
    //   // console.log(tasks);
    //   if (tasks === oldValueTask.trim()) {
    //     tasks = e.target.value;
    //   }

    // console.log(doneTasks);
    saveToLocalStorage();
    window.location.reload();
  });

  // it.addEventListener('change', (event) => {
  //   console.log(event.target.value);

  //   console.log(it.closest('li').getAttribute('id'));

  //   // loadFromLocalStorage();
  //   // setDone(it.closest('li').getAttribute('id'), event.target.value);
  // });
  reload();
  localReload();
});

DoneBtn.addEventListener('click', () => {
  const listItem = document.createElement('li');
  listItem.setAttribute('draggable', 'true');

  listItem.innerHTML = `<input type="text" placeholder="enter ur task" />
  <button class="edit-btn">
  <i class="fa-solid fa-pen-to-square"></i></button>
<button class="del-btn">
  <i class="fa-solid fa-trash"></i>
</button>`;
  listItem.setAttribute('id', Tracker++);

  document.querySelector('.done').appendChild(listItem);

  listItem.querySelector('.del-btn').addEventListener('click', (e) => {
    console.log(e.target.closest('.del-btn'));
    console.log(e.target.closest('li').getAttribute('id'));

    console.log(e.target.closest('li').querySelector('input').value);
    let selectedDeleted = e.target.closest('li').querySelector('input').value;
    for (let i = 0; i < doneTasks.length; i++) {
      if (doneTasks[i] === selectedDeleted) {
        doneTasks.splice(i, 1);
        localStorage.setItem('doneTasks', JSON.stringify(doneTasks));
        break;
      }
    }
    e.target.closest('li').remove();
  });
  listItem.querySelector('.edit-btn').addEventListener('click', (e) => {
    listItem.querySelector('input').focus();
    txt = listItem.querySelector('input').value;
  });
  listItem.querySelector('input').addEventListener('focus', (e) => {
    // console.log('Input has focus');
    txt = e.target.value;
    console.log(e.target.value);
    oldValueTask = e.target.value;
    // console.log('all tasks printed in done');
  });
  listItem.querySelector('input').addEventListener('change', (e) => {
    console.log(e.target.value);

    // console.log(it.closest('li').getAttribute('id'));
    //
    // loadFromLocalStorage();
    // setDone(it.closest('li').getAttribute('id'), event.target.value);
    if (e.target.value.trim() !== null) {
      doneTasks.push(e.target.value);
    }
    // console.log(doneTasks);
    // foundedIndex = -1;
    // doneTasks = JSON.parse(localStorage.getItem('doneTasks'))
    for (let i = 0; i < doneTasks.length; i++) {
      if (doneTasks[i] === oldValueTask.trim()) {
        foundedIndex = i;
        console.log(oldValueTask);
        doneTasks[i] = e.target.value;
        doneTasks.splice(i, 1);
      }
    }
    // doneTasks.forEach((tasks) => {
    //   // console.log(tasks);
    //   if (tasks === oldValueTask.trim()) {
    //     tasks = e.target.value;
    //   }

    // console.log(doneTasks);
    saveToLocalStorage();
    window.location.reload();
  });

  // it.addEventListener('change', (event) => {
  //   console.log(event.target.value);

  //   console.log(it.closest('li').getAttribute('id'));

  //   // loadFromLocalStorage();
  //   // setDone(it.closest('li').getAttribute('id'), event.target.value);
  // });
  reload();
  localReload();
});

function localReload() {
  const input = document.querySelectorAll('input');
  // console.log(input);
  const arrInputs = [...input];
  arrInputs.forEach((it) => {
    // it.addEventListener('keydown', (event) => {
    //   if (event.key === 'Enter') {
    //     it.blur();
    //   }
    // });
    // it.addEventListener('change', (event) => {
    //   console.log(event.target.value);
    //   console.log(it.closest('li').getAttribute('id'));
    //   // loadFromLocalStorage();
    //   // setDone(it.closest('li').getAttribute('id'), event.target.value);
    // });
  });
}

//delete specific task
const delBtns = document.querySelectorAll('.del-btn');
function addEventListenerAgain() {
  delBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      // console.log(e.target.closest('.del-btn'));
      console.log(e.target.closest('li'));
      button.closest('li').remove();
    });
  });
}
let draggables = document.querySelectorAll('li');
let droppables = document.querySelectorAll('ul');
let globalStart;
let globalEnd;
let txt;
function reload() {
  draggables = document.querySelectorAll('li');
  droppables = document.querySelectorAll('ul');
  draggables.forEach((li) => {
    //when drag the li it becomes darker
    li.addEventListener('dragstart', (e) => {
      // e.dataTransfer.setData('text/plain', e.target.getAttribute('id'));
      // DataTransfer.effectAllowed = 'move';
      txt = li.querySelector('input').value;
console.log(txt);
      li.classList.add('is-dragging');
      console.log(e.target.closest('ul'));
      globalStart = e.target.closest('ul');
      console.log('started');
      console.log(globalStart);
    });
    //when drag ends the li effect removed
    li.addEventListener('dragend', () => {
      li.classList.remove('is-dragging');
    });
  });
}

droppables.forEach((area) => {
  area.addEventListener('dragover', (e) => {
    // txt = e.target.closest('li').querySelector('input').value;

    const currentDraging = document.querySelector('.is-dragging');
    // if (e.dataTransfer.types[0] !== 'text/plain') return;
    e.preventDefault();
    // area.style.backgroundColor = '#2b272759';
    const afterEl = getDragAfterElements(area, e.clientY);
    //e.clientY => the height from the window
    if (afterEl == null) {
      area.appendChild(currentDraging);
    } else {
      //afterEL the element inserted before the current
      area.insertBefore(currentDraging, afterEl);
    }
  });
  area.addEventListener('drop', (e) => {
    console.log('Dropped');
    console.log(e.target.closest('ul'));
    globalEnd = e.target.closest('ul');

    // const taskID = e.dataTransfer.getData('text/plain');
    if (globalStart !== globalEnd) {
      //there is a bug hereeeeeeeeeeeeeeeeee when a ul is empty and u drag it a li
      if (globalEnd.querySelectorAll('li').length > 0) {
        // console.log(globalEnd.querySelector('input').value);
        // const txt = globalStart.querySelector('input').value;

        //progress to todo and done
        if (globalStart.className === 'nowdo') {
          for (let i = 0; i < inProgressTasks.length; i++) {
            if (inProgressTasks[i] == txt) {
              // foundedIndex = i;
              // console.log(oldValueTask);
              // inProgressTasks[i] = e.target.value;
              inProgressTasks.splice(i, 1);
              if (globalEnd.className === 'todo') {
                todoTasks.push(txt);
                saveToLocalStorage();
                window.location.reload();
              } else if (globalEnd.className === 'done') {
                doneTasks.push(txt);
                saveToLocalStorage();
                window.location.reload();
              }
            }
          }
        } else if (globalStart.className === 'todo') {
          for (let i = 0; i < todoTasks.length; i++) {
            if (todoTasks[i] == txt) {
              // foundedIndex = i;
              // console.log(oldValueTask);
              // inProgressTasks[i] = e.target.value;
              todoTasks.splice(i, 1);
              if (globalEnd.className === 'nowdo') {
                inProgressTasks.push(txt);
                saveToLocalStorage();
                window.location.reload();
              } else if (globalEnd.className === 'done') {
                doneTasks.push(txt);
                saveToLocalStorage();
                window.location.reload();
              }
            }
          }
        } else if (globalStart.className === 'done') {
          console.log('yyyyyyyyyyyyyy');
          console.log(doneTasks.length);
          for (let i = 0; i < doneTasks.length; i++) {
            console.log(doneTasks[i]);
            console.log(txt);
            if (doneTasks[i] == txt) {
              console.log('xxx');
              // foundedIndex = i;
              // console.log(oldValueTask);
              // inProgressTasks[i] = e.target.value;
              doneTasks.splice(i, 1);
              if (globalEnd.className === 'nowdo') {
                inProgressTasks.push(txt);
                saveToLocalStorage();
                window.location.reload();
              } else if (globalEnd.className === 'todo') {
                todoTasks.push(txt);
                console.log(txt);
                saveToLocalStorage();
                window.location.reload();
              }
            } else {
              console.log(txt);
            }
          }
        }
      } else {
        console.log('empty');
      }
    } else {
      console.log('same');
    }
    // area.style.backgroundColor = 'transparent';
  });
  area.addEventListener('dragleave', (e) => {
    // area.style.backgroundColor = 'transparent';
  });
});

// function getDragAfterElements(overArea, yMouse) {
//   //gets the all li in the same box (ToDO / InProgress / Done) (area)
//   const draggableElements = [
//     ...overArea.querySelectorAll('li:not(.is-dragging)'),
//   ];
//   //must be array to use the reduce function
//   // console.log(draggableElements);
//   return draggableElements.reduce(
//     (distance, el) => {
//       const box = el.getBoundingClientRect();
//       const offset = yMouse - box.top - box.height / 2;
//       console.log(offset);
//       if (offset < 0 && offset>distance.offset) {//above the element
//         return {offset:offset,elmnt:el}
//       }
//       else {
//         return distance;
//       }
//     },
//     { offset: Number.NEGATIVE_INFINITY }
//   ).elmnt;
// }

function getDragAfterElements(overArea, yMouse) {
  //gets the all li in the same box (ToDO / InProgress / Done) (area)
  const draggableElements = [
    ...overArea.querySelectorAll('li:not(.is-dragging)'),
  ];
  let closestTask = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  draggableElements.forEach((li) => {
    //destruct the big object to only top properties
    const { top } = li.getBoundingClientRect();
    // const top  = li.getBoundingClientRect().top;
    const offset = yMouse - top;
    // console.log('offset' + offset);
    // console.log('top' + top);
    // console.log('y' + yMouse);
    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestTask = li;
    }
  });
  return closestTask;
}
function init() {
  // let data = JSON.parse(localStorage.getItem('doneTasks'));

  // console.log(data);
  // Save the modified data back to local storage
  createlists(doneTasks, 'done');
  createlists(todoTasks, 'todo');
  createlists(inProgressTasks, 'nowdo');
}

function createlists(arr, container) {
  // console.log(container);
  arr.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('draggable', 'true');

    listItem.innerHTML = `<input type="text" placeholder="enter ur task" />
    <button class="edit-btn">
  <i class="fa-solid fa-pen-to-square"></i></button>
    <button class="del-btn">
  <i class="fa-solid fa-trash"></i>
  </button>`;
    listItem.setAttribute('id', Tracker++);
    listItem.querySelector('input').value = task;
    document.querySelector('.nowdo').appendChild(listItem);
    listItem.querySelector('.del-btn').addEventListener('click', (e) => {
      console.log(e.target.closest('.del-btn'));
      // console.log(e.target.closest('li').getAttribute('id'));

      // console.log(e.target.closest('li'));
      // button.closest('li').remove();
      // document.querySelector('.nowdo').closest('li').remove();

      if (container === 'done') {
        console.log(e.target.closest('li').querySelector('input').value);
        let selectedDeleted = e.target
          .closest('li')
          .querySelector('input').value;
        for (let i = 0; i < doneTasks.length; i++) {
          if (doneTasks[i] === selectedDeleted) {
            doneTasks.splice(i, 1);
            localStorage.setItem('doneTasks', JSON.stringify(doneTasks));
            break;
          }
        }
      } else if (container === 'nowdo') {
        console.log(e.target.closest('li').querySelector('input').value);
        let selectedDeleted = e.target
          .closest('li')
          .querySelector('input').value;
        for (let i = 0; i < inProgressTasks.length; i++) {
          if (inProgressTasks[i] === selectedDeleted) {
            inProgressTasks.splice(i, 1);
            localStorage.setItem(
              'inProgressTasks',
              JSON.stringify(inProgressTasks)
            );
            break;
          }
        }
      } else if (container === 'todo') {
        console.log(e.target.closest('li').querySelector('input').value);
        let selectedDeleted = e.target
          .closest('li')
          .querySelector('input').value;
        for (let i = 0; i < todoTasks.length; i++) {
          if (todoTasks[i] === selectedDeleted) {
            todoTasks.splice(i, 1);
            localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
            break;
          }
        }
      }
      e.target.closest('li').remove();
    });
    listItem.querySelector('.edit-btn').addEventListener('click', () => {
      listItem.querySelector('input').focus();
      txt = listItem.querySelector('input').value;
    });
    // console.log(document.querySelector(`.${container}`));
    document.querySelector(`.${container}`).appendChild(listItem);

    listItem.querySelector('input').addEventListener('focus', (e) => {
      // console.log('Input has focus');

      console.log(e.target.value);
      txt = e.target.value;
      oldValueTask = e.target.value;
      // console.log('all tasks printed in done');
    });
    listItem.querySelector('input').addEventListener('change', (e) => {
      txt = e.target.value;

      console.log(e.target.value);

      // console.log(it.closest('li').getAttribute('id'));
      //
      // loadFromLocalStorage();
      // setDone(it.closest('li').getAttribute('id'), event.target.value);
      // if(e.target.closest('ul'))
      // console.log(doneTasks);
      // foundedIndex = -1;
      // doneTasks = JSON.parse(localStorage.getItem('doneTasks'))

      //to handle the updating the local storage when edit the inputs
      if (e.target.closest('ul').className === 'todo') {
        for (let i = 0; i < todoTasks.length; i++) {
          if (todoTasks[i] === oldValueTask.trim()) {
            foundedIndex = i;
            console.log(oldValueTask);
            todoTasks[i] = e.target.value;
            todoTasks.splice(i, 1);
          }
        }
        //to handle the edit in the inputs
        if (e.target.value.trim() !== null) {
          todoTasks.push(e.target.value);
        }
      } else if (e.target.closest('ul').className === 'nowdo') {
        for (let i = 0; i < inProgressTasks.length; i++) {
          if (inProgressTasks[i] === oldValueTask.trim()) {
            foundedIndex = i;
            console.log(oldValueTask);
            inProgressTasks[i] = e.target.value;
            inProgressTasks.splice(i, 1);
          }
        }
        if (e.target.value.trim() !== null) {
          inProgressTasks.push(e.target.value);
        }
      }
      if (e.target.closest('ul').className === 'done') {
        for (let i = 0; i < doneTasks.length; i++) {
          if (doneTasks[i] === oldValueTask.trim()) {
            foundedIndex = i;
            console.log(oldValueTask);
            doneTasks[i] = e.target.value;
            doneTasks.splice(i, 1);
          }
        }
        if (e.target.value.trim() !== null) {
          doneTasks.push(e.target.value);
        }
      }
      // doneTasks.forEach((tasks) => {
      //   // console.log(tasks);
      //   if (tasks === oldValueTask.trim()) {
      //     tasks = e.target.value;
      //   }

      // console.log(doneTasks);
      window.location.reload();

      saveToLocalStorage();
    });
  });
  reload();
  localReload();
}
init();
addEventListenerAgain();
reload();
// localReload();
// arr = [1, 2, 4]
// arr.forEach(x => {
//   if (x === 2) x = 100;
// })
// console.log(arr);
