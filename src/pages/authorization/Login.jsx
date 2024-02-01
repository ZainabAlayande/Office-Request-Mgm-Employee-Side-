import React, { useState } from "react";
import ORMLogo from "../../asset/images/svg/ORMLogo.svg";

const Login = () => {
  const payload = {
    item: "",
    quantity: "",
    purpose: "",
    dueDate: "",
    additionalInformation: "",
  };

  const [data, setData] = useState(payload);

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="h-screen items-center justify-center bg-indigo-950">
      <div className="flex flex-col items-center justify-center p-5">
            <img src={ORMLogo} className="border w-36 h-36"/>
            <h1 className="text-indigo-950 font-bold text-2xl">Office Request Manager</h1>
        </div>

      <div className="p-10 rounded-lg bg-white mt-5">
        <form onSubmit={handleRequestSubmit}>
          <h2 className="text-2xl font-bold mb-5">Request Form</h2>

          <div className="mb-5">
            <label className="block mb-2">Item</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="What do you need"
              onChange={handleInputChange}
              value={data.item}
              name="item"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2">Quantity (If applicable)</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="How many"
              onChange={handleInputChange}
              value={data.quantity}
              name="quantity"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2">Purpose</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="State purpose"
              onChange={handleInputChange}
              value={data.purpose}
              name="purpose"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2">Due Date</label>
            <input
              type="date"
              className="w-full p-2 border rounded"
              onChange={handleInputChange}
              value={data.dueDate}
              name="dueDate"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2">More Information</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="More information"
              onChange={handleInputChange}
              value={data.additionalInformation}
              name="additionalInformation"
            />
          </div>

          <div>
            <button className="bg-indigo-950 text-white text-bold text-lg px-4 py-2 rounded" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

