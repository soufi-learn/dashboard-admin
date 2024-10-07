import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

const Features = () => {
  return (
    <div className="flex gap-4 ">
      <section className="rounded-md bg-white dark:bg-primary-light p-4 shadow-md transition-all">
        <span className="mb-2">درآمد</span>
        <div className="flex gap-3">
          <span>۴۸,۶۸۰,۰۰۰ تومان</span>
          <span>۲۴.۵ +</span>
          <FaArrowUp />
        </div>
      </section>
    </div>
  );
};

export default Features;
