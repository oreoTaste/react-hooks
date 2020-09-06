const useConfirm = (msg = "", callback, reject) => {
  const confirmation = () => {
    if (!callback || typeof callback !== "function") return;

    if (window.confirm(msg)) {
      callback();
    } else {
      if (typeof reject !== "function") return;
      reject();
    }
  };
  return confirmation;
};
export default useConfirm;
