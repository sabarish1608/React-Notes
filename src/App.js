import logo from './logo.svg';
import './App.css';
import Card from './components/props/props';
import StateExample from './components/state/state';
import Cart from './components/cart/cart';
import DozeCafe from './components/dozecafe/webpage/dozecafe';
import CartPrac from './components/cart/cart_practice';
import Demo from './components/classComponent/demo';
import Form from './components/fullstack/fullstack';

// let data = [
//   {
//     id:1,
//     title:"Chest",
//     description:"Build yourself",
//     image:"https://t4.ftcdn.net/jpg/03/17/72/47/240_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg"
//   },
//   {
//     id:2,
//     title:"Biceps",
//     description:"Work hard",
//     image:"https://t3.ftcdn.net/jpg/00/93/55/88/240_F_93558844_zsJSg3nGtgXX0HSToxWJeBjEt1OIyTHo.jpg"
//   },
//   {
//     id:3,
//     title:"Lats",
//     description:"Find yourself",
//     image:"https://static.vecteezy.com/system/resources/thumbnails/026/781/389/small/gym-interior-background-of-dumbbells-on-rack-in-fitness-and-workout-room-photo.jpg"
//   },
//   {
//     id:4,
//     title:"Shoulder",
//     description:"Be better",
//     image:"https://t4.ftcdn.net/jpg/04/07/45/29/240_F_407452902_HxULtJOZKvpLa0VSyW5ffFdOr2mXXb8f.jpg"
//   }
// ]

function App() {
  // return <div id='parent'>
  //   {/* <Card title="Chest" description="Build yourself" image="https://t4.ftcdn.net/jpg/03/17/72/47/240_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg"/>
  //   <Card title="Biceps" description="Work hard" image="https://t3.ftcdn.net/jpg/00/93/55/88/240_F_93558844_zsJSg3nGtgXX0HSToxWJeBjEt1OIyTHo.jpg"/>
  //   <Card title="Lats" description="Find yourself" image="https://static.vecteezy.com/system/resources/thumbnails/026/781/389/small/gym-interior-background-of-dumbbells-on-rack-in-fitness-and-workout-room-photo.jpg"/>
  //   <Card title="Shoulder" description="Be better" image="https://t4.ftcdn.net/jpg/04/07/45/29/240_F_407452902_HxULtJOZKvpLa0VSyW5ffFdOr2mXXb8f.jpg"/> */}
  //   {
  //     // data.map(ele => <Card id={ele.id} title={ele.title} description={ele.description} image={ele.image}></Card>)
  //   }
    
  // </div>
  
  // return <StateExample/>

  // return <Cart/>
  // return <CartPrac/>

  // return <DozeCafe/>

  // return <Demo title="Sabarish"/>

  return <Form/>
}
export default App;
