import { toastr } from 'react-redux-toastr';
export function toastApiError(msg, error) {
  toastr.info('Server Error', msg);
}
