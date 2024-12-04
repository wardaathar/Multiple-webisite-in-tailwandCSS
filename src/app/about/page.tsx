import React from 'react';

function About() {
  return (
    <div>
      <section className="about h-screen flex items-center justify-center bg-cover  md:flex bg-center" style={{backgroundImage:"url(proxy-image.png)" }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-md max-w-lg">
          <h2 className="text-2xl font-bold mb-4 text-white" data-aos="fade-up">About Our Handfree Shop</h2>
          <p className="text-white ">
            Welcome to our Handfree Shop, where convenience meets innovation! We specialize in providing the latest and best in wireless audio technology, from noise-canceling earbuds to state-of-the-art wireless headphones.
            We`re passionate about providing an exceptional shopping experience, offering the highest quality handfree devices to suit every lifestyle. Whether you`re on the go, working from home, or just relaxing, we have the perfect audio solutions for you. With multiple payment options, secure transactions, and instant order confirmations, shopping with us is simple and safe.
            Our easy-to-use website allows you to browse, compare, and buy your favorite products in just a few clicks. Track your orders in real-time and receive timely updates on delivery status. We value your feedback to constantly improve your experience. If you have any suggestions or need assistance, feel free to contact us anytime.
        </p>
        </div>
      </section>
    </div>
  );
}

export default About;
