import { useNavigate } from "react-router-dom";

export default function NavigationButton({ label, to, className }) {
  const navigate = useNavigate();

  return (
    <button className={className} onClick={() => navigate(to)}>
      {label}
    </button>
  );
}
