import React, { useState } from 'react';
import Title from '../components/Title';
import Categories from '../components/Categories';
import MenuItems from '../components/MenuItem';
import portfolioData from '../components/allportfolios';


function PortfolioPage() {
    
    const [categories, setCategories] = useState(null);
  
    const [menuItems, setMenuItems] = useState(portfolioData);
    return (
        <div className="PortfolioPage">
           <div className="title-portfolio">
           <Title title={'Portfolio'} span={'Portfolio'} />
           </div>
           <div className="portfolio-data">
               <Categories />
               <MenuItems menuItems={menuItems}/>
           </div>
        </div>
    )
}

export default PortfolioPage;