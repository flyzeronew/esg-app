function Gtm() {
    return (
            <>
                <noscript>
                    <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}`}
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
            </>
        )
}
export default Gtm;