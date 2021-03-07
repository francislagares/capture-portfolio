/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

type ToggleProps = {
  title: string;
  children?: React.ReactNode;
};

const Toggle: React.FC<ToggleProps> = ({
  title,
  children,
}: ToggleProps): JSX.Element => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className='question' onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ''}
      <div className='faq-line'></div>
    </motion.div>
  );
};

export default Toggle;
