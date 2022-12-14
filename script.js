const main = document.createElement('main');
const body = document.getElementsByTagName('body')[0];
body.appendChild(main);
const sectionInputBtnAddTask = document.createElement('section');
sectionInputBtnAddTask.id = 'sectionInputBtn';
main.appendChild(sectionInputBtnAddTask);
const inputTaskText = document.createElement('input');
inputTaskText.id = 'task-text';
inputTaskText.placeholder = ' Digite aqui sua tarefa';
sectionInputBtnAddTask.appendChild(inputTaskText);

const sectionOl = document.createElement('section');
sectionOl.id = 'sectionOl';
main.appendChild(sectionOl);
const ol = document.createElement('ol');
sectionOl.append(ol);

const sectionBtn = document.createElement('section');
sectionBtn.id = 'sectionBtn';
const btnSaveList = document.createElement('button');
btnSaveList.innerText = 'Salvar lista';
btnSaveList.className = 'buttons';
sectionBtn.appendChild(btnSaveList);
function setTasks() {
  localStorage.setItem(ol, JSON.stringify(ol.innerHTML));
}
btnSaveList.addEventListener('click', setTasks);

const btnAddTask = document.createElement('button');
btnAddTask.id = 'create-task';
btnAddTask.className = 'buttons';
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
    list[i].style.backgroundColor = '';
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
btnClean.className = 'buttons';
sectionBtn.appendChild(btnClean);

function removeList() {
  ol.innerText = '';
}
btnClean.addEventListener('click', removeList);

const btnCleanCompleted = document.createElement('button');
btnCleanCompleted.innerText = 'Excluir tarefas conclu??das';
btnCleanCompleted.className = 'buttons';
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
btnRemoveSelected.innerText = 'Excluir tarefa selecionada';
btnRemoveSelected.className = 'buttons';
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

const header = document.getElementsByTagName('header')[0];
const div1 = document.createElement('div');
div1.id = 'all-contente';
body.appendChild(div1);
div1.appendChild(header);
div1.appendChild(main);

const btnTaskEditor = document.createElement('button');
btnTaskEditor.className = 'buttons';
btnTaskEditor.innerText = 'Editar tarefa';
sectionBtn.appendChild(btnTaskEditor);

const inputValue = document.getElementById('task-text');
function taskEditor(event) {
  let liText;
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].style.backgroundColor === 'gray') {
      liText = list[i].innerText;
      ol.removeChild(list[i]);
    }
  } 
  if (liText === undefined) {
    return alert('Nenhuma tarefa foi selecionada.');
   }
  inputValue.value = liText;
}

btnTaskEditor.addEventListener('click', taskEditor);

const sectionOperation = document.createElement('section');
sectionOperation.id = 'section-operation';
main.appendChild(sectionOperation);
const paragrafo1 = document.createElement('p');
paragrafo1.innerText = 'Clique uma vez em um ??tem para selecion??-lo.'
sectionOperation.appendChild(paragrafo1);
const paragrafo2 = document.createElement('p');
paragrafo2.innerText = 'Clique duas vezes em um ??tem para marc??-lo como completo.'
sectionOperation.appendChild(paragrafo2);