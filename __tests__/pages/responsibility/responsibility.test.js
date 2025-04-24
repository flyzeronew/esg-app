import { render,screen } from '@testing-library/react';
import Responsibility,  { getServerSideProps } from '@/pages/responsibility';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
global.fetch = jest.fn();

describe('responsibility page', () => {

  beforeEach(()=>{
    fetch.mockClear();
  })
  // const useRouter = jest.spyOn(require("next/navigation"), "usePathname");
  const mockPathName  = jest.spyOn(require("next/navigation"), 'usePathname')
                    .mockImplementation(() => mockPathname());
  describe("responsibility page test", ()=>{
    // useRouter.mockImplementation("/view");
    mockPathName.mockReturnValue('/view')
    const responsibilityProps = {
      menu:[
        {
          "page": "未來焦點",
          "pathname": "/focus",
          "title": "Focus TVBS",
          "meta_description": "Focus Meta description",
          "page_description": "Focus page description",
          "subMenu": []
        },
        {
            "page": "View Pages",
            "pathname": "/view",
            "page": "View page",
            "title": "View TVBS",
            "meta_description": "View Meta description",
            "page_description": "View page description",
            "subMenu": [
                {
                    "page": "Home View",
                    "pathname": "/",
                    "title": "Home view TVBS",
                    "meta_description": "View Meta description",
                    "page_description": "View page description",
                },
                {
                    "page": "Trending",
                    "pathname": "/trend",
                    "title": "Trending view TVBS",
                    "meta_description": "Trending Meta description",
                    "page_description": "Trending page description",
                },
                {
                    "page": "Environment",
                    "pathname": "/environment",
                    "title": "environment view TVBS",
                    "meta_description": "environment Meta description",
                    "page_description": "environment page description",
                }
    
            ]
        }
    ],

      responsibilityData:[{
          "article_id": 293,
          "cover_img": "https://esg-asset.tvbs.com.tw/articles/img/XU5hkGPrAtlKGokeUBjb1PiDGawTfxnf2qbk2rpk.jpg",
          "title": "地球解方關注全球塑膠公約，縮短價值行動差是永續溝通的最大挑戰",
          "shortTitle": "地球解方關注全球塑膠公約，縮短價值行動差",
          "url": "https://esg.tvbs.com.tw/view/trend/293",
          "description": "",
          "partner": {
              "id": 1,
              "name": "蝦皮商城",
              "logo": "/images/logo-view2.png",
              "introduction": "秉持「從心出發，實現美好生活」為核心，提供優質的產品與服務。"
          },
          "author_name": "flyzero",
          "article_genres": [
              {
                  "id": 4,
                  "name": "綠色生活",
                  "en_name": "greenlife",
              }
          ],
          "created_at": "2024-03-11T01:05:01.000000Z",
          "updated_at": "2024-03-11T01:05:01.000000Z"
      }],
      brands:[{
        id: 8,
        name: 'Super taste',
        brand_url: 'https://supertaste.tvbs.com.tw/',
        description: 'Food, restaurant and tourist attractions',
        cover_img: 'https://esg-statics-staging.tvbs.com.tw/brands/img/cover/UaR0U5duERc1zoaCuTkdfoeOFatadwy53b92HJYq.png',
        logo: 'https://esg-statics-staging.tvbs.com.tw/brands/img/logo/yVJrGQnA4DWZADVpO8eVotU4IIEOhZftli6IyMP5.png'
      }]
    }
    it("renders respsonsibility page unchanged", () => {
      const { container } = render(<Responsibility {...responsibilityProps}/>);
      // screen.debug();
      expect(container).toMatchSnapshot();
    });

    it("renders responsibility page with brand values",()=>{
      render(<Responsibility {...responsibilityProps} />);
      const brand = screen.getAllByRole('brandCard');
      expect(brand[0]).toBeInTheDocument();

    })

    // it("renders responsibility page without brand values",()=>{
    //   const responsibilityEmptyProps = {
    //     menu:[],
    //     responsibilityData:[],
    //     brands:[]
    //   }
    //   render(<Responsibility {...responsibilityEmptyProps} />);
    //   const brandsList = screen.getByRole('list', {name: 'brandCardsList'});
    //   expect(brandsList.children).toHaveLength(0)
    // })
  })
  
});
