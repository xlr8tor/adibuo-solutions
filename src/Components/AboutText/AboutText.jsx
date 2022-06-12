import { Wrapper } from "./AboutText.styles";

const AboutText = () => {
  return (
    <Wrapper className="container section">
      <span className="text__section">
        We are a team of incisive strategists, customer experience managers,
        consultants, IT experts, analysts, project managers, and financial
        advisors who help guide business achieve rapid growth.
      </span>

      <span className="text__section">
        We believe that the success of a business relies on more than just a
        good product or service. At Adibuo, we focus on how your customers feel;
        they are the ones keeping you in business, after all.
      </span>

      <span className="text__section">
        We provide support to both prospective and existing customers making
        sure they have a great experience and are inclined to want to keep doing
        business with you. We also give you the necessary IT support to handle
        internal teams and customer requests. The industries we serve include
        but are not limited to finance, healthcare, advertising, engineering,
        technology, private/public sector, energy & politics.
      </span>
    </Wrapper>
  );
};

export default AboutText;
