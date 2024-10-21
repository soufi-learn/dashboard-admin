import Chart from "../../components/chart/Chart";
import Features from "../../components/features/Features";
import NewMembers from "../../components/newMembers/NewMembers";
const Home = () => {
  return (
    <div className="mt-20">
      <div className="bg-secondary-main dark:bg-primary-dark transition-all right-0 absolute lg:right-[10%] -z-10 w-full lg:w-[90%] h-40"></div>
      <h2 className="mb-6 text-white pt-7">داشبورد</h2>
      <Features />
      <Chart />
      <NewMembers />
    </div>
  );
};

export default Home;
