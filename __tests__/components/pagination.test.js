import { render, screen } from '@testing-library/react'
import Pagination from './../../comps/pagination/Pagination';

const paginationData = {
    uri: '/view/trend',
    pageCount:4
}
// jest.mock('next/router', () => ({
//     useRouter: jest.fn(),
//   }));
describe("Pagination component", () => {
  const originalEnvData = process.env;
  const useRouter = jest.spyOn(require("next/router"), "useRouter");
    beforeEach(()=>{
      process.env = {
          ...originalEnvData
      }
  })
    it('render the pagination', ()=>{
        useRouter.mockImplementation(() => ({
            route: "/view/trend",
            pathname: "/view/trend",
            query: "",
            asPath: "",
          }));
        render(<Pagination uri={paginationData.uri} pageCount={paginationData.pageCount}/>);
        const pageNumberWithOne = screen.getAllByText('1');
        expect(pageNumberWithOne[1]).toHaveClass('act');
        expect(screen.getByText('2')).toBeInTheDocument();
        expect(screen.getByText('3')).toBeInTheDocument();

        expect(screen.queryAllByText('..')[1].closest('div')).toHaveClass('last');

        expect(screen.getByText('4')).toBeInTheDocument();
        expect(screen.getByText('›')).toBeInTheDocument();
    })
    it('render pagination and matchsnapshot', ()=>{
        useRouter.mockImplementation(() => ({
            route: "/view/trend",
            pathname: "/view/trend",
            query: "",
            asPath: "",
          }));
       const {container} = render(<Pagination uri={paginationData.uri} pageCount={10}/>);
       expect(container).toMatchSnapshot();
    })
    it('generates correct links', () => {
      useRouter.mockImplementation(() => ({
        query: { page: '3' },
      }));
  
      render(<Pagination uri="/view/trend" pageCount={5} />);
  
      expect(screen.getByText('1')).toHaveAttribute('href', 'https://esg-frontend-staging.tvbs.com.tw/view/trend');
      expect(screen.getByText('2')).toHaveAttribute('href', 'https://esg-frontend-staging.tvbs.com.tw/view/trend?page=2');
      expect(screen.getByText('4')).toHaveAttribute('href', 'https://esg-frontend-staging.tvbs.com.tw/view/trend?page=4');
      expect(screen.getByText('5')).toHaveAttribute('href', 'https://esg-frontend-staging.tvbs.com.tw/view/trend?page=5');
      expect(screen.getByText('‹')).toHaveAttribute('href', 'https://esg-frontend-staging.tvbs.com.tw/view/trend?page=2');
      expect(screen.getByText('›')).toHaveAttribute('href', 'https://esg-frontend-staging.tvbs.com.tw/view/trend?page=4');
    });
    it('hides previous arrow on first page', () => {
        useRouter.mockImplementation(() => ({
          query: { page: '1' },
        }));
    
        render(<Pagination uri="/view/trend" pageCount={5} />);
    
        expect(screen.queryByText('‹').closest('div')).toHaveClass('btn hide');
      });
    
      it('shows both arrow marks for middle pages', () => {
        useRouter.mockImplementation(() => ({
          query: { page: '3' },
        }));
    
        render(<Pagination uri="/view/trend" pageCount={5} />);
    
        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
        expect(screen.getByText('3')).toHaveClass('act');
        expect(screen.getByText('4')).toBeInTheDocument();
        expect(screen.getByText('5')).toBeInTheDocument();
        expect(screen.getByText('‹')).toBeInTheDocument();
        expect(screen.getByText('›')).toBeInTheDocument();
      });
    
      it('shows only one arrow  for last page', () => {
        useRouter.mockImplementation(() => ({
          query: { page: '5' },
        }));
    
         render(<Pagination uri="/view/trend" pageCount={5} />);
        // screen.debug()
        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('3')).toBeInTheDocument();
        expect(screen.getByText('4')).toBeInTheDocument();
        expect(screen.getByText('5')).toHaveClass('act');
        expect(screen.queryByText('‹')).toBeInTheDocument();
        expect(screen.queryByText('›')).not.toBeInTheDocument();
      });
})