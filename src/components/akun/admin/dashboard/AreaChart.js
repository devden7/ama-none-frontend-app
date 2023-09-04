import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const AreaChart = (props) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Historis Penjualan",
      },
    },
  };

  //tanggal arr
  const labels = [];
  const tanggalArr = [];
  for (let i = 0; i < props.order?.length; i++) {
    if (props.order[i].detailOrderan.statusOrder === "Berhasil Dikirim") {
      tanggalArr.push(props.order[i].detailOrderan.tanggal);
    }
  }
  const hilangkanDuplikatTanggalArr = [...new Set(tanggalArr)];

  for (let i = 0; i < hilangkanDuplikatTanggalArr.length; i++) {
    labels.push(hilangkanDuplikatTanggalArr[i]);
  }

  const penjualan = [];

  for (let j = 0; j < labels.length; j++) {
    let result = 0;

    for (let k = 0; k < props.order.length; k++) {
      if (labels[j] === props.order[k].detailOrderan.tanggal) {
        if (props.order[k].detailOrderan.statusOrder === "Berhasil Dikirim") {
          result = result + props.order[k].detailOrderan.totalBelanja;
        }
      }
    }
    if (props.order.length === 1) {
      result = props.order[j].detailOrderan.totalBelanja;
    }
    penjualan.push(result);
  }

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Penjualan",
        data: penjualan.map((data) => data),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="mb-5">
      <h2 className="text-3xl font-semibold mb-5">Histori penjualan</h2>
      <div className="relative sm:h-[35vw] xl:h-[20vw]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default AreaChart;
