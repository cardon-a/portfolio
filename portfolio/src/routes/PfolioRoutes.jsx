import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from '../pages/Home/Home'
import NotFound from '../pages/NotFound/NotFound'
import Layout from '../layouts/Layout'

function PfolioRoutes() {
    return(
        <Router>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />}/>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default PfolioRoutes;