import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

function Home() {
  const [invoices, setInvoices] = useState([]);

  const fetchInvoices = async () => {
    const res = await API.get("/invoices");
    setInvoices(res.data);
  };

  const deleteInvoice = async (id) => {
    await API.delete(`/invoices/${id}`);
    fetchInvoices();
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  return (
    <div className="container">
      <h2>Invoices</h2>

      <Link to="/invoice">
        <button>Add Invoice</button>
      </Link>

      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Client</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {invoices.map((inv) => (
            <tr key={inv.id}>
              <td>{inv.invoiceNumber}</td>
              <td>{inv.clientName}</td>
              <td>{inv.date}</td>
              <td>₹{inv.amount}</td>
              <td>{inv.status}</td>
              <td>
                <button onClick={() => deleteInvoice(inv.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
