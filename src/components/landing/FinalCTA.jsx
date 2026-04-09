export default function FinalCTA({ formRef }) {
  return (
    <div
      ref={formRef}
      style={{
        padding: "80px 20px",
        background: "#0a0a0a",
        color: "#fff",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div style={{ maxWidth: "500px", width: "100%" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Оставить заявку
        </h2>

        <form
          onSubmit={async (e) => {
            e.preventDefault();

            try {
              const form = e.target;
              const name = form.name.value;
              const contact = form.contact.value;
              const message = form.message.value;

              const text = `Новая заявка с сайта:
Имя: ${name}
Контакт: ${contact}
Задача: ${message}`;

              const response = await fetch(
                "https://api.telegram.org/bot8766295126:AAGLP2t7vKh65hCInNGOHmCYIVOtIbO5OdE/sendMessage",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    chat_id: 475754754,
                    text
                  })
                }
              );

              const data = await response.json();
              console.log(data);

              if (!response.ok) {
                alert("Ошибка: " + (data.description || ""));
                return;
              }

              alert("Заявка отправлена");
              form.reset();
            } catch (err) {
              console.error(err);
              alert("Ошибка отправки");
            }
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px"
          }}
        >
          <input name="name" placeholder="Имя" required />
          <input name="contact" placeholder="Телеграм или телефон" required />
          <textarea name="message" placeholder="Задача" />
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
}
