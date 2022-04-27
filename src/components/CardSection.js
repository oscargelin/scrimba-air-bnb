import style from "./CardSection.module.scss";
import Card from "./Card";
import swimmerImg from "../images/swimmer.png";
import data from "../data";

const CardSection = () => {
  let temp = data.map((obj) => {
    return <Card key={obj.id} obj={obj} />;
  });

  return <div className={style.cardSection}>{temp}</div>;
};
export default CardSection;
