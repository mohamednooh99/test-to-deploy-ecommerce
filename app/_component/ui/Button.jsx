import React, { useContext } from 'react'; 
import CartApis from '../../_utils/CartApis';
export default function Button({ children, disabled, to, type, onClick }) {

  const base =
    'inline-block rounded uppercase text-sm   transition-colors duration-300 flex gap-3 bg-blue-600 text-white items-center font-semibold py-2 px-4 rounded  tracking-wide disabled:cursoe-not-allowed ';
  const styles = {
    primary: base  
 };


//   if (to)
//     return (
//       <Link className={styles[type]} to={to}>
//         {' '}
//         {children}{' '}
//       </Link>
//     );

  if (onClick)
    return (
      <button onClick={onClick}  className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button  className={styles[type]}>
      {children}
    </button>
  );
}