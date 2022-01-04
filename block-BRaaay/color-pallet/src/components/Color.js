import ColorList from './ColorList';
function Color(props) {
    let colorNumber = [50,100,200,300,400,500,600,700,800,900];
    return (
        <>
            <section className="container">
                <div className="flex flex-start margin">
                    <div className="flex-15">
                        <h2>{props.name}</h2>
                        <h3 className="detail">colors.{props.name}</h3>
                    </div>
                    <div className="flex justify-content flex-80 flex-wrap">
                        {props.arrColors.map((item,index) => (
                            <ColorList key={item} diffColor={item} colorNumber={colorNumber[index]} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )

}

export default Color