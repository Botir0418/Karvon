import React from "react";
import "../css/header.css"
import img1 from "../assest/img/Karvon.png";
import icon1 from "../assest/img/carbon_light-filled.png";
import icon2 from "../assest/img/Vector (1).png";
import icon3 from "../assest/img/Vector (2).png";
import icon4 from "../assest/img/Vector (3).png";

const Header = () => {
    return (
        <div>
            <nav>
                <div class="wrapper">
                    <div class="img">
                        <img src={img1} alt="" />
                    </div>
                    <ul class="menu-list">
                        <button class="close-btn">x</button>
                        <li>
                            <a href="#">Махаллий</a>
                        </li>
                        <li>
                            <a href="#">Жахон</a>
                        </li>
                        <li>
                            <a href="#">Бизнес</a>
                        </li>
                        <li>
                            <a href="#">Харидор</a>
                        </li>
                        <li>
                            <a href="#">Export-Харидор</a>
                        </li>
                        <li>
                            <a href="#">Миллионер</a>
                        </li>
                        <li>
                            <a href="#">Lifestyle</a>
                        </li>
                        <li>
                            <a href="#">Ракобат</a>
                        </li>
                        <li>
                            <a href="#">Фотомухбир</a>
                        </li>
                    </ul>
                    <ul class="icon-list">
                        <li>
                            <a href="#">
                                <img src={icon1} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={icon2} alt="" />
                            </a>
                            <ul class="dropdown">
                                <li>
                                    <a href="#">O`zbekcha</a>
                                </li>
                                <li>
                                    <a href="#">Русский</a>
                                </li>
                                <li>
                                    <a href="#">English</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <img src={icon3} alt="" />
                            </a>
                            <ul class="dropdown">
                                <li>
                                    <a href="input.html">Kirish</a>
                                </li>
                                <li>
                                    <a href="register.html">
                                        Ro`yxatdan o`tish
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <img src={icon4} alt="" />
                            </a>
                        </li>
                    </ul>
                    <div class="bars">
                        <a href="#" id="bars">
                            <i class="fa fa-bars"> </i>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
