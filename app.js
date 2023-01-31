let input = document.querySelector('.text');
let addbtn = document.querySelector('.add');
let tasks = document.querySelector('.task');

input.addEventListener('keyup', () => {
  if (input.value.trim() != 0) {
    addbtn.classList.add('active')
  }
  else{
    addbtn.classList.remove('active')
  }
})
addbtn.addEventListener('click',() =>{
    if(input.value.trim() != 0){
    let newitem=document.createElement('div');
    newitem.classList.add('item');
    newitem.innerHTML=`
    <p> ${input.value} </p>
            <div class="itembtn">
                <i class="fa-solid fa-pen"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
   `
tasks.appendChild(newitem);
input.value='';
    }
    else{
        alert('enter a task please..')
    }
})
tasks.addEventListener('click',(e) => {
    if(e.target.classList.contains('fa-trash')){
        e.target.parentElement.parentElement.remove();
    } 
})
tasks.addEventListener('click',(e) => {
    if(e.target.classList.contains('fa-pen')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    } 
})
