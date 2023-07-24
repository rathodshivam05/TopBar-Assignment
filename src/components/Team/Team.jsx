import React from 'react';
import './Team.scss';
import t1 from '../../assets/images/t1.png';
import t2 from '../../assets/images/t2.png';
import t3 from '../../assets/images/t3.png';
import Linkedin from '../../assets/icons/LinkedIn.png';
import Twitter from '../../assets/icons/Twitter.png';
import Dribble from '../../assets/icons/Dribble.png';
import LeftIcon from '../../assets/icons/LeftIcon.png';
import RightIcon from '../../assets/icons/RightIcon.png';
import CONSTANTS from "../../CONSTANTS";
import useWindowSize from "../../helpers/useWindowSize";

const Team = () => {
    const team = [
        {
            name: "Full name",
            img: t1,
            desc: "For all oders over ₹999, consectetur adipim scing elit.",
        },
        {
            name: "Full name",
            img: t2,
            desc: "If goods have problems, consectetur adipim scing elit.",
        },
        {
            name: "Full name",
            img: t3,
            desc: "100% secure payment, consectetur adipim scing elit.",
        }

    ];
    const data = CONSTANTS.testimonials;

    const { width } = useWindowSize();
    const isTablet = width < CONSTANTS.tablet;

    return (
        <div className="team">
            <div>
                <p style={{ fontSize: "40px", fontWeight: "600" }}>Our Team</p>
                <p style={{ fontSize: "18px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
            </div>

            <div className="profile">

                {team?.map((item, index) => (
                    <Card data={item} key={index} />
                ))}
            </div>

            <div className="card-button">
                <button id="prev">
                    <img src={LeftIcon} alt="prev" />
                </button>
                <button id="next">
                    <img src={RightIcon} alt="next" />
                </button>
            </div>
        </div>
    )
}

export default Team;

const Card = ({ data = {} }) => {
    return (
        <div className="our-team-card">
            <img className="card-img" src={data.img} alt="person" />
            <div className="font-20">{data.name}</div>
            <div className="font-18">Job Title</div>
            <div className="font-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                varius enim in eros elementum tristique.
            </div>
            <div className="social-media-icons-container">
                <img src={Linkedin} alt="linkedin-icon" />
                <img src={Twitter} alt="twitter-icon" />
                <img src={Dribble} alt="dribble-icon" />
            </div>
        </div>

    );
};
