


const Sectiontitle = ({heading,subHeading}) => {
  return (
    <div className="md:w-4/12 w-2/4 mx-auto text-center my-8">
      <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
      <h3 className="text-3xl uppercase border-y-2 py-2">{heading}</h3>
    </div>
  );
};

export default Sectiontitle;