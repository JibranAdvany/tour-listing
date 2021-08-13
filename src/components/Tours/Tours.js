import Tour from './Tour';
import styles from './Tours.module.css';

const Tours = ({ data, removeTour }) => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      {data.map(({ id, image, info, name, price }) => (
        <Tour
          key={id}
          id={id}
          image={image}
          info={info}
          name={name}
          price={price}
          removeTour={removeTour}
        />
      ))}

      {data.length === 0 ? (
        <>
          <h3 className={styles.no_tours}>No more tours</h3>
          <button onClick={handleReload} className={styles.reload_button}>
            Refresh
          </button>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Tours;
