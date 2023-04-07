import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Catalog.module.scss";
import { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
const cx = classNames.bind(styles);
const baseURL = "http://localhost:5050/products";
function CataLog({ children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("header")}>
          <nav className={cx("nav-catalog")}>
            <div className={cx("main-catalog")}>
              <div className={cx("title")}>
                <Link to="/">Home</Link>
              </div>
              <div className={cx("img")}>
                <img
                  src="https://img.icons8.com/ios-glyphs/1x/arrow.png"
                  alt=""
                />
              </div>
              <div className={cx("catalog")}>Catalog</div>
            </div>
          </nav>
        </div>
        <div className={cx("main")}>
          <div className={cx("nav-main")}>
            <div className={cx("search")}>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Enter your keyword"
              />
            </div>
            <div className={cx("btn-search")}>
              <button>Search</button>
            </div>
            <div className={cx("sort")}>
              <div className={cx("quick-sort")}>Sort</div>
              <div className={cx("select")}>
                <select name="" id="">
                  <option value="">Action</option>
                  <option value="">Sort Default</option>
                  <option value="">New Products</option>
                  <option value="">Price from low to high</option>
                  <option value="">Price from high to low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("product")}>
          <nav className={cx("title-name")}>
            <div className={cx("title")}>
              <h4 htmlFor="">All Toys</h4>
            </div>
            <div className={cx("category")}>
              <div className={cx("all-toys")}>
                <Link to="/catalog">All toys</Link>
              </div>
              <div className={cx("wooden-toy")}>
                <Link to="/catalog/category/wooden-toys">Wooden Toys</Link>
              </div>
              <div className={cx("stuffed-animals")}>
                <Link to="/catalog/category/stuffed-animals">
                  Stuffed Animals
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default CataLog;
