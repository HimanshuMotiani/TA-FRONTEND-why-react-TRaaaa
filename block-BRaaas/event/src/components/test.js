import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
        <>
        <button onClick={()=>handleClickName("Arya")}>Arya</button> 
        <button onClick={()=>handleClickName("John")}>John</button> 
        <button onClick={()=>handleClickName("Bran")}>Bran</button> 
        </>
    );
  }
}
