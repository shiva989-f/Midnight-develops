import { toast } from "react-toastify";

export const successMessage = (msg) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 5000, // Duration in milliseconds (5 seconds)
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored", // Optional: "light" or "dark" themes
  });
};

export const errorMessage = (msg) => {
  toast.error(msg, {
    position: "top-right",
    autoClose: 5000, // Duration in milliseconds (5 seconds)
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored", // Optional: "light" or "dark" themes
  });
};

export const infoMessage = (msg) => {
  toast.info(msg, {
    position: "top-right",
    autoClose: 5000, // Duration in milliseconds (5 seconds)
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored", // Optional: "light" or "dark" themes
  });
};
