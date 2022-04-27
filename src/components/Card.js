import style from "./Card.module.scss";
import star from "../images/star.png";

//TRÄNGA PÅ PROPS - andra appen också.

const Card = (props) => {
  return (
    <div className={style.card}>
      <img src={props.img} className={style.mainImg} />
      <div className={style.btn}>
        <p>{props.btnText}</p>
      </div>
      <div className={style.textSection}>
        <div className={style.firstRow}>
          <img src={star} />
          <p>
            {props.stars}{" "}
            <span>
              ({props.tickets}) - {props.person.nationality}{" "}
            </span>
          </p>
        </div>
        <p>{props.title}</p>
        <p>From {props.price} / person</p>
      </div>
    </div>
  );
};
export default Card;
