import { useAppContext } from "../context/AppProvider";
const PersonalInfo = () => {
  const { currentPage, setPage } = useAppContext();
  return (
    <form
      className="personal-info container--position"
      style={{ transform: `translateY(${(1 - currentPage) * 130}%)` }}
    >
      <article className="personal-info__card card">
        <h5 className="personal-info__title title">Personal info</h5>
        <p className="personal-info__desc desc">
          Please provide your name, email address, and phone number.
        </p>
        <div className="personal-info__row">
          <label htmlFor="name" className="personal-info__label">
            name
          </label>
          <input
            type="text"
            id="name"
            className="personal-info__input"
            placeholder="e.g. Stephen King"
            required
          />
        </div>
        <div className="personal-info__row">
          <label htmlFor="email" className="personal-info__label">
            email address
          </label>
          <input
            type="email"
            id="email"
            className="personal-info__input"
            placeholder="e.g. stephenking@lorem.com"
            required
          />
        </div>
        <div className="personal-info__row">
          <label htmlFor="phone" className="personal-info__label">
            phone number
          </label>
          <input
            type="text"
            id="phone"
            className="personal-info__input"
            placeholder="e.g. +1 234 567 890"
            required
          />
        </div>
      </article>
      <div className="btn__container">
        <button type="button" className="btn" onClick={() => setPage(2)}>
          next step
        </button>
      </div>
    </form>
  );
};

export default PersonalInfo;
