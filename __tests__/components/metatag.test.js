import { render, screen } from '@testing-library/react';
import MetaTag from '@/comps/MetaTag/MetaTag';

jest.mock(
    "next/head",
    () =>
        function Head({ children }) {
            return <>{children}</>
        },
)
describe('Meta tags', () => {
   
    const mockMetaProps = {
        appUrl: 'https://esg.tvbs.com.tw',
        currentPage: 'test-page',
        ogImg: 'https:///esg.tvbs.com.tw/image.jpg',
        pageInfo: {
            title: 'Responsibility related title',
            keywords: 'something latest buzzwords',
            description: 'ESG description',
            author: 'TVBS Author'
        }
    };
    it('render with all required meta tags', () => {

        const { container } = render(<MetaTag {...mockMetaProps} />);

        const metaTags = container.querySelectorAll('meta');
        const titleTag = container.querySelector('title');
        // Test title content
        expect(titleTag.textContent).toBe(mockMetaProps.pageInfo.title);
        // screen.debug()
        const expectedTagsData = [
            { name: 'viewport', content: 'initial-scale=1.0, width=device-width' },
            { name: 'Keywords', content: mockMetaProps.pageInfo.keywords },
            { name: 'description', content: mockMetaProps.pageInfo.description },
            { name: 'author', content: mockMetaProps.pageInfo.author },
            { name: 'copyright', content: 'TVBS' },
            { name: 'application-name', content: 'TVBS' },
            { name: 'URL', content: `${mockMetaProps.appUrl}/${mockMetaProps.currentPage}` },
            { name: 'medium', content: 'mult' },
            { name: 'robots', content: 'INDEX,FOLLOW' },
            { property: 'og:image', content: mockMetaProps.ogImg }
        ];
        // Check if all expected meta tags exist with correct attributes
        expectedTagsData.forEach(expectedTag => {
            const isTagFound = Array.from(metaTags).find(tag => 
                (tag.getAttribute('name') === expectedTag.name || tag.getAttribute('property') === expectedTag.property) 
                && tag.getAttribute('content') === expectedTag.content
            );
            expect(isTagFound).toBeTruthy();
        });
    });
});
