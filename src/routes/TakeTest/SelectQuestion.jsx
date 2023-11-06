const SelectQuestion = () => {
  const array = Array(100).fill(null);
  // console.log(array);
  return (
    <div className="border p-5">
      <h2 className="p-2"> Section</h2>
      <div className="  max-h-[300px] overflow-scroll scr">
        <div className="p-2 grid grid-cols-5 gap-4">
          {array.map((item, i) => (
            <div
              key={i}
              className="bg-gray-200 hover:bg-gray-400 rounded text-center p-2 max-h-10 cursor-pointer"
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectQuestion;
