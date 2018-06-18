// import { types } from "mobx-state-tree";
// import ItemList from "./ItemList";

// const Invoice = types
//   .model("Invoice", {
//     currency: types.string,
//     isPaid: false,
//     itemList: types.optional(ItemList, { items: [] })
//   })
//   .actions(self => ({
//     markPaid() {
//       self.isPaid = true;
//     }
//   }))
//   .views(self => ({
//     status() {
//       return self.isPaid ? "Paid" : "Not Paid";
//     }
//   }));

// export default Invoice;