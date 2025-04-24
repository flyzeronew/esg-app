import { render } from '@testing-library/react';
import CustomSlider from '@/comps/CustomSlider/CustomSlider';

const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide:false,
    autoplay: true,
    autoplaySpeed:5000, 
};
describe("Custom slider snapshot", () => {
    it('renders slider unchanged', () => {
        const {container} = render(<CustomSlider settings={settings} ></CustomSlider>);
        expect(container).toMatchSnapshot();
    });
    it('checks for custom classes', () => {
        const renderedCustomSlider = render(<CustomSlider settings={settings} customClass={"tipsView"}></CustomSlider>);
        expect(renderedCustomSlider.getByRole("slider")).toHaveClass('tipsView');
    });
});

