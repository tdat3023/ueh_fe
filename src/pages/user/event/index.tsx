import BackToTopButton from '@/components/BackToTopButton';
import Footer from '@/components/Footer';
import UserNavBar from '../../../components/NavBar';
import React, { useState } from 'react';

type Event = {
  id: number;
  title: string;
  description: string;
  image: string;
  time: string;
  location: string;
};

const EventList: React.FC = () => {
  const events: Event[] = [
    {
      id: 1,
      title: 'Sự kiện 1',
      description: 'Mô tả sự kiện 1.',
      image: 'https://via.placeholder.com/300',
      time: '10/10/2024, 9:00 AM',
      location: 'Hội trường A, UEH',
    },
    {
      id: 2,
      title: 'Sự kiện 2',
      description: 'Mô tả sự kiện 2.',
      image: 'https://via.placeholder.com/300',
      time: '15/10/2024, 10:00 AM',
      location: 'Hội trường B, UEH',
    },
    {
      id: 3,
      title: 'Sự kiện 3',
      description: 'Mô tả sự kiện 3.',
      image: 'https://via.placeholder.com/300',
      time: '20/10/2024, 2:00 PM',
      location: 'Hội trường C, UEH',
    },
    {
      id: 4,
      title: 'Sự kiện 4',
      description: 'Mô tả sự kiện 4.',
      image: 'https://via.placeholder.com/300',
      time: '25/10/2024, 1:00 PM',
      location: 'Hội trường D, UEH',
    },
    {
      id: 5,
      title: 'Sự kiện 5',
      description: 'Mô tả sự kiện 5.',
      image: 'https://via.placeholder.com/300',
      time: '30/10/2024, 3:00 PM',
      location: 'Hội trường E, UEH',
    },
    {
      id: 6,
      title: 'Sự kiện 6',
      description: 'Mô tả sự kiện 6.',
      image: 'https://via.placeholder.com/300',
      time: '05/11/2024, 10:00 AM',
      location: 'Hội trường F, UEH',
    },
    {
      id: 7,
      title: 'Sự kiện 7',
      description: 'Mô tả sự kiện 7.',
      image: 'https://via.placeholder.com/300',
      time: '10/11/2024, 8:00 AM',
      location: 'Hội trường G, UEH',
    },
    {
      id: 8,
      title: 'Sự kiện 8',
      description: 'Mô tả sự kiện 8.',
      image: 'https://via.placeholder.com/300',
      time: '15/11/2024, 11:00 AM',
      location: 'Hội trường H, UEH',
    },
    {
      id: 9,
      title: 'Sự kiện 9',
      description: 'Mô tả sự kiện 9.',
      image: 'https://via.placeholder.com/300',
      time: '20/11/2024, 5:00 PM',
      location: 'Hội trường I, UEH',
    },
    {
      id: 10,
      title: 'Sự kiện 10',
      description: 'Mô tả sự kiện 10.',
      image: 'https://via.placeholder.com/300',
      time: '25/11/2024, 9:00 AM',
      location: 'Hội trường J, UEH',
    },
    {
      id: 11,
      title: 'Sự kiện 11',
      description: 'Mô tả sự kiện 11.',
      image: 'https://via.placeholder.com/300',
      time: '30/11/2024, 2:00 PM',
      location: 'Hội trường K, UEH',
    },
    {
      id: 12,
      title: 'Sự kiện 12',
      description: 'Mô tả sự kiện 12.',
      image: 'https://via.placeholder.com/300',
      time: '05/12/2024, 4:00 PM',
      location: 'Hội trường L, UEH',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 5;

  // Tính toán các sự kiện cần hiển thị
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  // Tạo danh sách số trang
  const totalPages = Math.ceil(events.length / eventsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <UserNavBar />
      <div className="flex-grow">
        <div className=" flex flex-col space-y-6">
          {/* Danh sách sự kiện */}
          <div className=" flex-grow p-6">
            <div className="flex flex-col space-y-6">
              {currentEvents.map((event) => (
                <div key={event.id} className="grid grid-cols-1 gap-0 bg-red-700 sm:grid-cols-2">
                  {' '}
                  {/* Đặt chiều rộng cố định */}
                  <div className="flex items-center justify-center">
                    {' '}
                    {/* Căn giữa ảnh */}
                    <img src={event.image} alt={event.title} className="m-4 rounded-lg" />
                  </div>
                  <div className="flex flex-col justify-center">
                    {' '}
                    {/* Căn giữa nội dung */}
                    <h2 className="mb-2 text-2xl font-bold text-gray-800">{event.title}</h2>
                    <p className="mb-2 text-gray-600">Thời gian: {event.time}</p>
                    <p className="mb-2 text-gray-600">Địa điểm: {event.location}</p>
                    <p className="text-gray-600">{event.description}</p>
                    <a href="#" className="mt-4 block text-blue-700 hover:underline">
                      Xem chi tiết
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Điều hướng phân trang */}
          <div className="flex items-center justify-center py-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`mx-2 rounded bg-blue-500 px-4 py-2 text-white ${
                currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-700'
              }`}
            >
              Trước
            </button>
            <span className="mx-2">
              Trang {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`mx-2 rounded bg-blue-500 px-4 py-2 text-white ${
                currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-700'
              }`}
            >
              Tiếp
            </button>
          </div>
        </div>
      </div>
      <BackToTopButton />
      <Footer />
    </div>
  );
};

export default EventList;
