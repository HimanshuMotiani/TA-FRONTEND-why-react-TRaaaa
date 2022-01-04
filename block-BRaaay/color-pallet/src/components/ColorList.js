function ColorList(props) {
    console.log(props);
 return (
    <>
            <div className="each-box">
              <div className="box" style={{backgroundColor : props.diffColor}}></div>
              <div className="flex type">
                <p>{props.colorNumber}</p>
                <h4>{props.diffColor}</h4>
              </div>
            </div>
    </>
 )
}
 export default ColorList;