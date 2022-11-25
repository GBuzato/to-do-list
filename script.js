const main = document.createElement('main');
const body = document.getElementsByTagName('body')[0];
body.appendChild(main);
const sectionInputBtnAddTask = document.createElement('section');
sectionInputBtnAddTask.id = 'sectionInputBtn';
main.appendChild(sectionInputBtnAddTask);
const inputTaskText = document.createElement('input');
inputTaskText.id = 'task-text';
sectionInputBtnAddTask.appendChild(inputTaskText);

const sectionOl = document.createElement('section');
sectionOl.id = 'sectionOl';
main.appendChild(sectionOl);
const ol = document.createElement('ol');
sectionOl.append(ol);

const sectionBtn = document.createElement('section');
const btnSaveList = document.createElement('button');
btnSaveList.innerText = 'Salvar lista';
sectionBtn.appendChild(btnSaveList);
function setTasks() {
  localStorage.setItem(ol, JSON.stringify(ol.innerHTML));
}
btnSaveList.addEventListener('click', setTasks);

const btnAddTask = document.createElement('button');
btnAddTask.id = 'create-task';
btnAddTask.innerText = 'Criar tarefa';
sectionInputBtnAddTask.appendChild(btnAddTask);

function createList() {
 const valueInput = inputTaskText.value;
 if (inputTaskText.value === '') {
  alert('Digite uma tarefa!');
 } else {
  const li = document.createElement('li');
  li.innerText = valueInput;
  ol.appendChild(li);
  inputTaskText.value = '';
 }
}
btnAddTask.addEventListener('click', createList);

const list = document.getElementsByTagName('li');
function changeBackgroundColorLi(event) {
  const li = event.target;
  for (let i = 0; i < list.length; i += 1) {
    list[i].style.backgroundColor = 'white';
  }
  li.style.backgroundColor = 'gray';
}
ol.addEventListener('click', changeBackgroundColorLi);

function addClassCompleted(event) {
  const li = event.target;
  if (li.className === 'completed') {
    li.className = '';
  } else {
    li.className = 'completed';
  }
}
ol.addEventListener('dblclick', addClassCompleted);


main.appendChild(sectionBtn);
const btnClean = document.createElement('button');
btnClean.innerText = 'Excluir lista';
sectionBtn.appendChild(btnClean);

function removeList() {
  ol.innerText = '';
}
btnClean.addEventListener('click', removeList);

const btnCleanCompleted = document.createElement('button');
btnCleanCompleted.innerText = 'Excluir tarefas concluídas';
sectionBtn.appendChild(btnCleanCompleted);

function removeTasksCompleted() {
  const classCompleted = document.getElementsByClassName('completed');
  for (let i = 0; i < classCompleted.length; i += 1) {
    ol.removeChild(classCompleted[i]);
  }
  for (let idx = 0; idx < classCompleted.length; idx += 1) {
    ol.removeChild(classCompleted[idx]);
  }
}
btnCleanCompleted.addEventListener('click', removeTasksCompleted);

function getTasks() {
  const localStorageValue = JSON.parse(localStorage.getItem(ol));
  ol.innerHTML = localStorageValue;
};

const btnRemoveSelected = document.createElement('button');
btnRemoveSelected.id = 'remove-selected';
btnRemoveSelected.innerText = 'Excluir selecionado';
sectionBtn.appendChild(btnRemoveSelected);

function removeSelected() {
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].style.backgroundColor === 'gray') {
      ol.removeChild(list[i]);
    }
  }
}
btnRemoveSelected.addEventListener('click', removeSelected);

window.onload = () => {
  getTasks();
}