const Item = ({item}) =>{
    return(
        <div className = "item">
            {/* <p>{item.id}</p> */}
            <h3>{item.description}</h3>
            <p>Transaction Amount: ${item.amount} </p>
            <p>Date of Transaction: {item.date.substring(0,10)}</p>

        </div>
    )

}

export default Item