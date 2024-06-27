import menu_data from "@/data/menu-data";
import Link from "next/link";
import React, { useState } from "react";
import { useLocation } from "react-use";

const Menu = () => {
  const location = useLocation(); 
 const pathname=location.pathname
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
     <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ?             <i className="flaticon flaticon-cancel"></i>
 : <div className="bar-icon bar-icon-2">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>}
      </button>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        {menu_data.map((item) => (
          <li key={item.id} className={`${item?.hasDropdown === true ? "menu-item-has-children" : ""}`}>
            <a style={{height:65}} className={pathname==item?.link?"main-menu-active":""} href={item.link}>{item.title}</a>
            {item.hasDropdown === true && (
              <ul className="sub-menu">
                {item?.submenus?.length && (
                  <>
                    {item?.submenus.map((subItem, index) => (
                      <li key={index} className={`${subItem?.megaMenu?.length ? "menu-item-has-children" : ""}`}>
                        <a href={subItem?.link}>{subItem?.title}</a>
                        {item?.megaMenu === true &&
                          subItem?.megaMenu?.length && (
                            <>
                              <ul className="sub-menu">
                                {subItem?.megaMenu?.map(
                                  (megaItem: any, index: number) => (
                                    <li key={index}>
                                      <a href={megaItem?.link}>
                                        {megaItem?.title}
                                      </a>
                                    </li>
                                  )
                                )}
                              </ul>
                            </>
                          )}
                      </li>
                    ))}
                  </>
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
