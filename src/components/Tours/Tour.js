import { useState } from 'react';
import styles from './Tour.module.css';

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const trimmedInfo = info.substring(0, 150);

  const [detail, setDetail] = useState(false);

  const handledetailed = () => {
    setDetail(true);
  };

  const handledetailedCollpase = () => {
    setDetail(false);
  };

  const handleRemove = () => {
    removeTour(id);
  };

  return (
    <div className={styles.tour}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.tour_info}>
        <div className={styles.title}>
          <h2>{name}</h2>
          <h3>USD {price}</h3>
        </div>
        <p className={styles.info}>
          {!detail ? `${trimmedInfo}...` : info}{' '}
          {!detail ? (
            <button onClick={handledetailed} className={styles.info_button}>
              Read more
            </button>
          ) : (
            <button
              onClick={handledetailedCollpase}
              className={styles.info_button}
            >
              Show Less
            </button>
          )}
        </p>
      </div>
      <button className={styles.button} onClick={handleRemove}>
        Not interested
      </button>
    </div>
  );
};

export default Tour;
