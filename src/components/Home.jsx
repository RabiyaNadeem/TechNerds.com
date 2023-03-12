import React from "react";
import vg from "../assets/2.webp";
import {AiFillInstagram,AiFillYoutube,AiFillGoogleCircle,AiFillAmazonCircle} from 'react-icons/ai'

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechNerds.com</h1>
          <p>Soution to all your problems.</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            numquam deleniti, tenetur quod amet, in est aperiam optio fugiat
            consequatur vitae atque. Optio, ea nulla? Debitis adipisci nisi
            velit consequuntur?Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus corporis ratione, repellendus, placeat non
            distinctio sit fugit minus cupiditate molestias itaque temporibus a
            iusto. Excepturi quod magnam adipisci voluptate pariatur
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dignissimos, assumenda vero voluptatum asperiores reprehenderit explicabo fugit enim quibusdam libero eos repellendus, natus optio laboriosam dicta eius eum expedita nam!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
