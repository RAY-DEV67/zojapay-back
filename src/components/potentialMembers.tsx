import growth from "../assets/growth.png";

interface PotentialMembersProps {
  name: string;
  handle: string;
  score: string;
  image: string;
}

const PotentialMembers: React.FC<PotentialMembersProps> = ({
  name,
  handle,
  score,
  image,
}) => {
  return (
    <div className="border w-[35vw] lg:w-[11vw] p-[16px] rounded-[20px]">
      <div className="flex flex-col items-center">
        <img src={image} alt="avatar" />
        <p className="text-[16px] font-bold">{name}</p>
        <p className="text-[12px] text-custom-darkGray font-semibold">
          {handle}
        </p>
        <div className="flex flex-row mt-[4px]">
          <img src={growth} />
          <p className="ml-[4px] font-bold">{score}</p>
        </div>
      </div>
    </div>
  );
};

export default PotentialMembers;
