"use strict";
const MAX_DATA_COUNT = 20;
//Notify
$.notify(
  {
    icon: "flaticon-alarm-1",
    title: "Info",
    message:
      "This is the current page to visualize real time values and graphics from Node 1.",
  },
  {
    type: "info",
    placement: {
      from: "bottom",
      align: "right",
    },
    time: 1000,
  }
);
var myCircle1 = Circles.create({
  id: "circles-1",
  radius: 45,
  value: 60,
  maxValue: 29206,
  width: 7,
  text: 5,
  colors: ["#f1f1f1", "#FF9E27"],
  duration: 400,
  wrpClass: "circles-wrp",
  textClass: "circles-text",
  styleWrapper: true,
  styleText: true,
});
var myCircle2 = Circles.create({
  id: "circles-2",
  radius: 45,
  value: 70,
  maxValue: 32768,
  width: 7,
  text: 36,
  colors: ["#f1f1f1", "#2BB930"],
  duration: 400,
  wrpClass: "circles-wrp",
  textClass: "circles-text",
  styleWrapper: true,
  styleText: true,
});
var myCircle3 = Circles.create({
  id: "circles-3",
  radius: 45,
  value: 12,
  maxValue: 700,
  width: 7,
  text: 12,
  colors: ["#f1f1f1", "#F25961"],
  duration: 400,
  wrpClass: "circles-wrp",
  textClass: "circles-text",
  styleWrapper: true,
  styleText: true,
});
//Charts
var ctx = document.getElementById("statisticsChart").getContext("2d");
var ctx2 = document.getElementById("statisticsChart2").getContext("2d");
var ctx3 = document.getElementById("statisticsChart3").getContext("2d");
var ctx4 = document.getElementById("statisticsChart4").getContext("2d");
var ctx5 = document.getElementById("statisticsChart5").getContext("2d");
var statisticsChart = new Chart(ctx, {
  type: "line",
  data: {
    datasets: [
      {
        label: "CO2",
        borderColor: "#f3545d",
        pointBackgroundColor: "rgba(243, 84, 93, 0.6)",
        pointRadius: 0,
        backgroundColor: "rgba(243, 84, 93, 0.4)",
        legendColor: "#f3545d",
        fill: true,
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10,
    },
    layout: {
      padding: { left: 5, right: 5, top: 15, bottom: 15 },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontStyle: "500",
            beginAtZero: false,
            maxTicksLimit: 5,
            padding: 10,
          },
          gridLines: {
            drawTicks: false,
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 10,
            fontStyle: "500",
          },
        },
      ],
    },
    legendCallback: function (chart) {
      var text = [];
      text.push('<ul class="' + chart.id + '-legend html-legend">');
      for (var i = 0; i < chart.data.datasets.length; i++) {
        text.push(
          '<li><span style="background-color:' +
            chart.data.datasets[i].legendColor +
            '"></span>'
        );
        if (chart.data.datasets[i].label) {
          text.push(chart.data.datasets[i].label);
        }
        text.push("</li>");
      }
      text.push("</ul>");
      return text.join("");
    },
  },
});
var statisticsChart2 = new Chart(ctx2, {
  type: "line",
  data: {
    datasets: [
      {
        label: "TVOC",
        borderColor: "#33ff4c",
        pointBackgroundColor: "rgba(0, 255, 37, 0.16)",
        pointRadius: 0,
        backgroundColor: "rgba(0, 255, 37, 0.14)",
        legendColor: "#33ff4c",
        fill: true,
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10,
    },
    layout: {
      padding: { left: 5, right: 5, top: 15, bottom: 15 },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontStyle: "500",
            beginAtZero: false,
            maxTicksLimit: 5,
            padding: 10,
          },
          gridLines: {
            drawTicks: false,
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 10,
            fontStyle: "500",
          },
        },
      ],
    },
    legendCallback: function (chart) {
      var text = [];
      text.push('<ul class="' + chart.id + '-legend html-legend">');
      for (var i = 0; i < chart.data.datasets.length; i++) {
        text.push(
          '<li><span style="background-color:' +
            chart.data.datasets[i].legendColor +
            '"></span>'
        );
        if (chart.data.datasets[i].label) {
          text.push(chart.data.datasets[i].label);
        }
        text.push("</li>");
      }
      text.push("</ul>");
      return text.join("");
    },
  },
});
var statisticsChart4 = new Chart(ctx4, {
  type: "line",
  data: {
    datasets: [
      {
        label: "RSSI",
        borderColor: "#f7ff00",
        pointBackgroundColor: "rgba(250, 250, 166, 0.8)",
        pointRadius: 0,
        backgroundColor: "rgba(250, 250, 166, 0.6)",
        legendColor: "#f7ff00",
        fill: true,
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10,
    },
    layout: {
      padding: { left: 5, right: 5, top: 15, bottom: 15 },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontStyle: "500",
            beginAtZero: false,
            maxTicksLimit: 5,
            padding: 10,
          },
          gridLines: {
            drawTicks: false,
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 10,
            fontStyle: "500",
          },
        },
      ],
    },
    legendCallback: function (chart) {
      var text = [];
      text.push('<ul class="' + chart.id + '-legend html-legend">');
      for (var i = 0; i < chart.data.datasets.length; i++) {
        text.push(
          '<li><span style="background-color:' +
            chart.data.datasets[i].legendColor +
            '"></span>'
        );
        if (chart.data.datasets[i].label) {
          text.push(chart.data.datasets[i].label);
        }
        text.push("</li>");
      }
      text.push("</ul>");
      return text.join("");
    },
  },
});
var statisticsChart5 = new Chart(ctx5, {
  type: "line",
  data: {
    datasets: [
      {
        label: "SNR",
        borderColor: "#f7ff00",
        pointBackgroundColor: "rgba(250, 250, 166, 0.8)",
        pointRadius: 0,
        backgroundColor: "rgba(250, 250, 166, 0.6)",
        legendColor: "#f7ff00",
        fill: true,
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10,
    },
    layout: {
      padding: { left: 5, right: 5, top: 15, bottom: 15 },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontStyle: "500",
            beginAtZero: false,
            maxTicksLimit: 5,
            padding: 10,
          },
          gridLines: {
            drawTicks: false,
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 10,
            fontStyle: "500",
          },
        },
      ],
    },
    legendCallback: function (chart) {
      var text = [];
      text.push('<ul class="' + chart.id + '-legend html-legend">');
      for (var i = 0; i < chart.data.datasets.length; i++) {
        text.push(
          '<li><span style="background-color:' +
            chart.data.datasets[i].legendColor +
            '"></span>'
        );
        if (chart.data.datasets[i].label) {
          text.push(chart.data.datasets[i].label);
        }
        text.push("</li>");
      }
      text.push("</ul>");
      return text.join("");
    },
  },
});
var statisticsChart3 = new Chart(ctx3, {
  type: "line",
  data: {
    datasets: [
      {
        label: "UV",
        borderColor: "#f7ff00",
        pointBackgroundColor: "rgba(250, 250, 166, 0.8)",
        pointRadius: 0,
        backgroundColor: "rgba(250, 250, 166, 0.6)",
        legendColor: "#f7ff00",
        fill: true,
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10,
    },
    layout: {
      padding: { left: 5, right: 5, top: 15, bottom: 15 },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontStyle: "500",
            beginAtZero: false,
            maxTicksLimit: 5,
            padding: 10,
          },
          gridLines: {
            drawTicks: false,
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 10,
            fontStyle: "500",
          },
        },
      ],
    },
    legendCallback: function (chart) {
      var text = [];
      text.push('<ul class="' + chart.id + '-legend html-legend">');
      for (var i = 0; i < chart.data.datasets.length; i++) {
        text.push(
          '<li><span style="background-color:' +
            chart.data.datasets[i].legendColor +
            '"></span>'
        );
        if (chart.data.datasets[i].label) {
          text.push(chart.data.datasets[i].label);
        }
        text.push("</li>");
      }
      text.push("</ul>");
      return text.join("");
    },
  },
});
function addData(label, data) {
  statisticsChart.data.labels.push(label);
  statisticsChart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  statisticsChart.update();
}
function removeFirstData() {
  statisticsChart.data.labels.splice(0, 1);
  statisticsChart.data.datasets.forEach((dataset) => {
    dataset.data.shift();
  });
}
function addData2(label, data) {
  statisticsChart2.data.labels.push(label);
  statisticsChart2.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  statisticsChart2.update();
}
function removeFirstData2() {
  statisticsChart2.data.labels.splice(0, 1);
  statisticsChart2.data.datasets.forEach((dataset) => {
    dataset.data.shift();
  });
}
function addData3(label, data) {
  statisticsChart3.data.labels.push(label);
  statisticsChart3.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  statisticsChart3.update();
}
function removeFirstData() {
  statisticsChart3.data.labels.splice(0, 1);
  statisticsChart3.data.datasets.forEach((dataset) => {
    dataset.data.shift();
  });
}
function addData4(label, data) {
  statisticsChart4.data.labels.push(label);
  statisticsChart4.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  statisticsChart4.update();
}
function removeFirstData() {
  statisticsChart4.data.labels.splice(0, 1);
  statisticsChart4.data.datasets.forEach((dataset) => {
    dataset.data.shift();
  });
}
function addData5(label, data) {
  statisticsChart5.data.labels.push(label);
  statisticsChart5.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  statisticsChart5.update();
}
function removeFirstData() {
  statisticsChart5.data.labels.splice(0, 1);
  statisticsChart5.data.datasets.forEach((dataset) => {
    dataset.data.shift();
  });
}
const options = {
  connectTimeout: 60000,
  // Authentication
  clientId: "mqttjs_" + Math.random().toString(16),
  username: "web_client",
  password: "123456",
  keepalive: 60,
  clean: true,
};
var connected = false;
const WebSocket_URL = "ws://arzethamescarloswsnproyecto2.com:8083/mqtt";
const client = mqtt.connect(WebSocket_URL, options);
client.on("connect", () => {
  console.log("Mqtt conectado por WS!");
  client.subscribe("values", { qos: 0 }, (error) => {
    if (!error) {
      console.log("Suscripción exitosa!");
    } else {
      console.log("Suscripción fallida!");
    }
  });
  // publish(topic, payload, options/callback)
  client.publish("fabrica", "esto es un verdadero éxito", (error) => {
    console.log(error || "Mensaje enviado!!!");
  });
});
var myLegendContainer = document.getElementById("myChartLegend");
var myLegendContainer2 = document.getElementById("myChartLegend2");
var myLegendContainer3 = document.getElementById("myChartLegend3");
var myLegendContainer4 = document.getElementById("myChartLegend4");
var myLegendContainer5 = document.getElementById("myChartLegend5");
// generate HTML legend
myLegendContainer.innerHTML = statisticsChart.generateLegend();
myLegendContainer2.innerHTML = statisticsChart2.generateLegend();
myLegendContainer3.innerHTML = statisticsChart3.generateLegend();
myLegendContainer4.innerHTML = statisticsChart4.generateLegend();
myLegendContainer5.innerHTML = statisticsChart5.generateLegend();
// bind onClick event to all LI-tags of the legend
var legendItems = myLegendContainer.getElementsByTagName("li");
var legendItems2 = myLegendContainer2.getElementsByTagName("li");
var legendItems3 = myLegendContainer3.getElementsByTagName("li");
var legendItems4 = myLegendContainer4.getElementsByTagName("li");
var legendItems5 = myLegendContainer5.getElementsByTagName("li");
for (var i = 0; i < legendItems.length; i += 1) {
  legendItems[i].addEventListener("click", legendClickCallback, false);
}
for (var i = 0; i < legendItems2.length; i += 1) {
  legendItems2[i].addEventListener("click", legendClickCallback, false);
}
for (var i = 0; i < legendItems3.length; i += 1) {
  legendItems3[i].addEventListener("click", legendClickCallback, false);
}
for (var i = 0; i < legendItems4.length; i += 1) {
  legendItems4[i].addEventListener("click", legendClickCallback, false);
}
for (var i = 0; i < legendItems5.length; i += 1) {
  legendItems5[i].addEventListener("click", legendClickCallback, false);
}
client.on("message", (topic, message) => {
  console.log(
    "Mensaje recibido bajo tópico: ",
    topic,
    " -> ",
    message.toString()
  );
  if (statisticsChart.data.labels.length > MAX_DATA_COUNT) {
    removeFirstData();
  }
  var data=JSON.parse(message.toString());
  const fechaActual=new Date();
  const dia=fechaActual.getDate();
  const mes=fechaActual.getMonth()+1;
  const anio=fechaActual.getFullYear();
  const hour=fechaActual.getHours();
  const minutes=fechaActual.getMinutes();
  const seconds=fechaActual.getSeconds();
  const fecha=dia+"/"+mes+"/"+anio+" "+hour+":"+minutes+":"+seconds;
  addData(fecha,data.value1);
  addData2(fecha,data.value2);
  addData3(fecha,data.value3);
  addData4(fecha,data.rssiLoRa);
  addData5(fecha,data.snrLoRa);
  myCircle1._text = data.value1;
  myCircle1._value = data.value1;
  myCircle1._generate().update(true);
  myCircle2._text = data.value2;
  myCircle2._value = data.value2;
  myCircle2._generate().update(true);
  myCircle3._text = data.value3;
  myCircle3._value = data.value3;
  myCircle3._generate().update(true);
  /*var elemento = document.getElementById("nodeState4");
  elemento.innerHTML = `${message.toString()}`;*/
});

client.on("reconnect", (error) => {
  console.log("Error al reconectar", error);
});

client.on("error", (error) => {
  console.log("Error de conexión:", error);
});
