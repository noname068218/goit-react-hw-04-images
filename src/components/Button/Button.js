import { ButtonStyle } from './Button.style';

export const Button = ({ onClick }) => {
  return (
    <ButtonStyle onClick={onClick}>
      {' '}
      <strong>SPACE</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>
      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </ButtonStyle>
  );
};
