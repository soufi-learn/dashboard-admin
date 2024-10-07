import Features from "../../components/features/Features";

const Home = () => {
  return (
    <div className="mt-10">
      <div className="bg-secondary-main/10 dark:bg-secondary-dark/45 transition-all absolute right-[10%] -z-10 w-[90%] h-40"></div>
      <h2 className="mb-6 text-dark-main dark:text-white transition-all pt-7">
        داشبورد
      </h2>
      <Features />
    </div>
  );
};

export default Home;
