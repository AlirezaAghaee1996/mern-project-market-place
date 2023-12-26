import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
export default function Toast({ type = "info", message }) {
  useEffect(() => {
    if (type !== "info") {
      toast[type](message);
    }
  }, [type, message]);
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
}
// y='name'
// person={
//     name:'alireza'
// }
// person[y] == person.name
