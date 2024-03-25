interface FAQProps {
  heading: string;
  text: string;
  image: string;
}

const SolutionsCard: React.FC<FAQProps> = ({ heading, text, image }) => {
  return (
    <div className="bg-custom-secondary p-[16px] rounded-[10px] mt-[16px] lg:w-[32%]">
      <img src={image} className="mb-[8px]" />
      <h2 className="font-bold text-[4vw] lg:text-[20px] md:text-[19px] w-[70%] text-custom-primary">
        {heading}
      </h2>
      <p className="mt-[8px]">{text}</p>
    </div>
  );
};

export default SolutionsCard;
