import Image from 'next/image'
const NotFound = (props) => {
    const appUrl = process.env.APP_URL;
    return (
    <div className='notFoundContainer'>
        <div>
            <div className='logo'>
                <a href="/">
                    <Image src={`${appUrl}/images/esg-logo.png`} alt="logo" width={187} height={48} />
                </a>
            </div>
            <h1 className='heading'>404 - Not Found</h1>
            <p className='description'>The requested page was not found.</p>
        </div>
    </div>
    );
};
export default NotFound;