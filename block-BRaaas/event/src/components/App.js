function App() {
    let fruits = [
        { id: 'apple', value: '🍎 apple' },
        { id: 'orange', value: '🍊 orange' },
        { id: 'grape', value: '🍇 grape' },
        { id: 'pear', value: '🍐 pear' },
      ];
    return (
        <>
           <button onClick={handleClick}>Click Me</button>
           <button onClick={handleClickTwo}>How can I help you?</button> 
           <button onClick={()=>handleClickName("Arya")}>Arya</button> 
           <button onClick={()=>handleClickName("John")}>John</button> 
           <button onClick={()=>handleClickName("Bran")}>Bran</button> 
           {
               fruits.map((fruit)=> (
                <button key={fruit.id} onClick={()=>handleClickFruit(fruit.value)}>{fruit.value}</button>
               ))
           }
        </>
    );
}


function handleClick() {
    alert(`Hello React Event`)
}

function handleClickTwo() {
    alert(`To learn React use https://reactjs.org
    - React and ReactDOM works together
    - Babel helps in writing JSX`)
}

function handleClickName(name) {
    alert(`Hello ${name}`)
}

function handleClickFruit(name) {
    alert(`${name}`)
}


export default App;