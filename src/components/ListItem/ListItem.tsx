import styles from './ListItem.module.css';

interface IProps {
  item: number;
}

const List = ({ item }: IProps) => {
  const isBoom = item === -1;
  return (
    <li className={isBoom ? styles.boom : styles.item}>
      {isBoom ? 'Boom' : item}
    </li>
  );
};

export default List;
