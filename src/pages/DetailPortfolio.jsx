/** @format */

import { useParams, Navigate } from "react-router-dom";
import "../styles/DetailPortfolio.css";
import { portfolioList } from "../data/DataPortfolio";
import { ScrollToTop } from "../components/ScrollToTop";

const DetailPortfolio = () => {
  const { id } = useParams();
  const data = portfolioList.find((item) => item.id === id);
  if (data == undefined) {
    return <Navigate to='/not-found' />;
  }
  return (
    <section id='detail-portfolio'>
      <div className='wrapper'>
        <h1>{data.title}</h1>
        <img src={data.image} />
        <p className='skill'>Skills : {data.skill}</p>
      </div>
      <ScrollToTop />
    </section>
  );
};

export default DetailPortfolio;
