//app/(root)/layout.js
import Navbar from "../components/Navbar";
import SessionWrapper from "../components/sessionwrapper";
export default function layout({children}){
    return (
        <main className="font-work-sans">
            <SessionWrapper> {/* Wraps the children component with session check */}
            <Navbar/>
            {children}
            </SessionWrapper>
        </main>
    )
}