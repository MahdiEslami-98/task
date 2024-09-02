const Home = () => {
  const regEx = /(?:.*\n){0,100}<property>.*?<\/property>\n?/;
  return (
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-xl py-12 md:pl-12">
        With this regex code you can find the first property tag every 100 lines
        in xml code. :
      </h2>
      <div className="text-center ">
        <code className="bg-slate-500 px-2 md:px-8 py-4 rounded leading-[55px] sm:leading-none">{`${regEx}`}</code>
      </div>
    </div>
  );
};

export default Home;
