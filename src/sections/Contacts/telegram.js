export const buildTelegramText = ({ name, email, message }) =>
  `New portfolio message\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

export const sendTelegramMessage = async (formData) => {
  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    throw new Error(
      "Telegram settings are missing. Please add VITE_TELEGRAM_BOT_TOKEN and VITE_TELEGRAM_CHAT_ID."
    );
  }

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: buildTelegramText(formData),
    }),
  });

  const result = await response.json();

  if (!response.ok || !result.ok) {
    throw new Error(result.description || "Unable to send message.");
  }

  return result;
};
