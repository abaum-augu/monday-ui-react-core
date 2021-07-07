/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const DocShareable = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M16.4033 7.62725C16.4049 7.60733 16.4057 7.58719 16.4057 7.56686C16.4057 7.54653 16.4049 7.5264 16.4033 7.50648V7.483C16.4032 7.02626 16.2217 6.58807 15.8988 6.265L12.0884 2.45456C11.7653 2.1317 11.3271 1.95029 10.8704 1.9502H4.97333C4.51628 1.9502 4.07794 2.13176 3.75475 2.45495C3.43157 2.77814 3.25 3.21647 3.25 3.67353V16.3269C3.25 16.7839 3.43157 17.2223 3.75475 17.5454C4.07794 17.8686 4.51627 18.0502 4.97333 18.0502H9.54158C9.08358 17.6482 8.70539 17.1365 8.43823 16.5502H4.97333C4.9141 16.5502 4.8573 16.5267 4.81541 16.4848C4.77353 16.4429 4.75 16.3861 4.75 16.3269V3.67353C4.75 3.6143 4.77353 3.55749 4.81541 3.51561C4.8573 3.47372 4.9141 3.4502 4.97333 3.4502L10.0391 3.50488V6.59353C10.0391 7.05059 10.2206 7.48892 10.5438 7.81211C10.867 8.1353 11.3053 8.31686 11.7624 8.31686H14V8.31512H16.4033V7.62725ZM11.5391 4.02658L14.3293 6.81686H11.7624C11.7032 6.81686 11.6464 6.79333 11.6045 6.75145C11.5626 6.70956 11.5391 6.65276 11.5391 6.59353V4.02658ZM5.91895 10.6002C5.91895 10.1859 6.25473 9.85016 6.66895 9.85016H11.5C11.9142 9.85016 12.25 10.1859 12.25 10.6002C12.25 11.0144 11.9142 11.3502 11.5 11.3502H6.66895C6.25473 11.3502 5.91895 11.0144 5.91895 10.6002ZM6.6691 13.0502C6.25489 13.0502 5.9191 13.3859 5.9191 13.8002C5.9191 14.2144 6.25489 14.5502 6.6691 14.5502H8.50098C8.91519 14.5502 9.25098 14.2144 9.25098 13.8002C9.25098 13.3859 8.91519 13.0502 8.50098 13.0502H6.6691ZM15.4463 12.0467C15.4172 11.9003 15.4023 11.7504 15.4023 11.599C15.4023 10.9893 15.6445 10.4046 16.0756 9.97349C16.5067 9.54237 17.0915 9.30017 17.7011 9.30017C18.3108 9.30017 18.8956 9.54237 19.3267 9.97349C19.7578 10.4046 20 10.9893 20 11.599C20 12.2087 19.7578 12.7934 19.3267 13.2245C18.8956 13.6557 18.3108 13.8979 17.7011 13.8979C17.1494 13.8979 16.6181 13.6995 16.2026 13.3423L14.5247 14.3577C14.5728 14.5439 14.5977 14.7368 14.5977 14.9323C14.5977 15.1301 14.5722 15.3252 14.523 15.5134L16.016 16.1274C16.0355 16.1065 16.0553 16.0858 16.0756 16.0655C16.5067 15.6344 17.0915 15.3922 17.7011 15.3922C18.3108 15.3922 18.8956 15.6344 19.3267 16.0655C19.7578 16.4967 20 17.0814 20 17.6911C20 18.3008 19.7578 18.8855 19.3267 19.3166C18.8956 19.7477 18.3108 19.9899 17.7011 19.9899C17.0915 19.9899 16.5067 19.7477 16.0756 19.3166C15.6445 18.8855 15.4023 18.3008 15.4023 17.6911C15.4023 17.6271 15.405 17.5634 15.4102 17.5002L13.6639 16.7819C13.271 17.0719 12.7931 17.2311 12.2988 17.2311C11.6892 17.2311 11.1044 16.9889 10.6733 16.5578C10.2422 16.1267 10 15.542 10 14.9323C10 14.3226 10.2422 13.7379 10.6733 13.3068C11.1044 12.8756 11.6892 12.6334 12.2988 12.6334C12.8064 12.6334 13.2967 12.8013 13.6955 13.1063L15.4463 12.0467Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
DocShareable.displayName = 'DocShareable';
DocShareable.propTypes = {
  size: PropTypes.string
}
export default DocShareable;
/* tslint:enable */
/* eslint-enable */
