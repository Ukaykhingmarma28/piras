// "use client";
// import React, { useState, useRef } from "react";
// import { motion, useDragControls } from "framer-motion";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { FiChevronDown, FiX, FiPlus } from "react-icons/fi";

// interface EventModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const examTypes = ["Quiz", "Mid", "Final"];

// export default function EventModal({ isOpen, onClose }: EventModalProps) {
//   const [tab, setTab] = useState<"Exam" | "Event" | "Task">("Exam");
//   const [title, setTitle] = useState("");
//   const [examType, setExamType] = useState("");
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [date, setDate] = useState<Date | null>(new Date());
//   const [startTime, setStartTime] = useState<Date | null>(new Date());
//   const [endTime, setEndTime] = useState<Date | null>(new Date());
//   const dragControls = useDragControls();
//   const drawerRef = useRef<HTMLDivElement>(null);

//   if (!isOpen) return null;

//   // Custom input for date & time (more modern, touchable)
//   const CustomInput = React.forwardRef<HTMLInputElement, any>(
//     ({ value, onClick, icon, placeholder }, ref) => (
//       <button
//         onClick={onClick}
//         type="button"
//         className="flex items-center w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-left text-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
//       >
//         <span className="flex-1">{value || <span className="text-gray-400">{placeholder}</span>}</span>
//         {icon && <span className="ml-2 text-blue-500">{icon}</span>}
//       </button>
//     )
//   );

//   return (
//     <div className="fixed inset-0 z-[100] bg-black/40 flex items-end justify-center transition">

//       {/* Drawer */}
//       <motion.div
//         ref={drawerRef}
//         drag="y"
//         dragListener={true}
//         dragConstraints={{ top: 0, bottom: 0 }}
//         dragElastic={0.3}
//         dragControls={dragControls}
//         initial={{ y: "100%" }}
//         animate={{ y: 0 }}
//         exit={{ y: "100%" }}
//         transition={{ type: "spring", stiffness: 400, damping: 35 }}
//         className="relative w-full bg-white rounded-3xl pt-10 px-5 pb-8 h-[35em]"
//         style={{ touchAction: "none" }}
//       >

//         {/* Header Row */}
//         <div className="flex justify-between items-center mb-4">
//           {/* Close Button */}
//             <button
//               className="text-gray-400 hover:text-gray-700 p-1"
//               onClick={onClose}
//               aria-label="Close"
//             >
//               <FiX size={22} />
//             </button>
//           <h2 className="text-lg font-semibold">New {tab}</h2>
//           <div className="flex items-center gap-2">
//             {/* Add Button */}
//             <button
//               className="flex-1 rounded-xl px-4 bg-blue-500 p-2 hover:bg-blue-600 shadow text-white"
//               onClick={onClose /* Replace with add event handler! */}
//               aria-label="Add"
//             >
//               Add
//               {/* <FiPlus size={20} /> */}
//             </button>

//           </div>
//         </div>

//         {/* Title Field */}
//         <input
//           type="text"
//           placeholder="Enter title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full mb-4 px-4 py-3 text-md font-medium bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         {/* Tabs */}
//         <div className="flex gap-2 mb-4">
//           {["Exam", "Event", "Task"].map((t) => (
//             <button
//               key={t}
//               onClick={() => setTab(t as any)}
//               className={`flex-1 py-2 rounded-xl font-semibold transition ${
//                 tab === t
//                   ? "bg-blue-500 text-white shadow"
//                   : "bg-gray-100 text-gray-800"
//               }`}
//             >
//               {t}
//             </button>
//           ))}
//         </div>

//         {/* Exam Dropdown */}
//         {tab === "Exam" && (
//           <div className="relative mb-4">
//             <button
//               type="button"
//               onClick={() => setShowDropdown((prev) => !prev)}
//               className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 rounded-xl border border-gray-200"
//             >
//               <span className={examType ? "text-gray-800" : "text-gray-400"}>
//                 {examType || "Select Exam Type"}
//               </span>
//               <FiChevronDown />
//             </button>
//             {showDropdown && (
//               <ul className="absolute z-10 top-full left-0 w-full bg-white border border-gray-100 rounded-xl mt-1 shadow-lg">
//                 {examTypes.map((type) => (
//                   <li
//                     key={type}
//                     onClick={() => {
//                       setExamType(type);
//                       setShowDropdown(false);
//                     }}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-xl"
//                   >
//                     {type}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         )}

//         {/* Date Picker */}
//         <div className="w-full mb-4">
//           <label className="block  text-gray-700 font-medium mb-2">Pick a Date</label>
//           <DatePicker
//             selected={date}
//             onChange={(d) => setDate(d)}
//             dateFormat="dd MMMM, yyyy"
//             placeholderText="Choose a date"
//             customInput={
//               <CustomInput icon={<FiChevronDown />} placeholder="Choose a date" />
//             }
//             calendarClassName="!rounded-xl !border !shadow-lg"
//             popperClassName="!z-[9999]"
//           />
//         </div>

//         {/* Start and End Time - single row */}
//         <div className="flex gap-3 mb-6">
//           <div className="w-1/2">
//             <label className="block text-gray-700 font-medium mb-2">
//               Start Time
//             </label>
//             <DatePicker
//               selected={startTime}
//               onChange={(t) => setStartTime(t)}
//               showTimeSelect
//               showTimeSelectOnly
//               timeIntervals={15}
//               timeCaption="Start"
//               dateFormat="h:mm aa"
//               placeholderText="Start Time"
//               customInput={
//                 <CustomInput icon={<FiChevronDown />} placeholder="Start Time" />
//               }
//               calendarClassName="!rounded-xl !border !shadow-lg "
//               popperClassName="!z-[9999]"
//             />
//           </div>
//           <div className="w-1/2">
//             <label className="block text-gray-700 font-medium mb-2">
//               End Time
//             </label>
//             <DatePicker
//               selected={endTime}
//               onChange={(t) => setEndTime(t)}
//               showTimeSelect
//               showTimeSelectOnly
//               timeIntervals={15}
//               timeCaption="End"
//               dateFormat="h:mm aa"
//               placeholderText="End Time"
//               customInput={
//                 <CustomInput icon={<FiChevronDown />} placeholder="End Time" />
//               }
//               calendarClassName="!rounded-xl !border !shadow-lg "
//               popperClassName="!z-[9999]"
//             />
//           </div>
//         </div>
//       </motion.div>

//     </div>
//   );
// }

// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { motion, useDragControls } from "framer-motion";
// import AirDatepicker from "air-datepicker";
// import "air-datepicker/air-datepicker.css";
// import { FiChevronDown, FiX } from "react-icons/fi";
// import localEn from "air-datepicker/locale/en";
// import { TimePicker } from "rsuite";
// import "rsuite/dist/rsuite-no-reset.min.css";

// interface EventModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const examTypes = ["Quiz", "Mid", "Final"];

// export default function EventModal({ isOpen, onClose }: EventModalProps) {
//   const [tab, setTab] = useState<"Exam" | "Event" | "Task">("Exam");
//   const [title, setTitle] = useState("");
//   const [examType, setExamType] = useState("");
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [date, setDate] = useState<Date | null>(new Date());
//   const [startTime, setStartTime] = useState<Date | null>(new Date());
//   const [endTime, setEndTime] = useState<Date | null>(new Date(new Date().setHours(new Date().getHours() + 1)));
//   const dragControls = useDragControls();
//   const drawerRef = useRef<HTMLDivElement>(null);

//   // Air Datepicker ref
//   const dateInputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (!isOpen || !dateInputRef.current) return;
//     // eslint-disable-next-line
//     const dp: any = new AirDatepicker(dateInputRef.current, {
//       locale: localEn,
//       autoClose: true,
//       selectedDates: [date || new Date()],
//       onSelect: ({ date }) => {
//         if (Array.isArray(date)) {
//           setDate(date[0] || null);
//         } else {
//           setDate(date);
//         }
//       },
//       position({ $datepicker, $target, $pointer }) {
//         let coords = $target.getBoundingClientRect(),
//           dpHeight = $datepicker.clientHeight,
//           dpWidth = $datepicker.clientWidth;

//         let top = coords.y + coords.height / 2 + window.scrollY - dpHeight / 2;
//         let left = coords.x + coords.width / 2 - dpWidth / 2;

//         $datepicker.style.left = `${left}px`;
//         $datepicker.style.top = `${top}px`;

//         $pointer.style.display = "none";
//       },
//     });
//     return () => dp.destroy();
//     // eslint-disable-next-line
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-[100] bg-black/40 flex items-end justify-center transition">
//       {/* Drawer */}
//       <motion.div
//         ref={drawerRef}
//         drag="y"
//         dragListener={true}
//         dragConstraints={{ top: 0, bottom: 0 }}
//         dragElastic={0.3}
//         dragControls={dragControls}
//         initial={{ y: "100%" }}
//         animate={{ y: 0 }}
//         exit={{ y: "100%" }}
//         transition={{ type: "spring", stiffness: 400, damping: 35 }}
//         className="relative w-full bg-white rounded-3xl pt-10 px-5 pb-8"
//         style={{ touchAction: "none", overflow: "visible" }}
//       >
//         {/* Header Row */}
//         <div className="flex justify-between items-center mb-4">
//           {/* Close Button */}
//           <button
//             className="text-gray-400 hover:text-gray-700 p-1"
//             onClick={onClose}
//             aria-label="Close"
//           >
//             <FiX size={22} />
//           </button>
//           <h2 className="text-lg font-semibold">New {tab}</h2>
//           <div className="flex items-center gap-2">
//             {/* Add Button */}
//             <button
//               className="flex-1 rounded-xl px-4 bg-blue-500 p-2 hover:bg-blue-600 shadow text-white"
//               onClick={onClose /* Replace with add event handler! */}
//               aria-label="Add"
//             >
//               Add
//             </button>
//           </div>
//         </div>

//         {/* Title Field */}
//         <input
//           type="text"
//           placeholder="Enter title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full mb-4 px-4 py-3 text-md font-medium bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         {/* Tabs */}
//         <div className="flex gap-2 mb-4">
//           {["Exam", "Event", "Task"].map((t) => (
//             <button
//               key={t}
//               onClick={() => setTab(t as any)}
//               className={`flex-1 py-2 rounded-xl font-semibold transition ${
//                 tab === t
//                   ? "bg-blue-500 text-white shadow"
//                   : "bg-gray-100 text-gray-800"
//               }`}
//             >
//               {t}
//             </button>
//           ))}
//         </div>

//         {/* Exam Dropdown */}
//         {tab === "Exam" && (
//           <div className="relative mb-4">
//             <button
//               type="button"
//               onClick={() => setShowDropdown((prev) => !prev)}
//               className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 rounded-xl border border-gray-200"
//             >
//               <span className={examType ? "text-gray-800" : "text-gray-400"}>
//                 {examType || "Select Exam Type"}
//               </span>
//               <FiChevronDown />
//             </button>
//             {showDropdown && (
//               <ul className="absolute z-10 top-full left-0 w-full bg-white border border-gray-100 rounded-xl mt-1 shadow-lg">
//                 {examTypes.map((type) => (
//                   <li
//                     key={type}
//                     onClick={() => {
//                       setExamType(type);
//                       setShowDropdown(false);
//                     }}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-xl"
//                   >
//                     {type}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         )}

//         {/* Date Picker */}
//         <div className="w-full mb-4">
//           <label className="block text-gray-700 font-medium mb-2">
//             Pick a Date
//           </label>
//           <input
//             ref={dateInputRef}
//             readOnly
//             value={
//               date
//                 ? date.toLocaleDateString("en-GB", {
//                     day: "2-digit",
//                     month: "long",
//                     year: "numeric",
//                   })
//                 : ""
//             }
//             placeholder="Choose a date"
//             className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
//           />
//         </div>

//         {/* Start and End Time - single row */}
//         <div className="flex gap-3 mb-6">
//           <div className="w-1/2">
//             <label className="block text-gray-700 font-medium mb-2">
//               Start Time
//             </label>
//             <TimePicker
//               format="hh:mm aa"
//               block
//               value={startTime}
//               onChange={setStartTime}
//               cleanable={false}
//               size="lg"

//             />
//           </div>
//           <div className="w-1/2">
//             <label className="block text-gray-700 font-medium mb-2">
//               End Time
//             </label>
//             <TimePicker
//               format="hh:mm aa"
//               value={endTime}
//               onChange={setEndTime}
//               cleanable={false}
//               placement="auto"
//               block
//               size="lg"
//               className="time"
//             />
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import { motion, useDragControls } from "framer-motion";
import { FiChevronDown, FiX } from "react-icons/fi";
import {
  DatePicker,
  TimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TextField } from "@mui/material";
import "rsuite/dist/rsuite-no-reset.min.css"; // Only needed if you use rsuite elsewhere

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
  const [endTime, setEndTime] = useState<Date | null>(
    new Date(new Date().setHours(new Date().getHours() + 1))
  );
  const dragControls = useDragControls();
  const drawerRef = React.useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="fixed inset-0 z-[100] bg-black/40 flex items-end justify-center transition">
        {/* Drawer */}
        <motion.div
          ref={drawerRef}
          drag="y"
          dragListener={true}
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.3}
          dragControls={dragControls}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
          className="relative w-full bg-white rounded-3xl pt-10 px-5 pb-8 h-[35em]"
          style={{ touchAction: "none", overflow: "visible" }}
        >
          {/* Header Row */}
          <div className="flex justify-between items-center mb-4">
            <button
              className="text-gray-400 hover:text-gray-700 p-1"
              onClick={onClose}
              aria-label="Close"
            >
              <FiX size={22} />
            </button>
            <h2 className="text-lg font-semibold">New {tab}</h2>
            <div className="flex items-center gap-2">
              <button
                className="flex-1 rounded-xl px-4 bg-blue-500 p-2 hover:bg-blue-600 shadow text-white"
                onClick={onClose /* Replace with add event handler! */}
                aria-label="Add"
              >
                Add
              </button>
            </div>
          </div>

          {/* Title Field */}
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-4 px-4 py-3 text-md font-medium bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Tabs */}
          <div className="flex gap-2 mb-4">
            {["Exam", "Event", "Task"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t as any)}
                className={`flex-1 py-2 rounded-xl font-semibold transition ${
                  tab === t
                    ? "bg-blue-500 text-white shadow"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Exam Dropdown */}
          {tab === "Exam" && (
            <div className="relative mb-4">
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

          {/* MUI Date Picker */}
          <div className="w-full mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Pick a Date
            </label>
            <DatePicker
              value={date}
              onChange={setDate}
              slotProps={{
                textField: {
                  fullWidth: true,
                  size: "small",
                  sx: { bgcolor: "#f9fafb", borderRadius: 2 },
                  placeholder: "Choose a date",
                },
              }}
            />
          </div>

          {/* Start and End Time - single row */}
          <div className="flex gap-3 mb-6">
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium mb-2">
                Start Time
              </label>
              <TimePicker
                value={startTime}
                onChange={setStartTime}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    size: "small",
                    sx: { bgcolor: "#f9fafb", borderRadius: 2 },
                    placeholder: "Start Time",
                  },
                }}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium mb-2">
                End Time
              </label>
              <TimePicker
                value={startTime}
                onChange={setStartTime}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    size: "small",
                    sx: { bgcolor: "#f9fafb", borderRadius: 2 },
                    placeholder: "Start Time",
                  },
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </LocalizationProvider>
  );
}
