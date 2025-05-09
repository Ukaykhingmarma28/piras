"use client";
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
export default function Topbar() {
  return (
    <div>
      <div className="flex flex-row justify-between ps-[17px] pe-[17px] h-[70px] w-full items-center fixed z-50 top-bar-bg">
        <div className=" flex flex-row items-center gap-2">
            <Image src="/images/logo-1.png" height={28} width={28} alt="Logo"/>
            <h1 className="text-3xl font-bold">Pookie IRAS</h1>
        </div>
        <div className="text-3xl"><IoMdNotificationsOutline/></div>
      </div>
    </div>
  );
}
