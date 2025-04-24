import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from './../../comps/Header/Header';

const menuData = [
    {
        "page": "Focus",
        "pathname": "/focus",
        "subMenu": []
    },
    {
        "page": "View Pages",
        "pathname": "/view",
        "subMenu": [
            {
                "page": "Home View",
                "pathname": "/view"
            },
            {
                "page": "Trending",
                "pathname": "/trend"
            },
            {
                "page": "Environment",
                "pathname": "/environment"
            }

        ]
    }
];


describe("Nav bar component", () => {
    function stubLocation(location) {
        beforeEach(() => {
          jest.spyOn(window, "location", "get").mockReturnValue({
            ...window.location,
            ...location,
          });
        });
      }
      
    
    it('Renders menu items correctly', () => {
        render(<Navbar menuData={menuData} />);
        expect(screen.getByText('Focus')).toBeInTheDocument();
        expect(screen.getByText('View Pages')).toBeInTheDocument();
    });
   
    stubLocation({ pathname: "/view" });

    it('Highlights current page in menu', () => {
        render(<Navbar menuData={menuData}  />);
        expect(screen.getByText('View Pages').closest('a')).toHaveClass('act');
        expect(screen.getByText('Focus').closest('a')).not.toHaveClass('act');
    });
    it('Shows child menu on hover to slide down', () => {
        render(<Navbar menuData={menuData}  />);
        const check = (screen.getByText('View Pages'));
        fireEvent.mouseOver(check);
        const childMenuElement = screen.getByText('Trending');
        expect(childMenuElement.closest('div')).toHaveClass('childMenu act');

        //This is for dummy this statement wont be usefull much 
        expect(screen.getByText('Trending')).toBeVisible();

    });
    it('Hides child menu on leave', () => {
        render(<Navbar menuData={menuData} />);
        // fireEvent.mouseOver(screen.getByText('View Pages'));
        const childMenu = screen.getByText('Trending').closest('li');
        fireEvent.mouseLeave(childMenu);
        const childMenuElement = screen.getByText('Trending');
        expect(childMenuElement.closest('div')).not.toHaveClass('childMenu act');
    });

    describe('Nav Bar mobile view menu', () => {
        it('should resize to mobile view', () => {
            window.innerWidth = 400;
            fireEvent(window, new Event('resize'));
        });
        it('renders in mobile view and check for visibility of the hamburger icon', () => {
            const { container } = render(
                <Navbar menuData={menuData} />
            );
            const burgerIconDiv = screen
                .getByAltText('img burger icon')
                .closest('div');
            expect(burgerIconDiv).toBeVisible();
            fireEvent.click(burgerIconDiv);
            const mobileMenuList = container.getElementsByClassName('menuMo');
            expect(mobileMenuList).toHaveLength(1);
            // expect(screen.querySelector('.menuMo'));
        });

        it('clicks on child menu in mobile view', ()=>{
            const { container } = render(
                <Navbar menuData={menuData} />
            );
            const burgerIconDiv = screen
                .getByAltText('img burger icon')
                .closest('div');
            expect(burgerIconDiv).toBeVisible();
            fireEvent.click(burgerIconDiv);
            const menuList = screen.getAllByText("View Pages")[1].closest('a');
            fireEvent.click(menuList);
            const childMenuElement = screen.getAllByText('Trending')[1];
            expect(childMenuElement.closest('div')).toHaveClass('child act');
        })
    });


})