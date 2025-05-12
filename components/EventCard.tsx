import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineClockCircle, AiOutlineUser, AiOutlineBell } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { BsSquareFill } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EventModal({ isOpen, onClose }: EventModalProps) {
  const [eventType, setEventType] = useState("Event");
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [allDay, setAllDay] = useState(false);
  const [guests, setGuests] = useState("");

  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl px-[13px]">
      <div className="bg-white text-black rounded-2xl w-full max-w-lg p-6 relative shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <button onClick={onClose} className="text-blue-400 text-lg">Cancel</button>
          <h2 className="text-lg font-semibold">Add title</h2>
          <button className="text-blue-400 text-lg">Save</button>
        </div>

        {/* Title Input */}
        <input
          type="text"
          placeholder="Add title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-gray-200 text-lg text-black mb-4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Event Type Tabs */}
        <div className="flex gap-2 mb-4">
          {["Event", "Task"].map((type) => (
            <button
              key={type}
              onClick={() => setEventType(type)}
              className={`flex-1 py-2 rounded-lg ${
                eventType === type
                  ? "bg-blue-400 text-white border border-gray-300"
                  : "bg-gray-200 text-black border border-gray-300"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* All-Day Toggle */}
        <div className="flex items-center gap-4 mb-4">
          <AiOutlineClockCircle size={22} />
          <label className="flex-1 text-black">All-day</label>
          <input
            type="checkbox"
            checked={allDay}
            onChange={(e) => setAllDay(e.target.checked)}
            className="w-6 h-6 rounded-full bg-[#333] border-gray-500"
          />
        </div>

        {/* Date and Time Pickers */}
        <div className="flex flex-col gap-4 mb-4">
          <div className="ms-9">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect={!allDay}
              dateFormat={allDay ? "yyyy-MM-dd" : "Pp"}
              placeholderText="Start Date and Time"
              className="w-full bg-gray-200 text-black px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="ms-9">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              showTimeSelect={!allDay}
              dateFormat={allDay ? "yyyy-MM-dd" : "Pp"}
              placeholderText="End Date and Time"
              className="w-full bg-gray-200 text-black px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Add Guests */}
        <div className="flex items-center gap-4 mb-4">
          <AiOutlineUser size={22} />
          <input
            type="text"
            placeholder="Add guests (comma separated)"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="flex-1 bg-gray-200 text-black px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
