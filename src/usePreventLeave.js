const usePreventLeave = () => {
  const event = (event) => {
    // 표준에 따라 기본 동작 방지
    event.preventDefault();
    // Chrome에서는 returnValue 설정이 필요함
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", event);
  const disablePrevent = () => window.removeEventListener("beforeunload", event);
  return { enablePrevent, disablePrevent };
};
export default usePreventLeave;
