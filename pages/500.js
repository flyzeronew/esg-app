
const ServerError = (props) => {
    const appUrl = process.env.APP_URL;
    return (
    <div className='notFoundContainer'>
        <div>
            <div className='logo'>
                <a href="/">
                    <img src={`${appUrl}/images/esg-logo.svg`} alt="logo" width={187} height={48} />
                </a>
            </div>
            <h1 className='heading'>500 - Internal server error</h1>
            <p className='description'>we are working on it.</p>
        </div>
    </div>
    );
};
export default ServerError;