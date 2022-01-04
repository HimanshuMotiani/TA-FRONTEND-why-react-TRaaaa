import {buttonSizes, buttonTypes} from '../buttonInfo';
function Button(props) {
    console.log(props)
    let {type=buttonTypes.PRIMARY, size=buttonSizes.MEDIUM} = props;
    function getStyles(){
        return `button button-${size} button-${type}`
    }
    return(
        <button className={getStyles()} disabled={props.disabled} onClick={props.onClickHandler}>{props.label}</button>
    )
}
export default Button;