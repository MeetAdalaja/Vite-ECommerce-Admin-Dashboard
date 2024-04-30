import { Column } from "react-table";
import AdminSidebar from "../components/AdminSidebar"
import { ReactElement, useCallback, useState } from "react";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";



interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user"
  },
  {
    Header: "Amount",
    accessor: "amount"
  },
  {
    Header: "Discount",
    accessor: "discount"
  },
  {
    Header: "Quantity",
    accessor: "quantity"
  },
  {
    Header: "Status",
    accessor: "status"
  },
  {
    Header: "Action",
    accessor: "action"
  }
];

const arr: DataType[] = [
  {
    user: "Raj",
    amount: 4500,
    discount: 300,
    quantity: 5,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/afkjcjb">Manage</Link>
  },
  {
    user: "Nitin",
    amount: 10000,
    discount: 1000,
    quantity: 50,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/jcskncv">Manage</Link>
  },
  {
    user: "Pavan",
    amount: 100,
    discount: 0,
    quantity: 1,
    status: <span className="purple">Delivered</span>,
    action: <Link to="/admin/transaction/kcnknvn">Manage</Link>
  },
]


const Transaction = () => {


  const [data] = useState<DataType[]>(arr)

  const Table = useCallback(TableHOC<DataType>(columns, data, "dashboard-product-box", "Transactions", true), []);


  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{Table()}</main>
    </div>
  )
}

export default Transaction
