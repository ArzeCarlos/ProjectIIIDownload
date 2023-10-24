"use strict";
const options = {
	connectTimeout: 60000,
	// Authentication
	clientId: 'mqttjs_' + Math.random().toString(16),
	username: "web_client",
	password: "123456",
	keepalive: 60,
	clean: true,
};
var connected = false;
const WebSocket_URL = "ws://arzethamescarloswsnproyecto2.com/:8083/mqtt";
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
client.on("message", (topic, message) => {
	console.log(
	  "Mensaje recibido bajo tópico: ",
	  topic,
	  " -> ",
	  message.toString()
	);
  });
  
  client.on("reconnect", (error) => {
	console.log("Error al reconectar", error);
  });
  
  client.on("error", (error) => {
	console.log("Error de conexión:", error);
  });
function log() {
    var elemento=document.getElementById("largeSelect");
    var text = elemento.options[elemento.selectedIndex].text;
    console.log(text);
    var data={
      velgateway:text
    }
    var json = JSON.stringify(data);
    client.publish("vel", json, (error) => {
        console.log(error || "Mensaje enviado!!!");
    });
};
//Notify
$.notify({
	icon: 'flaticon-alarm-1',
	title: 'Info',
	message: 'This interface provides Gateway configuration.',
},{
	type: 'info',
	placement: {
		from: "bottom",
		align: "right"
	},
	time: 1000,
});
