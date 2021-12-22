import React from 'react';
import "../css/footer.css";
import logo from '../assest/img/Karvon.png';

const Footer = () => {
    return (
        <div>
            <footer>
            <div class="wrapper">
                <div class="row">
                    <div class="col-2">
                        <p>Махаллий</p>
                        <ul>
                            <li><a href="#">Бухоро</a></li>
                            <li><a href="#">Хоразм</a></li>
                            <li><a href="#">Тошкент</a></li>
                            <li><a href="#">Навоий</a></li>
                            <li><a href="#">Нукус</a></li>
                            <li><a href="#">Самарканд</a></li>
                        </ul>
                    </div>
                    <div class="col-2">
                        <p>Жахон</p>
                        <ul>
                            <li><a href="#">Африка</a></li>
                            <li><a href="#">Шимолий Америка</a></li>
                            <li><a href="#">Жанубий Америка</a></li>
                            <li><a href="#">Австралия</a></li>
                            <li><a href="#">Европа</a></li>
                            <li><a href="#">Осиё</a></li>
                            <li><a href="#">Ғарбий Осиё</a></li>
                        </ul>
                    </div>
                    <div class="col-2">
                        <p>Бизнес</p>
                        <ul>
                            <li><a href="#">Саноат</a></li>
                            <li><a href="#">Шимолий Америка</a></li>
                            <li><a href="#">Жанубий Америка</a></li>
                            <li><a href="#">Австралия</a></li>
                            <li><a href="#">Европа</a></li>
                            <li><a href="#">Осиё</a></li>
                            <li><a href="#">Ғарбий Осиё</a></li>
                        </ul>
                    </div>
                    <div class="col-2">
                        <p>Export-Харидор</p>
                        <ul>
                            <li><a href="#">Саноат</a></li>
                            <li><a href="#">Шимолий Америка</a></li>
                            <li><a href="#">Жанубий Америка</a></li>
                            <li><a href="#">Австралия</a></li>
                            <li><a href="#">Европа</a></li>
                        </ul>
                    </div>
                    <div class="col-2">
                        <p>Миллионер</p>
                        <ul>
                            <li><a href="#">Саноат</a></li>
                            <li><a href="#">Шимолий Америка</a></li>
                            <li><a href="#">Жанубий Америка</a></li>
                            <li><a href="#">Австралия</a></li>
                            <li><a href="#">Европа</a></li>
                            <li><a href="#">Осиё</a></li>
                            <li><a href="#">Ғарбий Осиё</a></li>
                        </ul>
                    </div>
                    <div class="col-2">
                        <p>Статистика</p>
                        <ul>
                            <li><a href="#">Саноат</a></li>
                            <li><a href="#">Шимолий Америка</a></li>
                            <li><a href="#">Жанубий Америка</a></li>
                            <li><a href="#">Австралия</a></li>
                            <li><a href="#">Европа</a></li>
                            <li><a href="#">Осиё</a></li>
                        </ul>
                    </div>
                </div>
                <div class="aboutWe">
                    <div class="text">
                        <p>Биз хақимизда</p>
                    </div>
                    <div class="channels">
                        <div class="img">
                            <a href="#"><i class="fab fa-telegram"></i></a>
                        </div>
                        <div class="img">
                            <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                        <div class="img">
                            <a href="#"><i class="fab fa-facebook"></i> </a>
                        </div>
                        <div class="img">
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                        <div class="img">
                            <a href="#"><i class="far fa-play-circle"></i></a>
                        </div>
                    </div>
                </div>
                <div class="withWe">
                    <div class="img">
                        <img src={logo} alt="" />
                    </div>
                    <ul>
                        <li><a href="#">Сайт мақсади</a></li>
                        <li><a href="#">Бизда ишлаш</a></li>
                        <li><a href="#">Жамоа</a></li>
                        <li><a href="#">Лицензия</a></li>
                        <li><a href="#">Ҳамкорлик</a></li>
                        <li><a href="#">Реклама</a></li>
                        <li><a href="#">Мурожаат учун</a></li>
                    </ul>
                </div>
                <div class="adress">
                    <p>
                        «KARVON.UZ» сайтида эълон қилинган материаллардан нусха
                        кўчириш, тарқатиш ва бошқа шаклларда фойдаланиш фақат
                        таҳририят ёзма розилиги билан амалга оширилиши мумкин.
                        Гувоҳнома: №0987. Берилган санаси: 22.06.2015 йил.
                        Муассис: «WEB EXPERT» МЧЖ. Таҳририят манзили: 100043,
                        Тошкент шаҳри, К. Ёрматов кўчаси, 12-уй. Электрон
                        манзил: info@kun.uz. Сайтда эълон қилинаётган муаллифлик
                        мақолаларида келтирилган фикрлар муаллифга тегишли ва
                        улар Kun.uz таҳририяти нуқтаи назарини ифода этмаслиги
                        мумкин.
                    </p>
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;