/** @format */

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact } from "react-icons/fa";
import { TbBrandFlutter } from "react-icons/tb";
import { ScrollToTop } from "../components/ScrollToTop";

const Experiance = () => {
  return (
    <>
      <div className='wrapper'>
        <h1>Experiance</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='2023 - 2024'
            iconStyle={{ background: "#222831", color: "#fff" }}
            icon={<FaReact />}>
            <h3 className='vertical-timeline-element-title'>PT.Rectmedia</h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Frontend Developer
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='2022 - 2023'
            iconStyle={{ background: "#222831", color: "#fff" }}
            icon={<TbBrandFlutter />}>
            <h3 className='vertical-timeline-element-title'>
              PT. Indexim Coalindo
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Mobile App Developer
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <ScrollToTop />
    </>
  );
};
export default Experiance;
