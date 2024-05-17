/** @format */

import "../styles/portfolio.css";
import { portfolioList } from "../data/DataPortfolio";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='wrapper'>
        <h3>Portfolio</h3>
        <div className='grid'>
          {portfolioList.map((item) => {
            return (
              <div className='item' key={item.id}>
                <Link to={`/portfolio/${item.id}`}>
                  <img src={item.image} alt={item.id} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
