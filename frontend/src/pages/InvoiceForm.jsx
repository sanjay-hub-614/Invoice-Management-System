import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function InvoiceForm() {
  const navigate = useNavigate();

  const [invoice, setInvoice] = useState({
    invoiceNumber: "",
    clientName: "",
    date: "",
    amount: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/invoices", invoice);
    navigate("/home");
  };

  return (
    <div className="container">
      <h2>Create Invoice</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="invoiceNumber"
          placeholder="Invoice Number"
          onChange={handleChange}
          required
        />

        <input
          name="clientName"
          placeholder="Client Name"
          onChange={handleChange}
          required
        />

        <input
          name="date"
          type="date"
          onChange={handleChange}
          required
        />

        <input
          name="amount"
          type="number"
          placeholder="Amount"
          onChange={handleChange}
          required
        />

        <select name="status" onChange={handleChange}>
          <option>Pending</option>
          <option>Paid</option>
          <option>Unpaid</option>
        </select>

        <button>Add Invoice</button>
      </form>
    </div>
  );
}

export default InvoiceForm;
