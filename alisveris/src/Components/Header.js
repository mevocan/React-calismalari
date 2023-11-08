import React from "react";
import {  NavLink } from "react-router-dom";
import { ReactComponent as MySvg } from "../ty-web.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ListEleman from "./ListEleman";

const handleAnasayfaClick = () => {
 
}

const Header = () => {
  return (
    <div className="container p-0">
      <header>
        <NavLink to="/indirimlikupon" >
          İndirimli Kuponlarım
        </NavLink>
        <NavLink to="/hakkimizda" >
          Hakkımızda
        </NavLink>
        <NavLink to="/yardim" >
          Yardım&Destek
        </NavLink>
      </header>
      <div className="row custom-row mt-2">
        
        <MySvg
          className="svg-icon col-3"
          style={{ height: "100%", width: "146px" }}
          onClick={handleAnasayfaClick}
        />
        <div className="col-6 arama-motoru">
          <input
            type="text"
            className="arama"
            placeholder="Aradğınız ürünü giriniz"
          />
          <FontAwesomeIcon color="orange" icon={faMagnifyingGlass} />
        </div>
        <div className="navigaitor col-3">
          <div className="link account-user ">
            <div className="icon-container d-flex">
              <FontAwesomeIcon icon={faUser} />
              <h6>Giriş yap</h6>
            </div>
            <div className="icon-container d-flex">
            <FontAwesomeIcon icon={faHeart} />
              <h6>Favorilerim</h6>
            </div>
            <div className="icon-container d-flex">              
            <FontAwesomeIcon icon={faCartPlus} />              <h6>Sepetim</h6>
            </div>
          </div>
        </div>
      </div>
      
        <ListEleman/>

    </div>
  );
};

export default Header;
