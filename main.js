const featureFlags = {
  enableChat: true,
};

if (featureFlags.enableChat) {
  console.log("enable chat");
  import("chat-widget").then((module) => {
    const chat = module.default();
    document.getElementById("chat-container").appendChild(chat);
  });
}
