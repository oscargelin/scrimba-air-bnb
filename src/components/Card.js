import style from "./Card.module.scss";
import star from "../images/star.png";

const Card = (props) => {
  const {
    id,
    title,
    description,
    price,
    coverImg,
    stats,
    location,
    openSpots,
  } = props.obj;

  let btnText;
  if (openSpots <= 0) {
    btnText = "Sold out";
  } else if (location === "Online") {
    btnText = "Online";
  }

  let arr = [];
  for (let i = 0; i < stats.rating; i++) {
    arr[i] = <img src={star} key={i} />;
  }

  // Fixade buggen som visade paddingen på btn som inte hade något content
  let test;
  if (location !== "Norway") {
    test = <div className={style.btn}>{btnText}</div>;
  } else {
    test = <div></div>;
  }

  console.log(coverImg);

  return (
    <div className={style.card}>
      <img src={coverImg} className={style.mainImg} />
      {test}
      <div className={style.textSection}>
        <div className={style.firstRow}>
          {arr}
          <p>
            ({stats.reviewCount}) - {location}{" "}
          </p>
        </div>
        <p>{title}</p>
        <p>From {price} / person</p>
      </div>
    </div>
  );
};
export default Card;
