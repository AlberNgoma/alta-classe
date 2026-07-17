import { Route, Routes } from "react-router-dom"
import Landing from "../pages/public/Landing"

export default function MainRoute() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Landing/>}/>
            </Routes>


        </>
    )
}