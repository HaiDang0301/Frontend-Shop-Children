import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import PropsItems from "../../../props/PropsHome/PropsHome";
const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("banner")}>
          <img
            src="https://assets.website-files.com/5badda2935e11303a89a461e/5baddd4835e113c6299a48f5_li-tzuni-507346-unsplash.jpg"
            alt=""
          />
        </div>
        <div className={cx("category")}>
          <div className={cx("category-main")}>
            <div className={cx("animals")}>
              <div className={cx("img")}>
                <img
                  src="https://assets.website-files.com/5badda2935e11303a89a461e/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min-p-500.png"
                  alt=""
                />
              </div>
              <div className={cx("main")}>
                <nav className={cx("nav-link")}>
                  <div className={cx("title")}>
                    <h4>Stuffed Animals</h4>
                  </div>
                  <div className={cx("button")}>
                    <Link to="">Shop now</Link>
                  </div>
                </nav>
              </div>
            </div>
            <div className={cx("wooden")}>
              <div className={cx("main-wooden")}>
                <div className={cx("nav-wooden")}>
                  <nav className={cx("nav-link-wooden")}>
                    <div className={cx("title-wooden")}>
                      <h4>Wooden Animals</h4>
                    </div>
                    <div className={cx("btn")}>
                      <div className={cx("button-wooden")}>
                        <Link to="">Shop now</Link>
                      </div>
                    </div>
                  </nav>
                  <div className={cx("img-wooden")}>
                    <img
                      src="https://assets.website-files.com/5badda2935e11303a89a461e/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min-p-500.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PropsItems
          title="Stuffed Animals"
          category="Stuffed Animals"
          link="/catalog/category/stuffed-animals"
        ></PropsItems>
        <PropsItems
          title="Wooden Toys"
          category="Wooden Toys"
          link="/catalog/category/wooden-toys"
        ></PropsItems>
      </div>
    </div>
  );
}

export default Home;
