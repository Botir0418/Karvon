import React from 'react';
import '../css/working.css'

export const Murojat = () => {
    return (
        <>
            <div class="container">
        <h1>Murojat yollash</h1>
        <div class="row d-flex justify-content-between">
            <div class="col-12 col-md-7">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente nemo nesciunt consectetur
                    repudiandae molestiae? Doloremque rerum architecto nisi excepturi.</p>
                <br />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ipsa doloremque, eos non vel
                    eligendi?<a href=""> @karvon.uz</a></p>
                <p>Aloqa uchun elektron pochta: <a href="">info@karvon.uz</a></p>
                <p>Taxririyatning telefoni: <a href="">(+998) 99-123-45-67</a></p>
                <p>Telegram nashr: <a href="">(+998) 99-123-45-67</a></p>
                <p>Reklama boyicha telefoni: <a href="">(+998) 99-123-45-67</a></p>
                <form action="/" method="post" class="col-10">
                    <div class="d-flex justify-content-between flex-wrap">
                        <input type="text" placeholder="ismingiz" required />
                        <input type="text" placeholder="familyangiz" required />
                        <input type="tel" name="phone" placeholder="+998(__) ___ __ __"
                            pattern="[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}" required />
                        <input type="email" placeholder="el.pochta" required />
                    </div><br/>
                    <textarea  name="" id="" cols="" rows="6" placeholder="Xabar matn yozing" required></textarea>
                    <button class="btn btn-primary" style="margin-top: 20px; float: right;" type="submit">Xabarni
                        yuborish</button>
                </form>
            </div>
            <div class="col-12 col-md-5">
                 <div style="width: 100%; margin-top: 10px;">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d610.1792933750269!2d69.29655935588731!3d41.364615882833306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1639754348841!5m2!1suz!2s" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                 </div>
                 <div style="margin-top: 10px; width: 150px;">
                     <h4>Aloqa uchun:</h4>
                     <span>+998 99 123 45 67</span>
                     <span>info.karvon.uz@gmail.com</span>
                     <span>info.karvon.uz@gmail.com</span>
                 </div>
                 <div style="margin-top: 10px; width: 150px;">
                    <h4>Ish vaqti:</h4>
                    <span>+998 99 123 45 67</span>
                    <span>info.karvon.uz@gmail.com</span>
                    <span>info.karvon.uz@gmail.com</span>
                    <span>info.karvon.uz@gmail.com</span>
                </div>
                <div style="margin-top: 10px; width: 150px;">
                    <h4>Aloqa uchun:</h4>
                    <span>+998 99 123 45 67</span>
                    <span>info.karvon.uz@gmail.com</span>
                    <span>info.karvon.uz@gmail.com</span>
                </div>
            </div>
        </div>
    </div>
        </>
    );
};

export default Murojat;