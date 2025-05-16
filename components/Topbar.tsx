// components/Topbar.tsx
"use client";
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const router = useRouter();

  const handleNotificationClick = () => {
    router.push("/notification");
  };

  return (
    <div>
      <div className="flex flex-row justify-between ps-[17px] pe-[17px] h-[70px] w-full items-center fixed z-50 top-bar-bg border-b border-gray-300 drop-shadow-xl drop-shadow-neutral-50">
        <div className="flex flex-row items-center gap-2">
          <Image src="/images/logo-1.png" height={28} width={28} alt="Logo" />
          <h1 className="text-3xl font-bold">PIRAS</h1>
        </div>
        <div className="text-3xl cursor-pointer" onClick={handleNotificationClick}>
          <IoMdNotificationsOutline />
        </div>
      </div>
    </div>
  );
}
