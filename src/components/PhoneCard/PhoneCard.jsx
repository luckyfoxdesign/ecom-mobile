import React from "react"
import s from './phoneCard.module.styl'
import LikeIcon from '../icons/like/LikeIcon'

const PhoneCard = () => {
  return (
    <div className={s.card}>
      <LikeIcon />
      <a href="http://">
        <div className="hot_news-item--img product-item--image">
          <img src="./images/hot_news/hn1.jpg" alt="" srcset="" />
        </div>
      </a>
      <div className="hot_news-item--header_block product-item--header_block">
        <a href="http://">
          <h3 className="hot_news-item--item_header product-item--header">Xiaomi Mi 9T</h3>
        </a>
        <div className="hot_news-item--description product-item--description">4 месяца назад</div>
      </div>
      <div className="hot_news-item--raiting product-item--raiting">
        <div className="hot_news-item--raiting_counter product-item--raiting_counter">
          <a href="http://" className="hot_news-item--text_counter product-item--text_counter">7.4</a>
          <div className="hot_news-item--stars raiting_stars">
            <svg width="75" height="15" viewBox="0 0 75 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="raiting_star_1" fill-rule="evenodd" clip-rule="evenodd"
                d="M7.5 12.0232L2.86465 15L4.12492 9.44444L0 5.72965L5.41388 5.27361L7.5 0L9.58612 5.27361L15 5.72965L10.8751 9.44444L12.1353 15L7.5 12.0232Z"
                fill="#FF8F00" />
              <path id="raiting_star_2" fill-rule="evenodd" clip-rule="evenodd"
                d="M22.5 12.0232L17.8647 15L19.1249 9.44444L15 5.72965L20.4139 5.27361L22.5 0L24.5861 5.27361L30 5.72965L25.8751 9.44444L27.1353 15L22.5 12.0232Z"
                fill="#FF8F00" />
              <path id="raiting_star_3" fill-rule="evenodd" clip-rule="evenodd"
                d="M37.5 12.0232L32.8647 15L34.1249 9.44444L30 5.72965L35.4139 5.27361L37.5 0L39.5861 5.27361L45 5.72965L40.8751 9.44444L42.1353 15L37.5 12.0232Z"
                fill="#FF8F00" />
              <path id="raiting_star_4" fill-rule="evenodd" clip-rule="evenodd"
                d="M52.5 12.0232L47.8647 15L49.1249 9.44444L45 5.72965L50.4139 5.27361L52.5 0L54.5861 5.27361L60 5.72965L55.8751 9.44444L57.1353 15L52.5 12.0232Z"
                fill="#FF8F00" />
              <path id="raiting_star_5" fill-rule="evenodd" clip-rule="evenodd"
                d="M67.5 12.0232L62.8647 15L64.1249 9.44444L60 5.72965L65.4139 5.27361L67.5 0L69.5861 5.27361L75 5.72965L70.8751 9.44444L72.1353 15L67.5 12.0232Z"
                fill="#FF8F00" />
            </svg>
          </div>
        </div>
        <div className="hot_news-item--feedback product-item--feedback_block"><a className="hot_news-item--feedback_link product-item--feedback_link" href="http://">168
          отзывов</a></div>
      </div>
      <div className="hot_news-item--features product-item--features_block">
        <div className="hot_news-item--feature product-item--feature">
          <div className="hot_news-item--feature_icon product-item--feature_icon">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.6923 6.5375C16.4145 6.5375 17 7.11637 17 7.84384V9.15427C17 9.87573 16.4196 10.4606 15.6923 10.4606C15.6881 11.9057 14.5102 13.076 13.0657 13.076H2.62656C1.17596 13.076 0 11.9166 0 10.4528V6.54525C0 5.09653 1.17949 3.92212 2.62656 3.92212H13.0657C14.5138 3.92212 15.6882 5.07737 15.6923 6.5375ZM1.30769 6.53724V10.4608C1.30769 11.188 1.89046 11.7683 2.60936 11.7683H13.0829C13.7888 11.7683 14.3846 11.1829 14.3846 10.4608V6.53724C14.3846 5.81005 13.8018 5.22981 13.0829 5.22981H2.60936C1.90355 5.22981 1.30769 5.81516 1.30769 6.53724ZM2.61538 6.5375H10.4615V10.4606H2.61538V6.5375Z"
                fill="#4A4A4A" />
            </svg>
          </div>
          <div className="hot_news-item--feature-description product-item--feature_description">
            10ч. работы
        </div>
        </div>
        <div className="hot_news-item--feature product-item--feature">
          <div className="hot_news-item--feature_icon product-item--feature_icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17">
              <path fill="#4A4A4A"
                d="M1.41667 1.55556C1.43229 1.82298 1.41666 1.69142 1.41667 1.55556C1.41666 0.696446 2.04376 0 2.83333 0H4.25C5.03307 0 5.66667 0.690457 5.66667 1.55556H14.1667C15.7261 1.55556 17 2.93488 17 4.66667V10.8889C17 12.6084 15.7222 14 14.1667 14H2.83333C1.27394 14 0 12.6207 0 10.8889V4.66667C0 3.49653 0.590736 2.47962 1.41667 1.55556ZM4.25 3.11111V12.4444H14.1667C14.9415 12.4444 15.5833 11.7544 15.5833 10.8889V4.66667C15.5833 3.81263 14.951 3.11112 14.1667 3.11111H4.25ZM9.91667 10.8889C8.35186 10.8889 7.08333 9.496 7.08333 7.77778C7.08333 6.05956 8.35186 4.66667 9.91667 4.66667C11.4815 4.66667 12.75 6.05956 12.75 7.77778C12.75 9.496 11.4815 10.8889 9.91667 10.8889ZM9.91667 9.33333C10.6991 9.33333 11.3333 8.63689 11.3333 7.77778C11.3333 6.91867 10.6991 6.22222 9.91667 6.22222C9.13426 6.22222 8.5 6.91867 8.5 7.77778C8.5 8.63689 9.13426 9.33333 9.91667 9.33333Z" />
            </svg>
          </div>
          <div className="hot_news-item--feature-description product-item--feature_description">
            Камера на 21 МП
        </div>
        </div>
        <div className="hot_news-item--feature product-item--feature">
          <div className="hot_news-item--feature_icon product-item--feature_icon">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M2.80606 15.3616C1.26309 14.6533 0.354559 13.5872 0.0799287 12.1633C-0.433817 9.50638 1.6971 7.82355 1.6971 4.97873C2.3543 5.58375 2.68152 6.53701 2.68152 7.42662C4.53778 5.68552 5.46601 3.21054 5.46601 0C8.03571 1.27798 9.65379 3.28363 10.3186 6.01725C10.6917 5.3983 10.7601 4.56344 10.5239 3.51095C13.4195 4.54065 16.0076 11.464 11.7632 14.6984C10.7758 16.0799 9.01179 17 7 17C5.33073 17 3.83203 16.3665 2.80606 15.3616ZM9.88691 14.9178C10.7195 11.4568 9.78168 8.8167 7.07481 6.99919C7.45075 8.64019 7.09544 10.2169 6.00887 11.729C5.92356 10.5389 5.69666 9.61701 5.32917 8.96327C5.32917 9.72849 5.00292 10.492 4.34949 11.2527C4.26793 11.3485 4.18542 11.4442 4.10387 11.5409C3.42782 12.3329 3.16062 13.3284 3.31102 14.2823C4.29631 15.2184 5.58705 15.7857 7 15.7857C8.05609 15.7857 9.04389 15.4688 9.88691 14.9178Z"
                fill="#4A4A4A" />
            </svg>
          </div>
          <div className="hot_news-item--feature-description product-item--feature_description">
            Мощный процессор
        </div>
        </div>
      </div>
    </div>
  )
}

export default PhoneCard
