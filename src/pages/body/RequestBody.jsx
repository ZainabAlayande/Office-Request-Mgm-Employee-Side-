import React from "react";
import { getStatusColor, getTextColor } from "../../utils/function/Colour";
import { DATA_DATA } from "../../utils/constant/Data";
import Filter from "../../asset/images/svg/Filter.svg";
import { LuSearch } from "react-icons/lu";
import ArrowOptions from "../../asset/images/svg/ArrowOptions.svg";
import { useState, useEffect } from "react";
import Month from "../molecules/Month";

const RequestBody = () => {

  const [pendingDropDown, setPendingDropDown] = useState(false);
  const [approvedDropDown, setApprovedDropDown] = useState(false);
  const [declinedDropDown, setDeclinedDropDown] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleSelectedMonth = (month) => {
    setSelectedMonth((prevMonth) => {
        console.log("Month -> ", month);
        console.log("Previous Month -> ", prevMonth);
        return month;
      });
    
  };


  useEffect(() => {
    console.log("Selected Month -> ", selectedMonth);

    
    if (selectedMonth !== null) {
      
      console.log("Calling API with selected month:", selectedMonth);
    }
  }, [selectedMonth]);

  return (
    <div>
      <div className="m-5 flex justify-between">

      <div className="font-bold text-2xl">Request</div>
      <div className="">
          <button className="bg-blue-600 pointer-cursor hover:bg-blue-500 rounded-md w-32 mr-2 h-8 text-sm font-bold text-[#FFFFFF]">
              Request Item +
          </button>
        </div>
      </div>

      <div class="flex mt-3 ml-5 h-36 mr-5">

        <div class="rounded-lg bg-white w-1/3 p-5">
          <div className="p-2 flex justify-between">
            <div>
              <p className="font-semibold text-xl">Pending Request</p>
              <p className="mt-8 w-full text-[#0079FF] font-bold text-3xl">25</p>
            </div>
            <div
              className="ml-4 h-7 w-10 rounded-md items-center"
              style={{ backgroundColor: "#EBF5FF" }}
            >
              <img
                src={ArrowOptions}
                alt="No Img"
                className="cursor-pointer w-5 h-5 ml-1.5 mt-0.5"
                onClick={() => setPendingDropDown(!pendingDropDown)}
              />
              {pendingDropDown && (
              <div className="absolute w-20 mt-6 border bg-white rounded-md max-h-48 overflow-y-auto">
                <ul className="list-none month-labels ml-3 p-3 cursor-pointer">
                  <Month setSelectedMonth={handleSelectedMonth}/>
                </ul>
              </div>
            )}
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-white w-1/3 p-5 ml-5">
          <div className="p-2 flex justify-between">
            <div>
              <p className="font-semibold text-xl">Approved Request</p>
              <p className="mt-8 w-full font-bold text-3xl text-[#0EBE8D]">25</p>
            </div>
            <div
              className="ml-4 h-7 w-10 rounded-md items-center"
              style={{ backgroundColor: "#E7F9F4" }}
            >
              <img
                src={ArrowOptions}
                alt="No Img"
                className="cursor-pointer w-5 h-5 ml-2 mt-0.5"
                onClick={() => setApprovedDropDown(!approvedDropDown)}
              />
              {approvedDropDown && (
              <div className="absolute w-20 mt-6 border bg-white rounded-md max-h-48 overflow-y-auto">
                <ul className="list-none month-labels ml-3 p-3 cursor-pointer">
                  <Month setSelectedMonth={handleSelectedMonth}/>
                </ul>
              </div>
            )}
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-white w-1/3 p-5 ml-5">
          <div className="p-2 flex justify-between">
            <div>
              <p className="font-semibold text-xl">Rejected Request</p>
              <p className="mt-8 w-full text-[#FF6A24] font-bold text-3xl">25</p>
            </div>
            <div
              className="ml-4 h-7 w-10 rounded-md items-center"
              style={{ backgroundColor: "#FFE8DE" }}
            >
              <img
                src={ArrowOptions}
                alt="No Img"
                className="cursor-pointer w-5 h-5 ml-2 mt-0.5"
                onClick={() => setDeclinedDropDown(!declinedDropDown)}
              />
              {declinedDropDown && (
              <div className="absolute w-20 mt-6 border bg-white rounded-md max-h-48 overflow-y-auto">
                <ul className="list-none month-labels ml-3 p-3 cursor-pointer">
                  <Month setSelectedMonth={handleSelectedMonth}/>
                </ul>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>

      <div className="border m-5 bg-white rounded-md">
        <div className="flex justify-between m-5">
          <div className="text-bold font-bold">Request History</div>

          <div className="flex">
            <div className=" relative flex items-center text-gray-200 focus-within:text-gray-400">
              <LuSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
              <input
                type="text"
                name="search"
                placeholder="       Search members..."
                autoComplete="off"
                aria-label="Search"
                className="search-bar  pr-3 pl-10 py-2 font-normal text-sm h-8 w-44 placeholder-gray-600  rounded-sm border-none ring-2 ring-gray-100 focus:ring-gray-500 focus:ring-2"
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </div>
            <div className="border items-center justify-center flex ml-3 h-7 w-20 mt-0.5 rounded-sm">
              <p className="font-normal text-sm ">Filter</p>
              <img src={Filter} alt="No Img" className="w-4 h-4 ml-2 mt-0" />
            </div>
          </div>
        </div>

        <div className="m-5">
          <table className="table-auto w-full">
            <thead className="border">
              <tr className="">
                <th className="activities-heading px-4 py-2 text-left">
                  Activity
                </th>
                <th className="activities-heading px-4 py-2 text-left">
                  Member ID
                </th>
                <th className="activities-heading px-4 py-2 text-left">
                  Full Name
                </th>
                <th className="activities-heading px-4 py-2 text-left">
                  Amount
                </th>
                <th className="activities-heading px-4 py-2 text-left">
                  Date and Time
                </th>
                <th className="activities-heading px-4 py-2 text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {DATA_DATA.map((item, index) => (
                <tr key={index}>
                  <td
                    style={{ color: "#484949" }}
                    className="recent-activities-data  px-4 py-2"
                  >
                    {item.activity}
                  </td>
                  <td
                    style={{ color: "#484949" }}
                    className="recent-activities-data  px-4 py-2"
                  >
                    {item.memberId}
                  </td>
                  <td
                    style={{ color: "#484949" }}
                    className="recent-activities-data  px-4 py-2"
                  >
                    {item.fullName}
                  </td>
                  <td
                    style={{ color: "#484949" }}
                    className="recent-activities-data  px-4 py-2"
                  >
                    {item.amount}
                  </td>
                  <td
                    style={{ color: "#484949" }}
                    className="recent-activities-data  px-4 py-2"
                  >
                    {item.date}
                  </td>
                  <td className="px-4 py-2">
                    {item.status && (
                      <div
                        className=" rounded-full items-align h-6 inline-block"
                        style={{
                          backgroundColor: getStatusColor(item.status),
                          color: getTextColor(item.status),
                        }}
                      >
                        {item.status && (
                          <span className="recent-activities-data p-2">
                            {item.status}
                          </span>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RequestBody;
