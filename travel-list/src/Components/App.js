import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
// import { useState } from "react";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 12, packed: false },
// ];

// export default function App() {
//   return (
//     <div className="app">
//       <Logo />
//       <Form />
//       <PackingList />
//       <Stats />
//     </div>
//   );
// }

// // Now we will create 4 components for the app
// // 1. Logo
// // 2. Form
// // 3. Packing list
// // 4. Stats

// // function Logo() {
// //   return <h1>🧳Travel Far Away...✈️</h1>;
// // }

// function Form() {
//   const [description, setDescription] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!description) return;

//     const newItem = { description, quantity, packed: false, id: Date.now() };

//     setDescription("");
//     setQuantity(1);
//   }

//   return (
//     <form className="add-form" onClick={handleSubmit}>
//       <h3>What do you need for your trip? 👜</h3>
//       <select
//         value={quantity}
//         onChange={(e) => setQuantity(Number(e.target.value))}
//       >
//         {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
//           <option value={num} key={num}>
//             {num}
//           </option>
//         ))}
//       </select>
//       <input
//         type="text"
//         placeholder="Item..."
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button>Add</button>
//     </form>
//   );
// }

// function PackingList() {
//   return (
//     <div className="list">
//       <ul>
//         {initialItems.map((item) => (
//           <Item item={item} key={item.id} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Item({ item }) {
//   return (
//     <li>
//       <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//         {item.quantity} {item.description}
//       </span>
//       <button>❌</button>
//     </li>
//   );
// }

// function Stats() {
//   return (
//     <footer className="stats">
//       <em>📦 You have X items on your list, and you already packed X (X%)</em>
//     </footer>
//   );
// }
