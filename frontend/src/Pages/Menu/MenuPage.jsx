import React, { useState } from "react";
import { data } from "../../restApi.json";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Breakfast", "Lunch", "Dinner"];

  const filteredDishes =
    activeCategory === "All"
      ? data[0].dishes
      : data[0].dishes.filter((dish) => dish.category === activeCategory);

  return (
    <section className="menuPage">
      <Navbar />
      <div className="menuPage_hero">
        <h1 className="heading">OUR MENU</h1>
        <p>Discover our carefully crafted dishes made with the finest ingredients</p>
      </div>

      <div className="menuPage_content">
        <div className="menuPage_filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter_btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menuPage_grid">
          {filteredDishes.map((dish) => (
            <div className="menuPage_card" key={dish.id}>
              <div className="menuPage_card_img">
                <img src={dish.image} alt={dish.title} />
                <span className="menuPage_badge">{dish.category}</span>
              </div>
              <div className="menuPage_card_body">
                <div className="menuPage_card_header">
                  <h3>{dish.title}</h3>
                  <span className="menuPage_price">{dish.price}</span>
                </div>
                <p>{dish.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="menuPage_back">
          <Link to="/">
            <HiOutlineArrowLeft /> Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default MenuPage;
