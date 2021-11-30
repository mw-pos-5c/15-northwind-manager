export default interface Order {
  id: number;
  orderDateMillis: number;
  requiredDateMillis: number;
  shippedDateMillis: number;
  nrOrderDetails: number;
}
