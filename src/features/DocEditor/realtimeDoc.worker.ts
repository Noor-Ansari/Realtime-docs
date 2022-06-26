import { io, Socket } from "socket.io-client";

let socket: Socket;
export const initSocket = (roomId: string) => {
  socket = io(`ws://localhost:5000?roomId=${roomId}`);
  socket.on("docUpdated-on-server", (event) => {
    const { content } = event;
    postMessage({
      type: "docUpdated",
      content,
    });
  });
};

onmessage = (event) => {
  const { type, id, content, roomId } = event.data;
  switch (type) {
    case "INIT":
      initSocket(roomId);
      break;
    case "DOC_UPDATED":
      socket.emit("docUpdated-on-client", { id, content });
  }
};
