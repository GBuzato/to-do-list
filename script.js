const main = document.createElement('main');
const body = document.getElementsByTagName('body')[0];
body.appendChild(main);
const sectionInputBtnAddTask = document.createElement('section');
main.appendChild(sectionInputBtnAddTask);
const inputTaskText = document.createElement('input');
inputTaskText.id = 'task-text';
sectionInputBtnAddTask.appendChild(inputTaskText);

const sectionOl = document.createElement('section');
main.appendChild(sectionOl);
const ol = document.createElement('ol');
sectionOl.append(ol);

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