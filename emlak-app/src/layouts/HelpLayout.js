import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>AOS EMLAK</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, autem
        delectus fugiat tempora iusto incidunt dicta vero illum et voluptatum
        eaque dolor eveniet quia hic ipsam laborum cupiditate molestias
        asperiores. Quisquam, laudantium! Eveniet laborum blanditiis deserunt
        laudantium molestiae voluptate nobis omnis in numquam ducimus! Ipsum
        harum nam deleniti labore veniam, commodi sapiente debitis itaque
        reiciendis sit odio aspernatur, expedita cumque!
      </p>
      <nav>
        <NavLink to="sss">Sık Sorulan Sorular</NavLink>
        <NavLink to="contact">Bağlantı kur</NavLink>
      </nav>
      <Outlet/>
    </div>
  );
}
