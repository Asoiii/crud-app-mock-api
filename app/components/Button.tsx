type ButtonProps = {
    label: string;
    onClick: () => void;
  };
  
  export default function Button({ label, onClick }: ButtonProps) {
    return (
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
  