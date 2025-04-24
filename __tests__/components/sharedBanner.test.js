import { render } from '@testing-library/react';
import SharedBanner from './../../comps/sharedBanner/SharedBanner';

describe('Shared Banner Component', () => {
    const mockBanner = {
        title: "Here is ESG",
        description: "This is were the description comes up"
    }
    it("renders Banner unchanged", () => {
        const { container } = render(<SharedBanner {...mockBanner} />);
        expect(container).toMatchSnapshot();
    });
    it('renders footer component with correct class', () => {
        const { getByText } = render(<SharedBanner {...mockBanner} />);
        const bannerTitle = getByText(mockBanner.title);
        const bannerDescription = getByText(mockBanner.description);
        expect(bannerTitle).toBeInTheDocument();
        expect(bannerDescription).toBeInTheDocument();
    });
});
