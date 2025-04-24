import { render, screen, logRoles } from '@testing-library/react';
import Submenu from '@/comps/view/Submenu';


process.env.IMG_DEFAULT = '/default-esg-image.jpg';

describe("Submenu component view pages", ()=>{
    const mockSumenu = [
        {
          "id": 1,
          "name": "主題企劃",
          "en_name": "trend",
          "description": "主題式內容帶你探索全球永續熱議話題，透過專題文章，了解友善環境、氣候變遷、綠色生活等議題的重要性，讓永續走入我們的日常，探索未來生活的樣貌。"
        },
        {
          "id": 2,
          "name": "人物專訪",
          "en_name": "interviews",
          "description": "聚焦各行各業的永續推動者，透過品牌創辦人與實踐者的真實故事，分享他們的理念、挑戰與成就。讓你發現永續其實蘊藏在生活中，啟發每個人踏出行動的第一步！"
        }
      ];
    
    it("submenu unchanged", ()=>{
        const {container} = render(<Submenu submenu={mockSumenu}></Submenu>);
        expect(container).toMatchSnapshot();
    })
    it("Renders submenu without any data",()=>{
        render(<Submenu submenu={[]}></Submenu>);
        expect(screen.getAllByText("全部")[0]).toHaveClass("act");
        expect(screen.queryAllByLabelText("人物專訪")).toHaveLength(0)
    })
    it("renders submenu with data", ()=>{
        render(<Submenu submenu={mockSumenu}></Submenu>);
        expect(screen.getAllByText("人物專訪")[0]).toBeInTheDocument();
        expect(screen.getAllByText("人物專訪")[0]).toHaveAttribute('href', '/view/interviews');
    })
    it("Renders submenu with Genre",()=>{
        render(<Submenu submenu={mockSumenu} genreEnName={"interviews"}></Submenu>);
        expect(screen.getAllByText("人物專訪")[0]).toHaveClass("act");
    })
  
})