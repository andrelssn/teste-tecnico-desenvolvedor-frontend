import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../Layout/Header";
import Panel from "../Views/Panel01/Panel";
import Panel02 from "../Views/Panel02/Panel";

export default function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route index element={<Panel/>}/>
                    <Route path="/plans" element={<Panel02/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}