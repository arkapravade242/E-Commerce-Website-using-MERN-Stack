import { assets } from "../assets/assets"
import NewsletterBox from "../components/NewsletterBox"
import Title from "../components/Title"

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Welcome to Arka's modern e-commerce platform built with the MERN stack to make online shopping simple, fast, and convenient. Our goal is to provide a smooth shopping experience where customers can easily discover quality products, manage their carts, and place orders through a clean and user-friendly platform.</p>
        <p>This project is built using the MERN stack, combining MongoDB, Express.js, React.js, and Node.js to create a complete full-stack e-commerce application. React.js is used to build the interactive and responsive frontend, while Node.js and Express.js handle the backend logic and APIs. MongoDB manages product, user, cart, and order data, providing a reliable database for the application.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission is to create a simple, reliable, and enjoyable online shopping experience by providing quality products, easy navigation, secure transactions, and convenient services. We aim to use modern technology to make shopping faster and more accessible while continuously improving our platform to meet the needs of our customers.</p>
      </div>
      </div>
      <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Quality Assurance:</b>
      <p className='text-gray-600'>Our e-commerce website is designed to provide a simple, fast, secure, and user-friendly shopping experience. With a wide range of products, easy navigation, responsive design, and convenient cart and ordering features, customers can shop with confidence from any device. Built with modern MERN stack technology, our platform delivers reliable performance while focusing on customer satisfaction and convenience.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Convenience:</b>
      <p className='text-gray-600'>Our e-commerce website offers convenient shopping anytime and anywhere, allowing customers to easily browse products, add items to their cart, and place orders from the comfort of their home.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Exceptional Customer Service:</b>
      <p className='text-gray-600'>We are committed to providing exceptional customer service by understanding our customers' needs and ensuring a smooth shopping experience. From product selection to order support, we aim to respond quickly, solve problems effectively, and make every customer feel valued and satisfied.</p>
      </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
