import React from 'react';
import './About.css'; // Make sure to create a CSS file for styling
import Cta from '../CTA/Cta';

const AboutUs = () => {
  return (
    <>
    <section className='about-page flex items-center justify-center'>
    <h1 className="font-bold text-4xl text-white text-center md:text-6xl ">
            About us
          </h1>
    </section>
    <div className="about-us-container max-w-screen-lg mx-auto px-4 py-10 mt-12">
      <p className="drop-cap mb-4">
        <span className="drop-cap-letter">P</span>artex is a premier Kenya-based meat export company, dedicated to providing the finest halal meat and fruits to clients across the globe. With a strong commitment to quality and customer satisfaction, we specialize in exporting a diverse range of products, including premium beef, chicken, goat, lamb, fish, and seasonal fruits. Our primary markets include Gulf countries such as Bahrain, Oman, Kuwait, and Qatar, as well as non-Gulf countries like Egypt.
      </p>
      <p className="mb-4">
        At Partex, we understand the importance of halal certification and the dietary needs of our customers. Our meat is sourced from trusted farms that adhere to the highest standards of animal welfare and halal practices. This ensures that our customers receive not only the best quality meat but also peace of mind knowing they are consuming products that meet their ethical and religious standards.
      </p>
      <p className="mb-4">
        Our experienced team works diligently to maintain strict quality control measures throughout the supply chain, from sourcing and processing to packaging and shipping. This attention to detail has earned us a reputation as a reliable supplier in the international market. We take pride in our ability to meet the unique requirements of each customer, whether they are a retailer, wholesaler, or food service provider.
      </p>
      <p className="mb-4">
        We believe in building long-lasting relationships with our clients, which is why we prioritize communication and transparency. Our customer service team is always available to address inquiries, provide updates on orders, and ensure that our clients are satisfied with their experience.
      </p>
      <p className="mb-4">
        In addition to our commitment to quality and service, Partex is dedicated to sustainability. We strive to minimize our environmental impact by utilizing eco-friendly packaging and practices, ensuring that our operations are not only profitable but also responsible.
      </p>
      <p className="mb-4">
        We invite you to explore our range of halal meat and fruit products. Experience the Partex difference and discover why we are a trusted choice for halal meat export in Kenya and beyond. Thank you for choosing Partex, where quality meets integrity.
      </p>
    </div>
    <Cta />
    </>
  );
};

export default AboutUs;
