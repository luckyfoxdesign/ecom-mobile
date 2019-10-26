import React from "react"
import s from './likeIcon.module.styl'

const LikeIcon = () => (
  <div className={s.likeIcon}>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M12.375 2.25C11.07 2.25 9.8175 2.8575 9 3.8175C8.1825 2.8575 6.93 2.25 5.625 2.25C3.315 2.25 1.5 4.065 1.5 6.375C1.5 9.21 4.05 11.52 7.9125 15.03L9 16.0125L10.0875 15.0225C13.95 11.52 16.5 9.21 16.5 6.375C16.5 4.065 14.685 2.25 12.375 2.25Z"
        fill="#CCCCCC" />
    </svg>
  </div>
)

export default LikeIcon
