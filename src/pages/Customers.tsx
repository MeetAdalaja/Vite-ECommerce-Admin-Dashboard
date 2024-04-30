import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar"
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";



interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar"
  },
  {
    Header: "Name",
    accessor: "name"
  },
  {
    Header: "Gender",
    accessor: "gender"
  },
  {
    Header: "Email",
    accessor: "email"
  },
  {
    Header: "Role",
    accessor: "role"
  },
  {
    Header: "Action",
    accessor: "action"
  }
];

const img = "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1711535757~exp=1711536357~hmac=8c29b23628215e2cea356602c4a7f66c971a3c89241a82a6df054742bde238de";
const img2 = "https://img.freepik.com/free-photo/view-3d-confident-businessman_23-2150709932.jpg?t=st=1711535806~exp=1711539406~hmac=2ae0de11d937cb7be1e0a6d2fd813206d4fe3bcb2fd00bb49adf92fb210ba676&w=740";


const arr: DataType[] = [
  {
    avatar: (
      <img style={{ borderRadius: "50%" }} src={img} alt="avatar" />),
    name: "Emily Palmer",
    email: "emilypalmer123@gmail.com",
    gender: "female",
    role: "user",
    action: (<button><FaTrash /></button>)
  },
  {
    avatar: (<img style={{borderRadius: "50%"}} src={img2} alt="avatar" />),
    name: "May Scoot",
    email: "mayscoot123@gmail.com",
    gender: "male",
    role: "user",
    action: (<button><FaTrash /></button>)
  },
]


const Customers = () => {


  const [data] = useState<DataType[]>(arr)

  const Table = useCallback(TableHOC<DataType>(columns, data, "dashboard-product-box", "Customers", true), []);


  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{Table()}</main>
    </div>
  )
}

export default Customers
