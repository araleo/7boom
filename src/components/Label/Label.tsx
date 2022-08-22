import { isNumBoom } from '../../utils/lib';
import styles from './Label.module.css';

interface IProps {
  current: number;
}

const Label = ({ current }: IProps) => {
  return (
    <p
      className={[styles.label, isNumBoom(current) ? styles.boom : ''].join(
        ' '
      )}
    >
      {current.toString()}
    </p>
  );
};

export default Label;
