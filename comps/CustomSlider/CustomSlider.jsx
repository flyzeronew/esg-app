import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './CustomSlider.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function CustomSlider({ settings, children, customClass }) {
  return (
    <div role="slider" className={cx('CustomSlider', customClass ? cx(customClass) : '')}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
export default CustomSlider;
