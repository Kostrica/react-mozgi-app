import React from "react";

import "./Logo.scss";

const Logo = () => (
  <svg className="logo" style={{ padding: 24 }} width="83" height="46" viewBox="0 0 69 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="100%" gradientUnits="userSpaceOnUse" >
        <stop offset="0%">
          <animate attributeName="stop-color" attributeType="XML" values="white;black" keyTimes= "0;1" dur="6s" />
        </stop>
        <stop offset="20%">
          <animate attributeName="stop-color" attributeType="XML" values="white;black" keyTimes= "0;1" dur="5s" />
        </stop>
        <stop offset="40%">
          <animate attributeName="stop-color" attributeType="XML" values="white;black" keyTimes= "0;1" dur="4s" />
        </stop>
        <stop offset="60%">
          <animate attributeName="stop-color" attributeType="XML" values="white;black" keyTimes= "0;1" dur="3s" />
        </stop>
        <stop offset="80%">
          <animate attributeName="stop-color" attributeType="XML" values="white;black" keyTimes= "0;1" dur="2s" />
        </stop>
        <stop offset="100%">
          <animate attributeName="stop-color" attributeType="XML" values="white;black" keyTimes= "0;1" dur="1s" />
        </stop>
      </linearGradient>
    </defs>
    <path stroke="black" strokeWidth={0.75} fillRule="evenodd" clipRule="evenodd" d="M23.4 5.05864L30.0157 3.93993V26.6883L23.4 25.5695V5.05864ZM20.5771 2.23755V28.3908L32.8385 30.6282V0L20.5771 2.23755ZM44.6615 5.05727H35.9975V2.23772H47.7204V5.05727L39.0562 25.5573H47.7204V28.3769H35.9975V25.5573L44.6615 5.05727ZM8.87686 23.2045L8.89236 23.2742C10.4423 16.2304 11.9871 9.2148 13.5241 2.23801H17.7537V28.3771H14.9324V7.95969C14.8911 7.95969 10.236 28.3903 10.236 28.3903H7.51778C7.51778 28.3903 2.86267 7.95969 2.82148 7.95969V28.3771H0V2.23801H4.2295C5.76666 9.2148 7.31156 16.2304 8.8615 23.2742L8.86762 23.2463L8.87686 23.2045ZM56.4816 15.0339V17.8535H60.3163V25.5574H53.3687V5.05727H59.316V9.25077H62.1375V2.23772H50.5472V28.3769H63.1377V15.0339H56.4816ZM68.7864 28.3769H65.9648V2.23773H68.7864V28.3769ZM24.8652 38.0006V37.5672H22.6269V36.2607H24.3623V35.8272H22.6269V34.6586H24.7805V34.225H22.1505V38.0006H24.8652ZM27.0794 34.2248H27.5822L28.6139 37.514H28.8787L29.9104 34.2248H30.4026L29.1959 38.0006H28.2858L27.0794 34.2248ZM35.56 38.0006V37.5672H33.3217V36.2607H35.0576V35.8272H33.3217V34.6586H35.4756V34.225H32.8456V38.0006H35.56ZM41.2405 34.2248V38.0006H40.4891L38.7325 34.8436H38.6157V38.0006H38.1503V34.2248H38.9017L40.6584 37.382H40.7748V34.2248H41.2405ZM45.3975 34.6481H46.6359V34.2248H43.6725V34.6481H44.9211V38.0006H45.3975V34.6481Z" fill="url(#gradient)"/>
  </svg>
);

export default Logo;
