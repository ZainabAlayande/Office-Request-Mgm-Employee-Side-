import React from "react";
import { getStatusColor, getTextColor } from "../../utils/function/Colour";
import { DATA_DATA } from "../../utils/constant/Data";
import Filter from "../../asset/images/svg/Filter.svg";
import { LuSearch } from "react-icons/lu";

const DashboardBody = () => {
  return (
    <div>
      <div className="m-5">Dashboard Overview</div>

      <div class="flex mt-3 ml-2 h-48">
        <div class="rounded-md bg-white w-64 p-5 m-3">Div 1</div>

        <div class="rounded-md bg-white w-64 p-5 m-3">Div 2</div>

        <div class="rounded-md bg-white w-64 p-5 m-3">Div 3</div>

        <div class="rounded-md bg-white w-64 p-5 m-3">Div 4</div>
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

        <div className="">
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

export default DashboardBody;
