const Card = () => {
  return (
    <div className="foreground-primary border border-gray-700 text-white p-6 rounded-lg w-full flex flex-col gap-10 poppins-regular">
      <div className="text-sm text-gray-400">Total Income</div>
      <div className="text-3xl font-bold my-2 text-center">$6.2 K</div>
      <div className="flex justify-between text-sm text-gray-400">
        <span>This year</span>
        <span className="text-white">22%</span>
      </div>
    </div>
  );
};

export default Card;
