import axios from "axios";

export default async function sendMessage(message) {
  try {
    const res = await axios.post(
      "https://5d9f7fe94d823c0014dd323d.mockapi.io/api",
      message
    );
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}
