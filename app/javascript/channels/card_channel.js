import consumer from "./consumer";

consumer.subscriptions.create("CardChannel", {
  connected() {
    console.log("connected");
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    if (data.cableReady) cableReady.perform(data.operations);
  },
});
