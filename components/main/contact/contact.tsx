import styles from "../../../styles/contact.module.css";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./contactForm";
import ContactItem from "./contactItem";

const Contact: React.FC = () => {
  const contactItems = [
    { icon: "uil-phone", title: "Call Me", subtitle: "+213-665-872-853" },
    {
      icon: "uil-envelope",
      title: "Email",
      subtitle: "lakhdar.boudina@gmail.com",
    },
    {
      icon: "uil-map-marker",
      title: "Location",
      subtitle: "Algiers, Algeria",
    },
  ];

  return (
    <div>
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className={`${styles.contact__container} container grid`}>
        <div>
          {contactItems.map((item, index) => (
            <ContactItem
              key={uuidv4()}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
