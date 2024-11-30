interface TestimonialCardProps {
    name: string;
    text: string;
    image: string;
  }
  
  export const TestimonialCard = ({ name, text, image }: TestimonialCardProps) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <h3 className="font-bold">{name}</h3>
        </div>
        <p className="text-gray-600">{text}</p>
      </div>
    );
  };