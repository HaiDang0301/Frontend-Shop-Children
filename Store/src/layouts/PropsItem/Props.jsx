import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Props.module.scss";
const cx = classNames.bind(styles);
function PropsItem(props) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("items")}>
        {props.items.map((item, index) => (
          <div className={cx("item")} key={index}>
            <Link to={item.link}>
              <img src={item.img} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropsItem;
