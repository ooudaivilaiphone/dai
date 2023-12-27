let y=0
let x=0
const box = document.getElementById('box')

function move(direction){
    switch (direction){
        case 'up':
            y -= 10
            break
        case 'down':
            y += 10
            break  
        case 'left':
            x -=10
            break   
        case 'right':
            x +=10
            break          

    }
    box.style.top = y + 'px'
    box.style.left = x + 'px'
}

document.addEventListener('keydown',(event)=>{
    const keyName = event.key
    switch (keyName){
        case 'w':
            move('up')
            break
        case 's':
            move('down')
            break
        case 'a':
            move('left')
            break
        case 'd':
            move('right')
            break 
    }
})