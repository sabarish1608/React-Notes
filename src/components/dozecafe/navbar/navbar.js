import "./navbar.css"
function NavBar(){
    return <>
    <div className="split">
        <div className="txt_flex">
            <span className="dozecafe_txt">Doze</span><span className="dozecafe_txt">Cafe</span>
        </div>
        <div className="split">
            <span>HOME</span>
            <span>ABOUT</span>
            <span>COFFEES</span>
            <span>SHOP</span>
            <span>BLOG</span>
            <span>CONTACT</span>
        </div>
        <div>
            <span>LOGIN</span>
        </div>
    </div>
    </>
}
export default NavBar