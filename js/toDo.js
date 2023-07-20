//Необходимо получить элементы со страницы

const form = document.querySelector('#form');
//console.log(form);
const taskInput = document.querySelector('#taskInput');
//console.log(taskInput);
const tasksList = document.querySelector('#tasksList');
//console.log(tasksList);
const emptyList = document.querySelector('#emptyList');
//console.log(emptyList);

//Добавляем задачу для формы

form.addEventListener('submit', addTask);

//Удаляем задачу

tasksList.addEventListener('click', deleteTask);
 

// Функцию можно вызывать в любое время, даже если функция идет ниже строчки кода в которой она вызывается

function addTask(event) {
//Метод отменяет поведение по умолчанию. Отменяет обновление страницы при отправке формы, форма не отправляется
event.preventDefault();

//Получаем текст задачи из поля для ввода
const taskText = taskInput.value
//console.log(taskText);

//Формируем разметку для задач
const taskHTML = `
    <li class="list-group-item d-flex justify-content-between task-item">
        <span class="task-title">${taskText}</span>
            <div class="task-item__buttons">
                <button type="button" data-action="done" class="btn-action">
                    <img src="./img/tick.svg" alt="Done" width="18" height="18">
                </button>
                <button type="button" data-action="delete" class="btn-action">
                    <img src="./img/cross.svg" alt="Done" width="18" height="18">
                </button>
            </div>
    </li>
`;
//console.log(taskHTML);

//Добавляем задачу на страницу
tasksList.insertAdjacentHTML('beforeend', taskHTML);

//Очищаем поле для ввода текста и назад возращаем на него фокусировку
taskInput.value = "";
taskInput.focus();

//Добавляем проверку, что если в списке задач более 1 элемента, то скрываем блок "Список дел пуст" 
    if(tasksList.children.length > 1) {
        emptyList.classList.add('none');
    }
}

function deleteTask(event) {   
    //Делаем проверку, что клик был по кнопке "удалить задачу"
    if (event.target.dataset.action ==='delete') {
        // console.log('Delete');
        const parenNode = event.target.closest('.list-group-item');
        // console.log(parenNode);
        parenNode.remove();
    }
    
    //Добавляем проверку, что если в списке дел 1 элемент, то показываем блок "Список дел пуст" 
    if(tasksList.children.length === 1) {
        emptyList.classList.remove('none');
    }
}



