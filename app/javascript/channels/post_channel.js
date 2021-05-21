import consumer from "./consumer";
import cableReady from "cable_ready";

consumer.subscriptions.create("PostChannel", {
  connected() {
    console.log("post channel is connected");
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    if (data.cableReady) cableReady.perform(data.operations);
  },
});
