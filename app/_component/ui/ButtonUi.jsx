import React from "react";

export default function ButtonUi({ children, onClick,type }) {
  const base =
    "inline-block bg-teal-500 rounded uppercase font-mono text-sm  font-semibold hover:bg-teal-600 transition-colors duration-300 focus:bg-teal-300 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-offset-2  tracking-wide disabled:cursoe-not-allowed ";
 const styles = {
  primary:base + 'px-3 py-1  max-sm:tracking-tighter text-white text-l  max-sm:p-1 '
  ,secondry:base + 'px-2  text-white text-sm  '
 }
  return <button onClick={onClick} className={styles[type]} >{children}</button>
}
