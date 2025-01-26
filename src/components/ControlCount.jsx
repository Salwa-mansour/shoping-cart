import '../styles/controlCount.css'

function ControlCount({item,incrementItemCount,decrementItemCount,reSetItemCount}){
    return(
    <div className="control-count">
        <button onClick={()=>decrementItemCount(item)} > ➖</button>
        <input type="number" onChange={(e)=>reSetItemCount(item,e.target.value)}  value={item.count} />
        <button onClick={()=>incrementItemCount(item)}>➕</button>
    </div>
    );
}

export default ControlCount