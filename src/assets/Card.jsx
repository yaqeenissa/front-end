import Phashine from "../images/29.jpg";
import "../styles/card.css"
function Card(){

    return (
      <div className="card">
        <img alt="logo" src={Phashine} />
        <div className=" name-of-item"> jacet - gray - butu</div>
        <p className="price"> ₪ 200</p>
      </div>
    );
}

export default Card;