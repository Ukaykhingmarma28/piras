// pages/notifications.tsx
"use client";
import { useRouter } from "next/navigation";
import { FiExternalLink } from "react-icons/fi";
import { IoMdArrowBack } from "react-icons/io";

const notifications = [
  { id: 1, club: "Dance Club", title: "Dance Event", date: "11-DEC-2024, 11:10 AM" },
  { id: 2, club: "IEECS", title: "PROJECT SHOWCASE", date: "10-DEC-2024, 11:10 AM" },
  { id: 3, club: "MUSIC CLUB", title: "Music Event", date: "09-DEC-2024, 11:10 AM" },
  { id: 4, club: "MUSIC CLUB", title: "Music Event", date: "09-DEC-2024, 11:10 AM" },
];

export default function NotificationsPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="pt-[20px] px-[17px] bg-[#F5F5F5] min-h-screen">
      {/* Back Button */}
      <div className="flex items-center gap-2 mb-4 cursor-pointer">
        <IoMdArrowBack size={24}  onClick={handleBack}/>
        <h1 className="text-2xl font-bold">Notice</h1>
      </div>

      {/* Notification Cards */}
      <div className="space-y-6">
        {notifications.map((notice) => (
          <div
            key={notice.id}
            className="flex justify-between items-center bg-[#F8FAFF] p-4 rounded-lg shadow-sm h-36 border border-gray-200"
          >
            <div>
              <p className="text-[#6C63FF] font-semibold">{notice.club}</p>
              <h2 className="text-lg font-bold">{notice.title}</h2>
              <p className="text-gray-500">{notice.date}</p>
            </div>
            <div className="text-[#6C63FF] bg-white p-2 rounded-lg">
              <FiExternalLink size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
