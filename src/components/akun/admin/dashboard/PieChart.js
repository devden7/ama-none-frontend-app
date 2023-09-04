import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
const PieChart = (props) => {
  const pastelColors = [
    "B19CD9",
    "77DD77",
    "FF6961",
    "FFD700",
    "87CEEB",
    "20B2AA",
    "FFA07A",
    "DA70D6",
    "98FB98",
    "DDA0DD",
    "BC8F8F",
    "ADD8E6",
    "9370DB",
    "F08080",
    "90EE90",
    "FFB6C1",
    "FF6347",
    "3CB371",
    "CD5C5C",
    "00FFFF",
    "FFDAB9",
    "FF4500",
    "ADFF2F",
    "9370DB",
    "F0E68C",
    "FFC0CB",
    "20B2AA",
    "F5DEB3",
    "DDA0DD",
    "32CD32",
    "8A2BE2",
    "66CDAA",
    "DA70D6",
    "B0C4DE",
    "FFD700",
    "C71585",
    "FFA500",
    "E6E6FA",
    "90EE90",
    "7B68EE",
    "CD853F",
    "FF69B4",
    "20B2AA",
    "FF7F50",
    "00FA9A",
    "E0FFFF",
    "FF6347",
    "98FB98",
    "BC8F8F",
    "DDA0DD",
    "32CD32",
    "FFD700",
    "F08080",
    "FFA07A",
    "87CEEB",
    "FF4500",
    "20B2AA",
    "00CED1",
    "B0E0E6",
    "FF69B4",
    "3CB371",
    "DA70D6",
    "ADFF2F",
    "9370DB",
    "FFB6C1",
    "00FA9A",
    "F5DEB3",
    "FFDAB9",
    "66CDAA",
    "E6E6FA",
    "98FB98",
    "CD5C5C",
    "7B68EE",
    "FFA500",
    "F0E68C",
    "8A2BE2",
    "FF6347",
    "00FFFF",
    "FF4500",
    "FF6961",
    "32CD32",
    "FF7F50",
    "20B2AA",
    "FFC0CB",
    "FFD700",
    "87CEEB",
    "9370DB",
    "90EE90",
    "B19CD9",
    "ADD8E6",
    "FFA07A",
    "00CED1",
    "66CDAA",
    "C71585",
    "DA70D6",
    "F08080",
    "00FA9A",
    "FFB6C1",
    "BC8F8F",
    "CD853F",
    "98FB98",
    "3CB371",
    "FF69B4",
    "FF6347",
    "FFDAB9",
    "20B2AA",
    "FF4500",
    "E0FFFF",
    "B0E0E6",
    "FFA500",
  ];
  ChartJS.register(ArcElement, Tooltip, Legend);

  const dataKategori = [];
  const warnaKategori = [];

  //perulangan untuk datakategori order yang sukses
  for (let i = 0; i < props.order?.length; i++) {
    for (let j = 0; j < props.order[i].detailOrderan.items.length; j++) {
      if (props.order[i].detailOrderan.statusOrder === "Berhasil Dikirim") {
        dataKategori.push(props.order[i].detailOrderan.items[j].kategori);
      }
    }
  }

  //menghilangkan duplikat dari arr datakategori
  const hilangkanDuplikatKategoriArr = [...new Set(dataKategori)];
  const hitungDuplikatKategori = dataKategori.reduce((count, item) => {
    count[item] = (count[item] || 0) + 1;
    return count;
  }, {});

  //menentukan warna pieChart random dari setioap kategori
  for (let l = 0; l < hilangkanDuplikatKategoriArr.length; l++) {
    const angkaRandom = Math.random();
    const index = Math.floor(angkaRandom * pastelColors.length);

    let hexValue = "#" + pastelColors[index];

    warnaKategori.push(hexValue);
  }

  //menghitung jumlah kategoriitem dari setiap order yang sukses
  const objectDuplikatToArray = Object.values(hitungDuplikatKategori);

  //perulangan untuk menghitung statusOrder
  const jumlahStatusOrderArr = [];
  let pending = 0;
  let berhasilDikirim = 0;
  let gagal = 0;
  for (let k = 0; k < props.order?.length; k++) {
    if (props.order[k].detailOrderan.statusOrder === "pending") {
      pending++;
    } else if (
      props.order[k].detailOrderan.statusOrder === "Berhasil Dikirim"
    ) {
      berhasilDikirim++;
    } else {
      gagal++;
    }

    jumlahStatusOrderArr.push(pending, berhasilDikirim);
  }

  const dataPieChart = {
    labels: hilangkanDuplikatKategoriArr,
    datasets: [
      {
        label: "Kategori",
        data: objectDuplikatToArray,
        backgroundColor: warnaKategori,
      },
    ],
  };

  const dataStatusPengiriman = {
    labels: ["Pending", "Berhasil Dikirim", "Gagal"],
    datasets: [
      {
        label: "orders",
        data: [pending, berhasilDikirim, gagal],
        backgroundColor: ["#ffcd56", "#1aba1a", "#ff6384"],
      },
    ],
  };
  ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-8">Kategori Product Terjual</h2>
      <div className="flex flex-wrap justify-center gap-20">
        <div className="mb-5">
          <div className="relative h-[300px]S">
            <Pie className="mx-auto" data={dataPieChart} />
          </div>
        </div>

        <div className="mb-5">
          <div className="relative h-[300px]S">
            <Pie className="mx-auto" data={dataStatusPengiriman} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
