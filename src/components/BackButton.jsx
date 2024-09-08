import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton({ to = -1 }) {
  const navigate = useNavigate();

  return (
    <Button
      type={`back`}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
