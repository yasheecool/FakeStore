export async function updateCart(cartItems, TOKEN) {
  // console.log("cart items received", cartItems);
  const items = cartItems.map((item) => {
    return {
      id: item.id,
      count: item.quantity,
      price: item.price,
    };
  });

  // console.log(items);

  const resObj = JSON.stringify({ items: items });
  // console.log(resObj);

  const response = await fetch("http://localhost:3000/cart", {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: resObj,
  });

  response.json().then((res) => {
    if (res.status === "OK") {
      console.log("Cart updated successfully");
    }
  });

  // console.log("Currrent Status of cart:", await getCart(TOKEN));
  getCart(TOKEN);
}

export async function getCart(TOKEN) {
  const response = await fetch("http://localhost:3000/cart", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  const res = await response.json();
  console.log("Current status of cart: ", res.items);
  return res.items;
}
