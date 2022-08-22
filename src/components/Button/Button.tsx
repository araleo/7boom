import styles from './Button.module.css';

interface IProps {
  onClick: () => void;
}

const Button = ({ onClick }: IProps) => {
  return (
    <button type='button' onClick={onClick} className={styles.increase}>
      Increase
    </button>
  );
};

export default Button;
