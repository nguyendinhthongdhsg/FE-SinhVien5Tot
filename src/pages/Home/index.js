import { useEffect } from "react"
import HomeF from "../../components/Functions/HomeF"

function Home() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    
    return (
        <main className="Home">
            <HomeF />
        </main>
    )
}

export default Home
