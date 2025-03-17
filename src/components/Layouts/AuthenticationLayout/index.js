import "./AuthenticationLayout.css"

import Header from "../components/Header"
import Footer from "../components/Footer"

function AuthenticationLayout({ children }) {
    return (
        <div className="AuthenticationLayout">
            <div className="AuthenticationLayout_Header">
                <Header />
            </div>
            <div className="AuthenticationLayout_Main">
                { children }
            </div> 
            <div className="AuthenticationLayout_Footer"> 
                <Footer />
            </div>
        </div>
    )
}

export default AuthenticationLayout
