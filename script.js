var array = JSON.parse(localStorage.getItem('books')) ||[]
function enter(){
    if(space.value == ''){
    warning.style.display = 'block'
    }
    else{
    warning.style.display = 'none'
        array.push(space.value)
        console.log(array);
        storage()
        show()
    }
}

function show(){
    display.innerHTML = ''
    display.innerHTML = `<p class = "fs-3 fst-italic text-center border-bottom border-3 border-dark">Movies to watch</p>`
    space.value = ''
    for(i=0; i<array.length; i++){
    display.innerHTML += `<p class = "fs-3">- ${array[i]} <input type="checkbox" class = "form-check-input bg-info border border-dark"> </p>`
}
}

function deleteBook(){
var del = prompt('what number do you want to delete') 
var index = array.indexOf(del)-1
    array.splice(index,1)
    storage()
    show()
}

function storage(){
    localStorage.setItem('books', JSON.stringify(array))
}