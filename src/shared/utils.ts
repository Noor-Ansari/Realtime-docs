export const getThrottledFunc = (callback: (id: string, content: string) => void, delay = 1000) => {
  let mode = "active"; // "throttled" | "active"
  return (id: string, content: string) => {
    if (mode === "throttled") return;
    mode = "throttled";
    callback(id, content);
    setTimeout(() => {
      mode = "active";
    }, delay);
  };
};
