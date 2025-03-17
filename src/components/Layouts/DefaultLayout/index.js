import "./DefaultLayout.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ToolbarPage from "../components/ToolbarPage"
import ToolbarUser from "../components/ToolbarUser"

function DefaultLayout(props) {
    return (
        <div className="DefaultLayout">
            <div className="DefaultLayout_Main">
                {props.children}
            </div>
            <div className="DefaultLayout_Header">
                <Header />
            </div>
            <div className="DefaultLayout_ToolbarWrapper">
                <div className="DefaultLayout_ToolbarPage">
                    <ToolbarPage />
                </div>
                <div className="DefaultLayout_ToolbarUser">
                    <ToolbarUser />
                </div>
            </div>
            <div className="DefaultLayout_Footer"> 
                <Footer />
            </div>
        </div>
    )
}

export default DefaultLayout
