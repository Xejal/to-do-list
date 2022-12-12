const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const buttonAdd = document.querySelector('.todoss')
const todoContainer = document.querySelector('#todoContainer');

// buttonAdd.addEventListener('click', () => {
//     let paraqrafh = document.createElement('p')
//     todoContainer.appendChild(paraqrafh)
//     paraqrafh.innerHTML = textInput.value
//     console.log(paraqrafh)
// })

addForm.addEventListener('click', (e) => {
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length != 0){
        generateTemplate(todo);
        addForm.reset();
    }else{
        // alert('metn daxil et');
    }
});

const generateTemplate = (todo) => {
    const html = `<li class='list-group-item d-flex justify-content-between align-items-center'>
        <span>${todo}</span>
        <i class="fa fa-trash-o delete"></i>
    </li>`;
    list.innerHTML += html;
}

list.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})