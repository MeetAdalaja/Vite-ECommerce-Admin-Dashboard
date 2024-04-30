import AdminSidebar from "../../components/AdminSidebar"
import { LineChart } from "../../components/Charts"

const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


const LineCharts = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />

      <main className="chart-container">

        <h1>Line Charts</h1>
        <section>
          <LineChart data={[300, 144, 433, 655, 237, 755, 190, 733, 555, 645, 888, 765]} label="Users" backgroundColor="rgb(53,162,255,0.5)" borderColor="rgba(53,162,255)" labels={months} />
          <h2>Active Users</h2>
        </section>

        <section>
          <LineChart data={[46,38,75,72,35,99,100,37,58,129,97]} label="Products" backgroundColor="hsla(269, 80%, 40% ,0.4)" borderColor="hsl(269, 80%, 40%)" labels={months} />
          <h2>Total Products (SKU)</h2>
        </section>

        <section>
          <LineChart data={[24000, 14400, 24600, 34300, 32700, 57000, 43100, 32900, 55500, 53400, 46700, 76500]} label="Revenue" backgroundColor="hsla(129, 80%, 40% ,0.4)" borderColor="hsl(129, 80%, 40%)" labels={months} />
          <h2>Total Revenue</h2>
        </section>

        <section>
          <LineChart data={[19000, 11244, 24333, 57755, 53997, 70055, 58000, 73300, 55455, 64235, 82388, 76355]} label="Discount" backgroundColor="hsla(29, 80%, 40% ,0.4)" borderColor="hsl(29, 80%, 40%)" labels={months} />
          <h2>Discount Allotted</h2>
        </section>

      </main>
    </div>
  )
}

export default LineCharts