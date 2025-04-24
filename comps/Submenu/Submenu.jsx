import styles from "./Submenu.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function Submenu(props) {
    return (
        <>
            <div className={cx("submenuArea")}>
                <div className={cx("submenu")}>
                    <div className={cx("submenuMask")}></div>
                    <a href={`/${props.page}`} className={!props.genreId ? cx("act") : ''}  >全部</a>
                    {props.submenu?.length > 0 ? props.submenu.map((item, index) => (
                        <a
                            key={index}
                            className={item.en_name == props.genreEnName ? cx("act") : ''}
                            href={`/${props.page}/${item.en_name}`}
                        >
                            {item.name}
                        </a>
                    )) : ''
                    }
                </div>
            </div>
            <div className={cx("moSubmenuArea")}>
                <div>
                <a href={`/${props.page}`} className={!props.genreId ? cx("act") : ''} >全部</a>
                </div>
                {props.submenu?.length > 0 ? props.submenu.map((item, index) => (
                    <div key={"moSubmenuArea" + index}>
                        <a
                            key={index}
                            className={item.en_name == props.genreEnName ? cx('act') : ''}
                            href={`/${props.page}/${item.en_name}`}
                        >
                            {item.name}
                        </a>
                    </div>
                )) : ''
                }
            </div>
        </>
    )
}
export default Submenu;