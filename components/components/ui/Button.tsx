'use client';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  isLoading = false, 
  children, 
  className = '', 
  disabled,
  ...props 
}: ButtonProps) => {
  const baseStyles = 'font-bold py-3 px-8 rounded-lg text-lg transition-colors';
  const variants = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white',
    secondary: 'bg-blue-500 hover:bg-blue-600 text-white'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${isLoading ? 'opacity-70 cursor-not-allowed' : ''} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? 'Caricamento...' : children}
    </button>
  );
};