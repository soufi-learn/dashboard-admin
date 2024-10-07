import Features from "../../components/features/Features";

const Home = () => {
  return (
    <div className="mt-10">
      <div className="bg-secondary-main dark:bg-primary-dark transition-all absolute right-[10%] -z-10 w-[90%] h-40"></div>
      <h2 className="mb-6 text-white pt-7">داشبورد</h2>
      <Features />
    </div>
  );
};

export default Home;
