import React from "react";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage"

function App(){
    return(
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route exact path='/' element={<LandingPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}