import MailTo from "../components/MailTo";

export const contactsData = {
  title: { RU: "Наши контакты", EN: "Contacts" },
  content: {
    RU: (
      <div>
        Для индивидуального предложения свяжитесь с нами сегодня{" "}
        <MailTo email="welcome@profitum.co.uk" /> или заполните форму и мы с
        Вами свяжемся
      </div>
    ),
    EN: (
      <div>
        For tailor made proposal contact us today{" "}
        <MailTo email="welcome@profitum.co.uk" /> or fill the form below and we
        get back to you
      </div>
    ),
  },
  labelButton: { RU: "Заполнить форму", EN: "Fil the form" },
};
