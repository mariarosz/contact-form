import axios from "axios";

const API_URL = "https://5d9f7fe94d823c0014dd323d.mockapi.io/ap";

async function sendMessage(message) {
  try {
    const res = await axios.post(`${API_URL}/message`, {
      name: message.name,
      email: message.email,
      subject: message.subject,
      message: message.message,
    });
    return res.status;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

export default sendMessage;
