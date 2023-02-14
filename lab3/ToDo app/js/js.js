document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <div class="tick" onclick=ticking(this.querySelector('.check')) ><i class="check">✔</i></div>
                <span class="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete" onclick=deleting(this)>
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
        document.querySelector('#newtask input').value = ''

    }
}
function ticking(tick){
    if(tick.style.color === 'black'){
        tick.style.color = 'white'
        tick.parentNode.parentNode.querySelector('.taskname').style.textDecoration = 'none'
    }else {
        tick.style.color = 'black'
        tick.parentNode.parentNode.querySelector('.taskname').style.textDecoration = 'line-through'
    }
}

function deleting(ddd){
    ddd.parentNode.remove();
}