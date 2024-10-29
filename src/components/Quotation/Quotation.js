import React, { useState } from "react";
import emailjs from "emailjs-com";
import Loader from '../Loader/Loader'; // Import the Loader component

const GetQuotationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    products: [],
    quantity: "",
    additionalRequests: ""
  });

  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [loading, setLoading] = useState(false); // State for loading indicator

  const productOptions = [
    "Beef",
    "Goat",
    "Fish",
    "Chicken",
    "Lamb",
    "Fruits"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleProductSelection = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const products = checked
        ? [...prevData.products, value]
        : prevData.products.filter((product) => product !== value);
      return { ...prevData, products };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    // Prepare the data to send via EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      products: formData.products.join(", "),
      quantity: formData.quantity,
      additionalRequests: formData.additionalRequests,
    };

    emailjs.send(
      "service_9jnfw7o", // Replace with your service ID
      "template_yonfifh", // Replace with your template ID
      templateParams,
      "WcL7ygsbpnzObqfqh" // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log("Email sent successfully!", response.status, response.text);
      setAlert({ show: true, message: "Your quotation request has been submitted.", type: "success" });
      setFormData({
        name: "",
        email: "",
        phone: "",
        products: [],
        quantity: "",
        additionalRequests: ""
      });
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
      setAlert({ show: true, message: "There was an error sending your request. Please try again.", type: "error" });
    })
    .finally(() => {
      setLoading(false); // Stop loading
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900" style={{ color: '#d62929' }}>
          Request a Quotation
        </h2>

        {alert.show && (
          <div className={`mb-4 p-4 rounded ${alert.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {alert.message}
          </div>
        )}

        {loading && <Loader />} {/* Use the Loader component */}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-d62929 transition ease-in-out duration-200"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-d62929 transition ease-in-out duration-200"
              placeholder="example@domain.com"
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-d62929 transition ease-in-out duration-200"
              placeholder="123-456-7890"
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium text-gray-700">Select Products</label>
            <div className="grid grid-cols-2 gap-4">
              {productOptions.map((product) => (
                <label key={product} className="flex items-center space-x-2 text-gray-700">
                  <input
                    type="checkbox"
                    value={product}
                    onChange={handleProductSelection}
                    className="text-d62929 focus:ring-d62929"
                  />
                  <span>{product}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="quantity" className="text-sm font-medium text-gray-700">Quantity (Kgs)</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-d62929 transition ease-in-out duration-200"
              placeholder="Enter quantity in kgs"
              min="15"
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="additionalRequests" className="text-sm font-medium text-gray-700">Additional Requests</label>
            <textarea
              id="additionalRequests"
              name="additionalRequests"
              value={formData.additionalRequests}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-d62929 transition ease-in-out duration-200"
              rows="4"
              placeholder="Any specific requirements?"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-md"
            style={{ backgroundColor: '#d62929' }}
          >
            Get Quotation
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetQuotationForm;
