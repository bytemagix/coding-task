import PropTypes from "prop-types";
import styles from "./BrandA.module.scss";
import { dummyData } from "../../data/dummy";

export const BrandA = ({
  title,
  subTitle,
  description,
  ctaPrimary,
  ctaSecondary,
  titleUnderline,
  componentBackground,
  textBoxBackground,
  textColor,
}) => {
  console.log(componentBackground);
  return (
    <div
      className={styles["card"]}
      style={{
        backgroundColor: `${componentBackground}`,
        color: `${textColor}`,
      }}
    >
      <div className={styles["header"]}>
        <h1
          className={
            styles[titleUnderline ? "title__underline" : "title__nounderline"]
          }
        >
          {title}
        </h1>
        <p>{subTitle}</p>
      </div>
      <div
        className={styles["text-box"]}
        style={{ backgroundColor: `${textBoxBackground}` }}
      >
        <p>{description}</p>
        <div className={styles["actions"]}>
          <button className={styles["cta__primary"]}>{ctaPrimary}</button>
          <button className={styles["cta__secondary"]}>{ctaSecondary}</button>
        </div>
      </div>
    </div>
  );
};

BrandA.propTypes = {
  title: PropTypes.string,
  titleUnderline: PropTypes.bool,
};

BrandA.defaultProps = {
  title: dummyData.title,
  subTitle: dummyData.subTitle,
  description: dummyData.description,
  ctaPrimary: dummyData.ctaLinks[0].text,
  ctaSecondary: dummyData.ctaLinks[1].text,
  titleUnderline: true,
};

export default BrandA;
