import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut impedit
            nostrum eligendi doloremque. Ipsam nemo ea sit dolor nostrum
            corporis qui, vel iure neque suscipit, delectus voluptates natus
            vitae quos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            sunt fugit ea quibusdam accusantium dolorum natus voluptatem
            exercitationem, deserunt consequatur quam expedita, ut reiciendis
            molestiae molestias quia alias est saepe.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            corrupti, fugiat quasi explicabo porro corporis nihil accusantium.
            Totam nemo ratione iusto soluta animi, vero ipsum consectetur
            provident libero repellendus! Error.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"}></Title>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Quality Assurance:</b>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
            numquam iste enim temporibus quos, consectetur tempora magnam
            reprehenderit cum voluptatum quas aliquid, illo veniam quaerat
            nesciunt voluptas? Necessitatibus, adipisci unde.
          </p>
        </div>

        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Convenience:</b>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
            numquam iste enim temporibus quos, consectetur tempora magnam
            reprehenderit cum voluptatum quas aliquid, illo veniam quaerat
            nesciunt voluptas? Necessitatibus, adipisci unde.
          </p>
        </div>

        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
            numquam iste enim temporibus quos, consectetur tempora magna
          </p>
        </div>
      </div>

      <NewsLetter/>
    </div>
  );
};

export default About;
