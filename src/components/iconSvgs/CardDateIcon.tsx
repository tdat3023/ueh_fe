import React from 'react';

type Props = {};

const CardDateIcon = React.memo(({}: Props) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1496_2559)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2H16C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0L2 0ZM0 14V3H16V14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14ZM12 6C12 6.26522 12.1054 6.51957 12.2929 6.70711C12.4804 6.89464 12.7348 7 13 7C13.2652 7 13.5196 6.89464 13.7071 6.70711C13.8946 6.51957 14 6.26522 14 6C14 5.73478 13.8946 5.48043 13.7071 5.29289C13.5196 5.10536 13.2652 5 13 5C12.7348 5 12.4804 5.10536 12.2929 5.29289C12.1054 5.48043 12 5.73478 12 6Z"
          fill="#6B7280"
        />
      </g>
      <defs>
        <clipPath id="clip0_1496_2559">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});
export default CardDateIcon;
