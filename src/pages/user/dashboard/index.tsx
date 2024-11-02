import React from 'react';
import UserNavBar from '../../../components/NavBar';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';
import ReviewHomePage from '../homepage/review';
import { images } from '@/constants';
import EventsHomePage from '../homepage/events';

const UserDashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <UserNavBar />
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between ">
        {/*  */}
        <div className="relative">
          <img className="h-auto w-full" src={images.homepage1} alt="Homepage" />
          <div className="absolute inset-0 bg-black opacity-40" /> {/* Overlay */}
          <div className="absolute left-20 top-1/2 -translate-y-1/2 transform">
            <h1 className="font-poppins text-center text-[40px] font-bold leading-tight text-white md:text-left md:text-[60px] md:leading-[80px] lg:text-[80px] lg:leading-[100px] xl:text-[100px] xl:leading-[120px]">
              CHÀO MỪNG ĐẾN VỚI MYUEH
            </h1>
          </div>
        </div>

        {/*  */}
        <div className="mb-16 mt-8 flex w-screen flex-col items-center justify-center">
          <div className="m-8 w-full">
            <p className=" font-poppins mb-2 ml-14 text-2xl text-orange-600">Về chúng tôi</p>
            <div className="mx-14">
              <h1 className="font-poppins flex-1 text-left text-2xl">Chúng tôi làm việc để đưa UEH đến gần bạn hơn</h1>
              <h1 className="font-poppins flex-1 text-left text-2xl">– Bạn hiểu UEH hơn, UEH hiểu bạn hơn.</h1>
            </div>
          </div>
          <img
            className="h-auto w-[80%] rounded-3xl shadow-xl"
            src={images.homepage2}
            alt="Homepage"
            style={{ boxShadow: '0 4px 30px rgba(0, 0, 0, 0.7)' }}
          />
        </div>

        {/*  */}
        <ReviewHomePage />
        <EventsHomePage />
      </div>

      <BackToTopButton />
      <Footer />
    </div>
  );
};

export default UserDashboard;
