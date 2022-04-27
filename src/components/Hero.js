import style from "./Hero.module.scss";
import heroImg from "../images/hero.png";
const Hero = () => {
  return (
    <div className={style.heroContainer}>
      <div className={style.imgContainer}>
        <img src={heroImg} />
      </div>
      <h2>Online experiences</h2>
      <p>
        join a unique asdks skdamksdmksa dmksadmksdmks dsamkdsmak
        dmskadmksamdkasdmk dsamdsmakdamsk mdksamdkas dmksadmksa.
      </p>
    </div>
  );
};
export default Hero;
