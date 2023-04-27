import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

interface GridSmallProps extends IconProps {}

const GridSmall: React.FC<GridSmallProps> = (props) => {
  return (
    <Icon width="114" height="103" viewBox="0 0 114 103" fill="none" {...props}>
      <g clipPath="url(#clip0_279_1300)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M112.519 0H1.48081C0.662625 0 0 0.598688 0 1.33793V101.662C0 102.401 0.662625 103 1.48081 103H112.519C113.337 103 114 102.401 114 101.662V1.33793C114 0.598688 113.337 0 112.519 0ZM111.038 100.324H58.4808V52.8379H111.038V100.324ZM55.5192 78.4871V100.324H2.96044V52.8379H55.5192V78.4871ZM111.038 50.1621H58.4808V2.67585H111.038V50.1621ZM55.5192 28.325V50.1621H2.96044V2.67585H55.5192V28.325Z"
          fill="#F687B3"
          fillOpacity="0.2"
        />
      </g>
      <defs>
        <clipPath id="clip0_279_1300">
          <rect width="114" height="103" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  );
};
export default GridSmall;
