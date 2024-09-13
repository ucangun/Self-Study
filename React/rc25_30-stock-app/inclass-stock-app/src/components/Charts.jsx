import { Grid } from "@mui/material";
import { AreaChart } from "@tremor/react";
import { useSelector } from "react-redux";

const chartdata = [
  {
    date: "Jan 22",
    SolarPanels: 2890,
    Inverters: 2338,
  },
  {
    date: "Feb 22",
    SolarPanels: 2756,
    Inverters: 2103,
  },
  {
    date: "Mar 22",
    SolarPanels: 3322,
    Inverters: 2194,
  },
];

const dataFormatter = (number) =>
  `€${Intl.NumberFormat("de").format(number).toString()}`;

export default function Charts() {
  const { sales, purchases } = useSelector((state) => state.stock);

  const salesData = sales.map((sale) => ({
    date: new Date(sale.createdAt).toLocaleString(),
    sale: sale.amount,
  }));
  const purchasesData = purchases.map((purchase) => ({
    date: new Date(purchase.createdAt).toLocaleString(),
    purchase: purchase.amount,
  }));

  return (
    <Grid container spacing={2} mt={3}>
      <Grid item xs={12} md={6}>
        <AreaChart
          className="h-80"
          data={salesData}
          index="date"
          categories={["sale"]}
          colors={["indigo"]}
          valueFormatter={dataFormatter}
          yAxisWidth={65}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <AreaChart
          className="h-80"
          data={purchasesData}
          index="date"
          categories={["purchase"]}
          colors={["fuchsia"]}
          valueFormatter={dataFormatter}
          yAxisWidth={65}
        />
      </Grid>
    </Grid>
  );

  //   return [
  //     <AreaChart
  //       className="h-80"
  //       data={salesData}
  //       index="date"
  //       categories={['sale']}
  //       colors={['indigo', 'rose']}
  //       valueFormatter={dataFormatter}
  //       yAxisWidth={60}
  //       onValueChange={(v) => console.log(v)}
  //     />,
  //     <AreaChart
  //       className="h-80"
  //       data={purchasesData}
  //       index="date"
  //       categories={['purchase']}
  //       colors={['indigo', 'rose']}
  //       valueFormatter={dataFormatter}
  //       yAxisWidth={60}
  //       onValueChange={(v) => console.log(v)}
  //     />
  // ]
}
