import ListItem from '../ListItem/ListItem';
import styles from './List.module.css';

interface IProps {
  sequence: number[];
}

const List = ({ sequence }: IProps) => {
  return (
    <ul className={styles.list}>
      {sequence.map((item, index) => (
        <ListItem item={item} key={index.toString()} />
      ))}
    </ul>
  );
};

export default List;
