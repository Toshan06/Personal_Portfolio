import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="form pt-10 bg-gray-900">
      <form onSubmit={handleSubmit} className="text-white p-[2rem] px-[7rem]">
        <div className="flex flex-col gap-2">
          <label>Your Name</label>
          <input
            className="text-lg p-1 bg-gray-700 rounded-lg text-white border-2 border-gray-800"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            className="text-lg p-1 bg-gray-700 rounded-lg text-white border-2 border-gray-700"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label>Message</label>
          <textarea
            className="text-lg p-1 bg-gray-700 rounded-lg text-white border-2 border-gray-700"
            rows="6"
            placeholder="Type your message here."
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex justify-center items-center">
          <button type="submit" className="btn hover:bg-green-500 hover:text-white ease-in-out duration-500 hover:transform hover:translate-y-1 hover: scale-105 bg-[rgb(255,255,0)] text-black border-2 px-3 py-2 font-semibold text-lg rounded-xl">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
