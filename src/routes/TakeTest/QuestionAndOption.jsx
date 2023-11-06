const QuestionAndOption = () => {
  return (
    <div className="lg:w-3/4 min-h-[50px] overflow-scroll bg-gray-100 rounded p-5 shadow-lg border my-5 md:m-5">
      <h1 className="max-h-32 overflow-scroll">
        QUestion Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Temporibus totam necessitatibus sed fugiat perspiciatis quos minus
        tenetur at quaerat accusamus ducimus voluptas iusto, ad voluptatibus
        consequatur facere repellendus et veniam. Error ea architecto amet eum
        consequuntur, porro aspernatur, rerum voluptatem vitae cum enim fugit,
        molestias tenetur facere exercitationem nesciunt illo. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Tenetur distinctio sunt dolores
        voluptatum dolor laudantium aliquam, delectus incidunt fugiat
        dolore.lorem30
      </h1>
      <div className="py-2">
        <div className="py-1"> 
          <input type="radio" className="outline-none border-2 border-red-500" />
          <label>A. Lorem Dolor ipsul</label>
        </div>
        <div className="py-1">
          <input type="radio" className="outline-none border-2 border-red-500" />
          <label>B. Lorem Dolor ipsul</label>
        </div>
        <div className="py-1">
          <input type="radio" className="outline-none border-2 border-red-500" />
          <label>C. Lorem Dolor ipsul</label>
        </div>
        <div className="py-1">
          <input type="radio" className="outline-none border-2 border-red-500" />
          <label>D. Lorem Dolor ipsul</label>
        </div>
      </div>
      <div className="py-3 flex gap-5">
        <button className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 outline-none focus:ring-2">PREVIOUS</button>
        <button className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 outline-none focus:ring-2">NEXT</button>
      </div>
    </div>
  );
};

export default QuestionAndOption;
