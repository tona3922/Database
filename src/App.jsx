import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./navbar/home/home";
import { Cart } from "./navbar/cart/cart";
import { Contact } from "./navbar/contact/contact";
import { Login } from "./authen/login";
import { Signup } from "./authen/singup";
import { Register_info } from "./authen/register_info";
import { Addbook } from "./sql/addbook";
import Admin from "./admin/pages/admin";
import { Updatebook } from "./sql/update";
import { useState } from "react";
import "./style.scss";

const item1 = {
  id: 1,
  thumbnail: "/src/img/book1.jpg",
  title: "Tôi thấy hoa vàng trên cỏ xanh",
  author: "Nguyễn Nhật Ánh",
  price: 123000,
  stock: 50,
};
const item2 = {
  id: 2,
  thumbnail: "./img/book1.jpg",
  title: "Data Structure and Algorithm",
  author: "Various",
  price: 690000,
  stock: 69,
};
const item3 = {
  id: 3,
  thumbnail: "./img/book1.jpg",
  title: "Operating System Concept",
  author: "Various",
  price: 690000,
  stock: 70,
};
const bookList = [item1, item2, item3]; 

function App() {
  const [cartItems, setCartItems] = useState([
    { ...bookList[0], qty: 3 },
    { ...bookList[1], qty: 5 },
    { ...bookList[2], qty: 3 },
  ]);

  const onIncrease = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onDecrease = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const onDelete = (product) => {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  };
  const onDeleteAll = () => {
    setCartItems(() => []);
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
                onDelete={onDelete}
                onDeleteAll={onDeleteAll}
              />
            }
          />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/info_reg" element={<Register_info />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/addbook" element={<Addbook />} />
          <Route path="/update/:id" element={<Updatebook />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
