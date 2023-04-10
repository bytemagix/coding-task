import PropTypes from "prop-types";
import styles from "./BrandA.module.scss";
import { dummyData } from "../../data/dummy";
import Button from "../Button/Button";
import Card from "../Card/Card";

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
  return (
    <Card backgroundColor={componentBackground} textColor={textColor}>
      <div className={styles["box"]}>
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
        <div className={styles["descriptions"]}>
          <div
            className={styles["description"]}
            style={{ backgroundColor: `${textBoxBackground}` }}
          >
            <p>{description}</p>
          </div>
          <div className={styles["actions"]}>
            <Button
              title={ctaPrimary}
              variant="primary"
              backgroundColor="#d2b99b"
              borderColor="#d2b99b"
              textColor="#FFFFFF"
            />
            <Button
              title={ctaSecondary}
              variant="secondary"
              backgroundColor="#FFFFFF"
              borderColor="#d2b99b"
              textColor="#d2b99b"
            />
          </div>
        </div>
      </div>
    </Card>
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
