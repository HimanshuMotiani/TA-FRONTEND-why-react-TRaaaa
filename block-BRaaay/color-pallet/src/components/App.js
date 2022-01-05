import Color from './Color'
import Colors from "../colors.json"
function App() {
    
    return (
        <>
        {Object.keys(Colors).map((col)=>(
         <Color key={col} name={col} arrColors={Colors[col]} />
        ))}
        </>
    )
}

export default App