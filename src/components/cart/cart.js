import { useState } from "react"
import "./cart.css"

function Cart(){
    const [carts,setCarts] = useState([{
        id: 1,
        name:"Analog Unisex-Adult Watch",
        image: "https://m.media-amazon.com/images/I/61FFBTzKiUL._AC_UL320_.jpg",
        quantity: 1,
        actualPrice: 800,
        totalPrice: 800
    },
    {
        id: 2,
        name:"NIBOSI Men's Watches Analog",
        image: "https://m.media-amazon.com/images/I/71FNiAazddL._AC_UL320_.jpg",
        quantity: 1,
        actualPrice: 3000,
        totalPrice: 3000
    }
])
    const[total,setTotal] = useState(carts.reduce((curr,acc)=>curr.totalPrice + acc.totalPrice));

    const ChangeQty = (id,flag) => {
        let index = carts.findIndex((ele)=>ele.id==id);
        let copiedArr = [...carts]
        if (flag == 'Add'){
            copiedArr[index].quantity += 1
        }
        else{
            copiedArr[index].quantity -= 1
        }
        copiedArr[index].totalPrice = copiedArr[index].quantity * copiedArr[index].actualPrice
        setCarts(copiedArr);        
        setTotal(copiedArr.reduce((curr,acc) => curr.totalPrice + acc.totalPrice))
    }
    return <div>
        {carts.map((ele) => <div key={ele.id} className="item">
            <img src={ele.image}/>
            <p>{ele.name}</p>
            <button onClick={() => ChangeQty(ele.id, 'Minus')} disabled = {ele.quantity>1 ? false : true}> - </button>
            <span> {ele.quantity} </span>
            <button onClick={() => ChangeQty(ele.id, 'Add')}> + </button>
            <h4>{ele.totalPrice}</h4>
            <button> X </button>
        </div>
        )}
        <h3 id="total">Total : {total}</h3>
    </div>
}
export default Cart