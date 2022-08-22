import styles from './List.module.css';

interface IProps {
  sequence: number[];
}

const List = ({ sequence }: IProps) => {
  return (
    <ul className={styles.list}>
      {sequence.map((item) => (
        <li className={item === -1 ? styles.boom : styles.item}>{item === -1 ? 'Boom' : item}</li>
      ))}
    </ul>
  );
};

export default List;
