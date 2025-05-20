"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiChevronDown } from "react-icons/fi";

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const examTypes = ["Quiz", "Mid", "Final"];

export default function EventModal({ isOpen, onClose }: EventModalProps) {
  const [tab, setTab] = useState<"Exam" | "Event" | "Task">("Exam");
  const [title, setTitle] = useState("");
  const [examType, setExamType] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [date, setDate] = useState<Date | null>(new Date());
  const [startTime, setStartTime] = useState<Date | null>(new Date());
  const [endTime, setEndTime] = useState<Date | null>(new Date());

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/30 px-2 py-6 sm:px-4">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black font-medium"
          >
            Cancel
          </button>
          <h2 className="text-lg font-semibold text-center">Add New Item</h2>
          <div className="w-[60px]" /> {/* Empty for alignment */}
        </div>

        {/* Title Input */}
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-5 px-4 py-3 text-md font-medium bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Tabs */}
        <div className="flex gap-2 mb-5">
          {["Exam", "Event", "Task"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t as any)}
              className={`flex-1 py-2 rounded-xl font-semibold transition ${
                tab === t
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Exam Dropdown */}
        {tab === "Exam" && (
          <div className="relative mb-5">
            <button
              type="button"
              onClick={() => setShowDropdown((prev) => !prev)}
              className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 rounded-xl border border-gray-200"
            >
              <span className={examType ? "text-gray-800" : "text-gray-400"}>
                {examType || "Select Exam Type"}
              </span>
              <FiChevronDown />
            </button>
            {showDropdown && (
              <ul className="absolute z-10 top-full left-0 w-full bg-white border border-gray-100 rounded-xl mt-1 shadow-lg">
                {examTypes.map((type) => (
                  <li
                    key={type}
                    onClick={() => {
                      setExamType(type);
                      setShowDropdown(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-xl"
                  >
                    {type}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Date Picker */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Pick a Date
          </label>
          <DatePicker
            selected={date}
            onChange={(d) => setDate(d)}
            dateFormat="dd MMMM, yyyy"
            className="w-full px-4 py-3 text-md rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholderText="Choose a date"
            popperPlacement="bottom"
            popperClassName="react-datepicker-popper"
          />
        </div>

        {/* Start and End Time Pickers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Start Time
            </label>
            <DatePicker
              selected={startTime}
              onChange={(t) => setStartTime(t)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Start"
              dateFormat="h:mm aa"
              className="w-full px-4 py-3 text-md rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholderText="Start Time"
              popperPlacement="bottom"
              popperClassName="react-datepicker-popper"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              End Time
            </label>
            <DatePicker
              selected={endTime}
              onChange={(t) => setEndTime(t)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="End"
              dateFormat="h:mm aa"
              className="w-full px-4 py-3 text-md rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholderText="End Time"
              popperPlacement="bottom"
              popperClassName="react-datepicker-popper"
            />
          </div>
        </div>

        {/* Add Button */}
        <button
          onClick={() => {
            // Handle add event logic here
            onClose();
          }}
          className="w-full py-3 bg-blue-500 text-white rounded-xl font-semibold text-lg hover:bg-blue-600 transition"
        >
          Add {tab}
        </button>
      </div>
    </div>
  );
}
