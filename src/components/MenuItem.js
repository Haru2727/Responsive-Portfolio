import React from 'react';


function MenuItems({ menuItems }) {
    return (
        <div className="MenuItem">
            {
                menuItems.map((item) => {
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="" />
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>{item.description}</p>
                        <ul className="hover-items">
                            <li>
                                <a href={item.link1}>GitHub Repo</a>

                                <a href={item.link2}>Launched App</a>
                            </li>
                        </ul>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;