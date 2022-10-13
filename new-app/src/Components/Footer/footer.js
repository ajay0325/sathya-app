import stylesF from './footer.module.css'

function Footer() {
    return (
        <div className={stylesF.container}>
            <div className={stylesF.container2}>
                <div>
                    <h1>Grocify</h1>
                </div>
                <div className={stylesF.contact}>
                    <h2>contact us</h2>
                    <p>WhatsApp us : <span>70003 70003</span></p>
                    <p>Call Us : <span>1800 890 1222</span></p>
                    <p>Should you encounter any bugs, glitches,
                         lack of functionality, delayed deliveries,
                         billing errors or other problems on the beta
                         website, please email us on <span>cs@jiomart.com</span></p>
                </div>
                <div></div>
            </div>
            <hr></hr>
        </div>
    )
}

export default Footer;