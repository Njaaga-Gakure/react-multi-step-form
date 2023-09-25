import { plans } from "../utils";
import { useAppContext } from "../context/AppProvider";

const Plan = () => {
  const { currentPage, setPage, isMonthly, setSubscription } = useAppContext();
  return (
    <section
      className="plan container--position"
      style={{ transform: `translateY(${(2 - currentPage) * 130}%)` }}
      //   style={{ transform: "translateY(110%)" }}
    >
      <article className="plan__card card">
        <h5 className="plan__title title">Select your plan</h5>
        <p className="plan__desc desc">
          You have the option of monthly or yearly billing.
        </p>
        <div className="plans">
          {plans.map(({ id, icon, title, monthly_price, yearly_price }) => {
            return (
              <div key={id} className="plan__item">
                <img src={icon} alt={title} className="plan__icon" />
                <div className="plan__body">
                  <h5 className="plan__name title">{title}</h5>
                  <p className="plan__price desc">
                    {isMonthly ? `$${monthly_price}/mo` : `$${yearly_price}/yr`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="plan__duration">
          <span
            className={
              isMonthly
                ? "plan__duration-text desc plan__duration-text--active"
                : "plan__duration-text desc"
            }
          >
            monthly
          </span>
          <div
            style={{
              justifyContent: isMonthly ? "flex-start" : "flex-end",
            }}
            onClick={setSubscription}
            className="plan__duration-toggle"
          >
            <div className="plan__duration-toggler"></div>
          </div>
          <span
            className={
              !isMonthly
                ? "plan__duration-text desc plan__duration-text--active"
                : "plan__duration-text desc"
            }
          >
            yearly
          </span>
        </div>
      </article>
      <div className="btn__container btn__container--multiple">
        <button type="button" className="prev__btn" onClick={() => setPage(1)}>
          go back
        </button>
        <button type="button" className="btn">
          next step
        </button>
      </div>
    </section>
  );
};

export default Plan;
