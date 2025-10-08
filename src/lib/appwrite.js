import { Client, Account, Databases } from "appwrite";

const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };





const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_TABLE_ID;

const form = document.getElementById("feedbackForm");
const messageInput = document.getElementById("messageInput");
const messageInput2 = document.getElementById("messageInput2");
const messageInput3 = document.getElementById("messageInput3");

const responseMsg = document.getElementById("responseMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const message = messageInput.value.trim();
  if (!message) return;

  try {
    await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      "unique()", 
      { msg: message } // 👈 
    );

    responseMsg.textContent = "✅ Message sent successfully!";
    responseMsg.style.color = "#00ff88";
    messageInput.value = "";
        messageInput2.value = "";
                messageInput3.value = "";

  } catch (error) {
    console.error("❌ Appwrite Error:", error);
    responseMsg.textContent = "Error sending message.";
    responseMsg.style.color = "red";
  }
});
