import axios from "axios";

export const GetLoginData = (number) => {
  return axios.get(
    `https://harshal-json-mock-server.herokuapp.com/users?number=${number}`
  );
};

export const PostLoginData = async ({ name, email, number, password }) => {
  let data = await fetch(
    "https://harshal-json-mock-server.herokuapp.com/users",
    {
      method: "POST",
      body: JSON.stringify({ name, email, number, password }),
      headers: { "Content-Type": "application/json" },
    }
  );
  data = await data.json();
  console.log(data);
};

export const GetCatData = () => {
  // fetch("https://harshal-json-mock-server.herokuapp.com/category").then(
  //   (res) => {
  //     return res.json();
  //   }
  // );
  return axios.get(
    "https://harshal-json-mock-server.herokuapp.com/natureBasket"
  );
};

export const GetWholeData = (setData) => {
  axios
    .get("https://harshal-json-mock-server.herokuapp.com/natureBasket")
    .then((res) => res.json())
    .then((res) => console.log(res))
  //   .catch((err) => console.log(err));
  // try {
  //     setLoading(true);
  //     let res = await fetch(
  //       `https://harshal-json-mock-server.herokuapp.com/natureBasket`
  //     );
  //     let data = await res.json();
  //     console.log(data);
  //     setLoading(false);
  //     setData(data);
  //   } catch {
  //     setLoading(false);
  //   }
};
