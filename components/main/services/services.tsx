import styles from "../../../styles/services.module.css";
import ServicesSection from "./servicesSection";

const Services: React.FC = () => {
  const servicesSections = [
    {
      icon: "uil-arrow",
      title: ["Front-end", "Developer"],
      items: [
        "I develop the user interface.",
        "I turn designs to pixel-perfect web sites",
        "I fix any bugs that you have",
      ],
    },
    {
      icon: "uil-brackets-curly",
      title: ["Back-end", "Developer"],
      items: ["I develop the backend.", "I fix any bugs that you have"],
    },
  ];

  return (
    <section className={`${styles.services} section`} id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className={`${styles.services__container} container grid`}>
        {servicesSections.map((section) => (
          <ServicesSection
            key={section.icon}
            icon={section.icon}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
