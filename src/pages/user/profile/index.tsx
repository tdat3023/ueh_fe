import React from 'react';
import UserNavBar from '../../../components/NavBar';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';
import ReviewHomePage from '../homepage/review';

const UserProfile: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <UserNavBar />
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between ">
        {/*  */}
        <ReviewHomePage />
      </div>

      <BackToTopButton />
      <Footer />
    </div>
  );
};

export default UserProfile;
