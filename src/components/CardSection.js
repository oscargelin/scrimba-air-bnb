import style from "./CardSection.module.scss";
import Card from "./Card";
import swimmerImg from "../images/swimmer.png";

const CardSection = () => {
  return (
    <div className={style.cardSection}>
      <Card
        img={swimmerImg}
        btnText="Sold out"
        stars="5.0"
        tickets="6"
        person={{ name: "Katie", nationality: "USA" }}
        title="Life lessons with Katie"
        price="$136"
      />
      <Card
        img={swimmerImg}
        btnText="Sold out"
        stars="5.0"
        tickets="6"
        person={{ name: "Katie", nationality: "USA" }}
        title="Life lessons with Katie"
        price="$136"
      />
    </div>
  );
};
export default CardSection;
