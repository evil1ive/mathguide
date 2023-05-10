import { Link } from 'react-router-dom';
import './footer.scss';


export const Footer = () => {

  return (
    <div className='footer'>
        <p>&#169;2023 С какими-либо предложениями пишите сюда → <Link className='footer__link' to="mailto:mihaf2004@gmail.com?subject=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%20%D1%8D%D1%82%D0%BE%20%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA!!!&body=%D0%9D%D0%B0%D0%BF%D0%B8%D1%88%D0%B8%D1%82%D0%B5%20%D1%81%D1%8E%D0%B4%D0%B0%20%D1%81%D0%B2%D0%BE%D0%B8%D0%BC%20%D0%BF%D0%BE%D0%B6%D0%B5%D0%BB%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%B8%D0%BB%D0%B8%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%8B">{"a/b = (a+b)/a"}</Link></p>
    </div>
  );
}
