import React, { useState, useEffect } from 'react';
import Head from 'next/head'  
import Layout, {siteTitle} from '../components/layout.js'
import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'
import utilStyles from '../styles/utils.module.css'  // css style
import MapView from "../components/mapComp.jsx"

export default function Map(){
    const [initList, setInitList] = useState([]);  // houses data

    useEffect(() => { if(initList.length===0) getList(); });

    const getList = async () => {
		const response = await fetch(`/api`, { method: "GET" });
		const data = await response.json();
		setInitList(data);
    }
    
    return (
       <Layout index>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<Navbar></Navbar>
			<div className={utilStyles.container}>
				<h1 className={utilStyles.searchH1}>Listings Map</h1>
				<div>
					<MapView/>
				</div>
			</div>
			<Footer/>
		</Layout>
	);
}