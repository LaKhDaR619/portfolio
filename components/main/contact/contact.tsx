import styles from "../../../styles/contact.module.css";
import ContactForm from "./contactForm";
import ContactItem from "./contactItem";

const Contact: React.FC = () => {
  const contactItems = [
    { icon: "uil-phone", title: "Call Me", subtitle: "+213-665-872-853" },
    {
      icon: "uil-map-marker",
      title: "Location",
      subtitle: "Algiers, Algeria",
    },
    { icon: "uil-phone", title: "Call Me", subtitle: "+213-665-872-853" },
  ];

  return (
    <section className={`${styles.contact} section`} id="about">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className={`${styles.contact__container} container grid`}>
        <div>
          {contactItems.map((item, index) => (
            <ContactItem
              key={index}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
