import React from 'react';
import {useState, useEffect, useHistory} from 'react-router-dom';
import Navbar from './Navbar';
import SearchIcon from '@material-ui/icons/Search';
import BestSeller from './BestSeller';

function Products() {
    
    const history = useHistory()

    const navigate = () => {
        history.push('/customize')
    }
    return (
        <div>
            <Navbar />

            <div className=" bg-lightaccent flex justify-between px-10 md:px-40 lg:px-60 py-24">
                <div>
                    <input type="search" className="bg-purple-white shadow rounded border-0 p-3" placeholder="Search by name..." />
                    <div className="bg-midaccent sm:p-3 sm:ml-4 p-2 ml-1 inline-block">
                        <SearchIcon className="text-xl"/>
                    </div>
                </div>
                
               
                <button className="bg-midaccent hover:opacity-75  rounded-3xl px-5 ml-8 py-0.5 " onClick={navigate}>Customize</button>

            </div>

            <BestSeller />
            
        </div>
    )
}

export default Products
