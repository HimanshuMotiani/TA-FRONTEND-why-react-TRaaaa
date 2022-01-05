import Button from './Button';
import {buttonSizes, buttonTypes} from '../buttonInfo';
export default function App(){
    return(
        <div className="app">
            
        <Button label="button" size= {buttonSizes.MEDIUM} type={buttonTypes.SECONDARY}/>
        <Button label="button" size={buttonSizes.SMALL} type={buttonTypes.PRIMARY}/>
        <Button label="button" size={buttonSizes.LARGE} type={buttonTypes.TERTIARY}/>
        <Button label="button" onClickHandler={()=>{alert('You just clikced!')}} />
        <Button label="button" disabled/>
        </div>
    )
}