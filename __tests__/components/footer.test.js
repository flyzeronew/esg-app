import { render } from '@testing-library/react';
import Footer from './../../comps/Footer/Footer';

describe('Footer Component', () => {

  it("renders footer unchanged", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
  it('renders footer component with correct class', () => {
    const { getByText } = render(<Footer />);
    const footerElement = getByText(
      '© TVBS Media Inc. All Rights Reserved 聯利媒體股份有限公司'
    );
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveClass('footer');
  });
});
