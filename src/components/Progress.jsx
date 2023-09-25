import { progressData } from "../utils";
import { useAppContext } from "../context/AppProvider";

const Progress = () => {
  const { currentPage } = useAppContext();
  return (
    <aside className="progress">
      <ul className="progress__info">
        {progressData.map(({ id, header, desc }, index) => {
          return (
            <div key={id} className="progress__item">
              <span
                className={
                  currentPage === index + 1
                    ? "progress__index progress__index--active"
                    : "progress__index"
                }
              >
                {index + 1}
              </span>
              <div className="progress__body">
                <h4 className="progress__header">{header}</h4>
                <h5 className="progress__desc">{desc}</h5>
              </div>
            </div>
          );
        })}
      </ul>
    </aside>
  );
};

export default Progress;
