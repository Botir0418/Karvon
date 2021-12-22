import React from 'react';
import '../css/working.css';

const Working = () => {
    return (
        <div class="container">
        <div>
            <h1 class="h1 text-center pt-4">Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            <p class="text-center mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum nemo
                nobis, velit repellat
                molestias maxime quae rem porro esse tempore sequi ea laborum voluptate iusto molestiae nostrum ratione
                repudiandae nulla soluta vel? Repellendus quia, nihil officiis iusto consectetur aliquam.</p>
        </div>
        <form action="/" method="post">
            <div class="form">
                <div class="bg-secondar">
                    <label>Familya,ism va sharifingiz</label><br /><br />
                    <input type="text" placeholder="F.I.O" required />
                </div>

                <div class="bg-secondar">
                    <label>Telefon raqamingiz</label><br /><br />
                    <input type="tel" name="phone" placeholder="+998__ ___ __ __"
                        pattern="[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}" required />
                </div>

                <div class="bg-secondar">
                    <label>O'zingiz haqingizda malumot</label><br/><br/>
                    <input type="text" placeholder="Javob:" required />
                </div>

                <div class="bg-secondar">
                    <label>Ish stajinggiz haqida malumot bering</label><br/><br/>
                    <input type="text" placeholder="Javob:" required />
                </div>

                <div class="bg-secondar">
                    <h4>Arizani toldirganingiz uchun rahmat!</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eos eius praesentium
                        architecto voluptatem at maiores perspiciatis repellat suscipit laborum illo, fugiat neque,
                        nihil vero harum sapiente? Natus nisi blanditiis dolores laboriosam temporibus ut. At?</p>
                </div>
            </div>
            <div class="d-flex justify-content-between pt-4">
                <div> <label class="btn btn-outline-secondary file_label">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-file-earmark" viewBox="2 0 14 16">
                            <path
                                d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                        </svg> */}
                        <input id="file_input" type="file" required />fayl biriktirish</label>
                </div>
                <button class="btn btn-primary" type="submit">Xabarni yuborish</button>
            </div>
        </form>
    </div>
    );
};


export default Working;