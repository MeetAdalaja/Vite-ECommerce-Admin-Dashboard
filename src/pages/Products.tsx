import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar"
import TableHOC from "../components/TableHOC"
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";


interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo"
  },
  {
    Header: "Name",
    accessor: "name"
  },
  {
    Header: "Price",
    accessor: "price"
  },
  {
    Header: "Stock",
    accessor: "stock"
  },
  {
    Header: "Action",
    accessor: "action"
  }
];

const img = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const img2 = "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


const arr: DataType[] = [
  {
    photo: <img src={img} alt="shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 2300,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>
  },
  {
    photo: <img src={img2} alt="Mac" />,
    name: "MacBook",
    price: 80000,
    stock: 123,
    action: <Link to="/admin/product/jbcjhzb">Manage</Link>
  },
  {
    photo: <img src={img} alt="shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 2300,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>
  },
  {
    photo: <img src={img2} alt="Mac" />,
    name: "MacBook",
    price: 80000,
    stock: 123,
    action: <Link to="/admin/product/jbcjhzb">Manage</Link>
  },
  {
    photo: <img src={img} alt="shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 2300,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>
  },
  {
    photo: <img src={img2} alt="Mac" />,
    name: "MacBook",
    price: 80000,
    stock: 123,
    action: <Link to="/admin/product/jbcjhzb">Manage</Link>
  },
  {
    photo: <img src={img} alt="shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 2300,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>
  },
  {
    photo: <img src={img2} alt="Mac" />,
    name: "MacBook",
    price: 80000,
    stock: 123,
    action: <Link to="/admin/product/jbcjhzb">Manage</Link>
  },
  {
    photo: <img src={img} alt="shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 2300,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>
  },
  {
    photo: <img src={img2} alt="Mac" />,
    name: "MacBook",
    price: 80000,
    stock: 123,
    action: <Link to="/admin/product/jbcjhzb">Manage</Link>
  },
  {
    photo: <img src={img} alt="shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 2300,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>
  },
  {
    photo: <img src={img2} alt="Mac" />,
    name: "MacBook",
    price: 80000,
    stock: 123,
    action: <Link to="/admin/product/jbcjhzb">Manage</Link>
  },
  {
    photo: <img src={img} alt="shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 2300,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>
  },
  {
    photo: <img src={img2} alt="Mac" />,
    name: "MacBook",
    price: 80000,
    stock: 123,
    action: <Link to="/admin/product/jbcjhzb">Manage</Link>
  },
  {
    photo: <img src={img} alt="shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 2300,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>
  },
  {
    photo: <img src={img2} alt="Mac" />,
    name: "MacBook",
    price: 80000,
    stock: 123,
    action: <Link to="/admin/product/jbcjhzb">Manage</Link>
  },
  {
    photo: <img src={img} alt="shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 2300,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>
  },
  {
    photo: <img src={img2} alt="Mac" />,
    name: "MacBook",
    price: 80000,
    stock: 123,
    action: <Link to="/admin/product/jbcjhzb">Manage</Link>
  },
  {
    photo: <img src={img} alt="shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 2300,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>
  },
  {
    photo: <img src={img2} alt="Mac" />,
    name: "MacBook",
    price: 80000,
    stock: 123,
    action: <Link to="/admin/product/jbcjhzb">Manage</Link>
  },
  {
    photo: <img src={img} alt="shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 2300,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>
  },
  {
    photo: <img src={img2} alt="Mac" />,
    name: "MacBook",
    price: 80000,
    stock: 123,
    action: <Link to="/admin/product/jbcjhzb">Manage</Link>
  },
  {
    photo: <img src={img} alt="shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 2300,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>
  },
  {
    photo: <img src={img2} alt="Mac" />,
    name: "MacBook",
    price: 80000,
    stock: 123,
    action: <Link to="/admin/product/jbcjhzb">Manage</Link>
  },
]

const Products = () => {

  const [data] = useState<DataType[]>(arr)

  const Table = useCallback(TableHOC<DataType>(columns, data, "dashboard-product-box", "Products", true), []);

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{Table()}</main>
      <Link to="/admin/product/new" className="create-product-btn"><FaPlus/></Link>
    </div>
  )
}

export default Products
