<form
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const contact = form.contact.value;
    const message = form.message.value;

    const text = `Новая заявка с сайта:
Имя: ${name}
Контакт: ${contact}
Задача: ${message}`;

    const response = await fetch(`https://api.telegram.org/8766295126:AAHRxatfSU5XT5Pm0SNJnYqzf16wFsBn7CY/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: 323670159,
        text
      })
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      alert("Ошибка отправки");
      return;
    }

    alert("Заявка отправлена");
    form.reset();
  }}
  style={{ marginTop: "60px", padding: "20px", border: "1px solid #ccc" }}
>
  <h2>Оставить заявку</h2>

  <input name="name" placeholder="Имя" required style={{ display: "block", marginBottom: "10px" }} />
  <input name="contact" placeholder="Телеграм или телефон" required style={{ display: "block", marginBottom: "10px" }} />
  <textarea name="message" placeholder="Задача" style={{ display: "block", marginBottom: "10px" }} />
  <button type="submit">Отправить</button>
</form>
