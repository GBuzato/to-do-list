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
