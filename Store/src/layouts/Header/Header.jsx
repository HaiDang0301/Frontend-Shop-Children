import cart from "../../assets/cart.png";
import { Link } from "react-router-dom";
import classnames from "classnames/bind";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import PropsItem from "../PropsItem/Props";
const cx = classnames.bind(styles);
function Header() {
  const array = [1, 2, 4];
  const [product, setProduct] = useState([array]);
  const [sum, setSum] = useState();
  useEffect(() => {
    product.map((arr) => {
      setSum(arr.length);
    });
  }, [array]);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("nav")}>
        <div className={cx("nav-top")}>
          <div className={cx("nav-info")}>
            <div className={cx("title-info")}>
              <nav className={cx("phone-info")}>
                <label htmlFor="phone">Call Us: +1 213 974-5898</label>
              </nav>
              <nav className={cx("email-info")}>
                <label htmlFor="email">Email: </label>
                <Link to="#"> toystore@template.com</Link>
              </nav>
            </div>
            <div className={cx("nav-top-social")}>
              <PropsItem
                items={[
                  {
                    img: "https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec5227792568635e37_twitter-icon-white.svg",
                    link: "/",
                  },
                  {
                    img: "https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec3cb36463d4cf4661_facebook-icon-white.svg",
                    link: "/",
                  },
                  {
                    img: "https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec7fe624275552217c_instagram-icon-white.svg",
                    link: "/",
                  },
                  {
                    img: "https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec6e93377c0bbdba8a_pinterest-icon-white.svg",
                    link: "/",
                  },
                  {
                    img: "https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eecfff242b7c309e311_youtube-icon.svg",
                    link: "/",
                  },
                ]}
              ></PropsItem>
            </div>
          </div>
        </div>
        <div className={cx("nav-bottom")}>
          <div className={cx("nav-main")}>
            <div className={cx("logo")}>
              <Link to="/">
                <h2>Store</h2>
              </Link>
            </div>
            <div className={cx("navigation")}>
              <Link to="/catalog">
                <h5>Catalog</h5>
              </Link>
              <Link to="">
                <h5>Delivery</h5>
              </Link>
              <Link to="">
                <h5>About</h5>
              </Link>
              <Link to="">
                <h5>Contacts</h5>
              </Link>
            </div>
            <div className={cx("cart")}>
              <Link to="">
                <img src={cart} alt="" />
              </Link>
              <div className={cx("sum-products")}>
                <Link to="">{sum}</Link>
              </div>
              <div className={cx("menu")}>
                <Link to="">
                  <img
                    src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/1x/external-menu-web-flaticons-lineal-color-flat-icons.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
