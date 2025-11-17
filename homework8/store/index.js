
const incrementBtn = document.getElementById("increment-btn")
const countDisplay = document.getElementById("count-display")

let currentCount = 0

incrementBtn.addEventListener('click',() =>{
    currentCount++
    countDisplay.innerText = currentCount
})

const incrementBtn2 = document.getElementById("increment-btn2")
const countDisplay2 = document.getElementById("count-display2")

let currentCount2 = 0

incrementBtn2.addEventListener('click',() =>{
    currentCount2++
    countDisplay2.innerText = currentCount2
})
/*
console.log(React)
console.log(ReactCOM)

const reactContentRoot = document.getElementById("root")

const myFirstElement = React.createElement('ul',null,{
    React.createElement("li",null,"item1"),
    React.createElement("li",null,"item2")
}
)


const myJSXElemtn = (
    <ul>
        <li>item1</li>
        <li>item2</li>
    </ul>
)


ReactDOM.render(myFirstElement, reactContentRoot)
*/