/**
 * Mocking client-server processing
 */
import _products from './products.json'
import _user from './user.json'

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => {
    cb()}, timeout || TIMEOUT),
  getUser: (cb,timeout) => setTimeout(()=> cb(_user),timeout|| TIMEOUT),
}
