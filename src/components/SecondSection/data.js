import { ReactComponent as CheckIcon } from "../../images/shield-check.svg";
import { ReactComponent as Users } from "../../images/users-profiles-03.svg";
import { ReactComponent as BankNote } from "../../images/bank-note-05.svg";
import { ReactComponent as Book } from "../../images/book-02.svg";
import { ReactComponent as Support } from "../../images/help-circle-contained.svg";

export const cardContent = [
  {
    icon: <CheckIcon />,
    heading: "Secure and Reliable",
    content:
      "We prioritize your data security with advanced encryption and strict privacy protocols, ensuring that your information is always protected.",
  },
  {
    icon: <Users />,
    heading: "User-Friendly Experience",
    content:
      "Our platform is designed with simplicity inmind. Whether you’re a retiree submitting your employment history or an employer managing records, the process is quick and easy, with clear instructions at every step.",
  },
  {
    icon: <BankNote />,
    heading: "Accurate and Timely Payments",
    content:
      "For retirees, our system ensures that once your employment history is verified, payments are processed promptly and accurately. No delays, just the benefits you've earned.",
  },
  {
    icon: <Book />,
    heading: "Comprehensive Compliance for Employers",
    content:
      "Employers can rest assured knowing that they are meeting all regulatory requirements by securely uploading employee data. Our platform takes the guesswork out of compliance.",
  },
  {
    icon: <Support />,
    heading: "24/7 Support",
    content:
      "Our dedicated support team is available around the clock to assist with any questions or concerns you may have, ensuring a seamless experience from start to finish.",
  },
];
