let worker: Worker | null = null;
export const initializeWorker = (roomId: string, updateCallback: (content: string) => void) => {
  worker = new Worker(new URL("./realtimeDoc.worker.ts", import.meta.url));
  worker.postMessage({ type: "INIT", roomId });
  if (worker) {
    worker.onmessage = (event) => {
      const { type, content } = event.data;
      switch (type) {
        case "docUpdated":
          updateCallback(content);
          break;
      }
    };
  }
};

export const destroyWorker = () => {
  if (worker) {
    worker.terminate();
  }
};

export const updateDoc = (id: string, content: string) => {
  if (worker) {
    worker.postMessage({ type: "DOC_UPDATED", id, content });
  }
};
