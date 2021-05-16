
var MQTT_CLIENT_ID = "iot_web_"+Math.floor((1 + Math.random()) * 0x10000000000).toString(16);


var MQTT_CLIENT = new Paho.MQTT.Client("CLIENTID", 888, "/ws", MQTT_CLIENT_ID);

MQTT_CLIENT.connect({ onSuccess: myClientConnected });
function myButtonWasClicked() {
  var mqttMessage = new Paho.MQTT.Message("0/1");

  mqttMessage.destinationName = "<your_random_topic_root>/iot_tutorial/from_webpage";

  MQTT_CLIENT.send(mqttMessage);
}


//sub topic handler
  MQTT_CLIENT.subscribe("<root1>/esp8266perfect:C1");
}
function myMessageArrived(message) {
 
  var messageHTML = $("<p>"+messageBody+"</p>");
 
  $("#updateMe").prepend(messageHTML);
};

MQTT_CLIENT.onMessageArrived = myMessageArrived;


