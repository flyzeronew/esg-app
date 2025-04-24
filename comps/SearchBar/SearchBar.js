import styles from './SearchBar.module.css';
import classNames from 'classnames/bind';
import Swal from 'sweetalert2';

const cx = classNames.bind(styles);

function SearchBar(props) {
    const showSearchBar = props.showSearchBar || '';
    const searchKeyword = props.searchKeyword || '';
    const searchType = props.searchType || '';
    console.log(searchKeyword);
    return (
        <div className={cx('searchBar', showSearchBar ? 'show' : '')}>
            <div className={cx('searchBox')}>
                <form
                    onSubmit={(e) => {
                        e.preventDefault(); 
                        const keyword = document.getElementById(searchType).value.trim();
                        if (!keyword) {
                            Swal.fire({
                                title: '提醒',
                                text: '請輸入關鍵字',
                                icon: 'warning',
                            });
                        } else {
                            window.location.href = `/search/${encodeURIComponent(keyword)}`;
                        }
                    }}
                >
                    <div className={cx('box')}>
                    <div className={cx('input')}>
                        <input
                            type="text"
                            name="keyword"
                            id={searchType}
                            placeholder="請輸入關鍵字"
                            defaultValue={searchKeyword}
                        />
                    </div>
                    <div className={cx('btn')}>
                        <button type="submit">
                        <img
                            src={`/images/search-img.svg`}
                            alt="searchImg"
                            width={30}
                            height={30}
                        />
                        </button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default SearchBar;
