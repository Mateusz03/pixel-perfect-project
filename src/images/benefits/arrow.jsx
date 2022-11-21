import React from "react";

const BenefitsArrow = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24.616"
      height="21.538"
      viewBox="155 18 24.616 21.538"
    >
      <g data-name="Icon feather-arrow-right">
        <path
          d="M155 28.769h23.482"
          strokeLinejoin="round"
          strokeLinecap="square"
          strokeWidth="3"
          stroke={props.stroke}
          fill="transparent"
          data-name="Path 428"
        />
        <path
          d="m168.801 39.538 10.815-10.77L168.8 18"
          strokeLinejoin="round"
          strokeLinecap="square"
          strokeWidth="3"
          stroke={props.stroke}
          fill="transparent"
          data-name="Path 429"
        />
      </g>
    </svg>
  );
};
export default BenefitsArrow;
