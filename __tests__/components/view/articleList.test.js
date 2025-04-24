import { render, screen, logRoles } from '@testing-library/react';
import ArticleList, { Article } from '@/comps/view/ArticleList';

process.env.IMG_DEFAULT = '/default-esg-image.jpg';

describe("Article Component",()=>{
    const mockAtlWithPartner = {
        id: '1',
        article_genres: [{ en_name: 'environment' }],
        cover_img: 'https://esg.testing.tvbs.com.tw/test.jpg',
        title: 'Partner title here',
        partner: {
          avatar: 'https://esg.testing.tvbs.com.tw/testavt.jpg',
          name: 'Partner test'
        }
      };
    
      const mockAtlWithoutPartner = {
        id: '2',
        article_genres: [{ en_name: 'environment' }],
        cover_img: null,
        title: 'Another Test Article',
        author_name: 'Test Name',
        partner: null
      };
    
    it("renders article unchanged",()=>{
        const {container}  = render(<Article articleData={mockAtlWithPartner} index={1}></Article>)
        expect(container).toMatchSnapshot();
    })
     it("renders article with partner data",()=>{
         render(<Article articleData={mockAtlWithPartner} index={1}></Article>)

        //link check
        expect(screen.getByRole('link')).toHaveAttribute("href", "/view/environment/1");

        //title
        expect(screen.getByText(mockAtlWithPartner.title)).toBeInTheDocument();
        expect(screen.getAllByAltText("img")[0]).toHaveAttribute("src", mockAtlWithPartner.cover_img)
        expect(screen.getByText(mockAtlWithPartner.partner.name)).toBeInTheDocument();

     })
     it("renders article without partner data",()=>{
        render(<Article articleData={mockAtlWithoutPartner} index={1}></Article>)
        expect(screen.getByText(mockAtlWithoutPartner.author_name)).toBeInTheDocument();
        expect(screen.getAllByAltText("img")[0]).toHaveAttribute("src",process.env.IMG_DEFAULT)
     })
})

describe("Article List component",()=>{
    const mockArticleListData = [
        {
            id: '1',
            article_genres: [{ en_name: 'environment' }],
            cover_img: 'https://esg.testing.tvbs.com.tw/test.jpg',
            title: 'Partner title here',
            partner: {
              avatar: 'https://esg.testing.tvbs.com.tw/testavt.jpg',
              name: 'Partner test'
            }
          },
          {
            id: '2',
            article_genres: [{ en_name: 'environment' }],
            cover_img: 'https://esg.testing.tvbs.com.tw/test.jpg',
            title: 'Another Test Article',
            author_name: 'Test Name',
            partner: null
          }
      ];
    it("renders the Article list unchanged",()=>{
        const { container } = render(<ArticleList articleList={mockArticleListData}></ArticleList>);
        expect(container).toMatchSnapshot();
    })

    it("renders the list of articles provided",()=>{
       const {container} =  render(<ArticleList articleList={mockArticleListData}></ArticleList>);
        // logRoles(container);
        //check for number of list items
        expect(screen.getAllByRole("listitem")).toHaveLength(2);

    })
    it("renders the zero article",()=>{
        render(<ArticleList articleList={[]}></ArticleList>);
        expect(screen.queryAllByRole("listitem")).toHaveLength(0);
    })
})
