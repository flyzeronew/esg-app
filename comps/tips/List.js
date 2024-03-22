import Image from 'next/image'

function tipsList(props) {  
    const listData = props.listData;
    const tipsGenresArr = [
        'tagFoodColor',
        'tagClothingColor',
        'tagHousingColor',
        'tagTransportColor',
        'tagEducationColor',
        'tagEntertainmentColor',
    ];
    return (
            <div className="list">
                <ul>
                    { listData.length > 0?
                        listData.map((item, index) => (
                            <li key = {index}>
                                <a href={item.url}>
                                    <div className={`genres ${tipsGenresArr[item.tip_genre.id-1]}`}>{item.tip_genre.name}</div>
                                    <div className="img">
                                        <img src={item.img} alt="img" width={360} height={360} loading='lazy'/>
                                    </div>
                                    <div className="detail">
                                    <div className='upImg'>
                                        <img src="images/Rectangle-grey.svg" alt="img" width={20} height={20} loading='lazy'/>
                                    </div>
                                        <div className="txt">{item.title}</div>
                                    <div className='rightImg'>
                                        <img src="images/Rectangle-grey.svg" alt="img" width={20} height={20} loading='lazy'/>
                                    </div>
                                    </div>
                                </a>
                            </li>
                        ))  
                    :''}
                </ul>
            </div>   
        )
}
export default tipsList;