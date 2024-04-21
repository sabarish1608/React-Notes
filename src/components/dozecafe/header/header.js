import "./header.css"
import bg from "../../../assets/images/banner-img.png"
function Header(){
    return <div>
        <div className="img_div">
            <div className="coffee-img">
                <img src={bg}/>
            </div>
            <div>
                <p className="coffee-des">Tasty of DozeCafe</p>
                <p className="coffee-des2">more-or-less normal distribution of letters, as opposed to using</p>
                <button className="btn1">About Us</button>
                <button className="btn2">Call Now</button>
            </div>
        </div>
    </div>
}
export default Header