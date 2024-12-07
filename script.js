var array = JSON.parse(localStorage.getItem('books')) ||[]
function enter(){
    if(space.value === '' || time.value === ''){
    warning.style.display = 'block'
    }
    else{
    warning.style.display = 'none'
    var info = {
        things: space.value,
        when: time.value
    };
    
        array.push(info)
        console.log(array);
        storage()
        show()
    }
}

function show(){
    display.innerHTML = ''
    display.innerHTML = `<p class = "fs-3 fst-italic text-center border-bottom border-3 border-dark">To-Do List...</p>`
    space.value = ''
    time.value = ''
    for(i=0; i<array.length; i++){
        display.innerHTML += `<p class="fs-4"> . ${array[i].things} -->  ${array[i].when}</p>`
}
}
function storage(){
    localStorage.setItem('books', JSON.stringify(array))
}