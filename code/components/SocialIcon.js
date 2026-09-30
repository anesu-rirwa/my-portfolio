import { FaGithub, FaLinkedinIn, FaKaggle } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { IoLogoTableau } from 'react-icons/io5';

const icons = {
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
  Kaggle: FaKaggle,
  Tableau: IoLogoTableau,
  Email: FiMail,
};

export default function SocialIcon({ name, className }) {
  const Icon = icons[name];
  return Icon ? <Icon className={className} aria-hidden="true" /> : null;
}
