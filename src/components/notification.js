import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const _options = {
  autoClose: 3000,
  position: 'top-right',
  hideProgressBar: true,
};

export const notifyInfo = (message, options = _options) => {
  toast.info(message, options);
};

export const notifySuccess = (message, options = _options) => {
  toast.success(message, options);
};

export const notifyWarning = (message, options = _options) => {
  toast.warning(message, options);
};

export const notifyError = (message, options = _options) => {
  toast.error(message, options);
};
