import React from 'react';
import Title from '../components/Title';
import Categories from '../components/Categories';
import MenuItems from '../components/MenuItem';
import portfolioData from '../components/allportfolios';

function PortfolioPage() {
    // eslint-disable-next-line no-undef
    const [categories, setCategories] = useState(null);
    // eslint-disable-next-line no-undef
    const [menuItems, setMenuItems] = useState(portfolioData);
    return (
        <div className="PortfolioPage">
           <div className="title-portfolio">
           <Title title={'Portfolio'} span={'Portfolio'} />
           </div>
           <div className="portfolio">
               <Categories />
               <MenuItems menuItems={menuItems}/>
           </div>
        </div>
    )
}

export default PortfolioPage;