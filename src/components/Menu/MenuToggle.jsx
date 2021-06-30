import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Button = styled.div`
  z-index: 99;
  cursor: pointer;
  top: 16px;
  right: 16px;

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    top: 30px;
    right: 40px;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    top: 16px;
    right: 30px;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    top: 16px;
    right: 16px;
  }
`;

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.3 };

export function MenuToggle({ toggle, isOpen }) {
  return (
    <Button onClick={toggle} style={{ position: isOpen ? "fixed" : "absolute" }}>
      <svg width="32" height="32" viewBox="0 0 23 17">
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", stroke: "hsl(0, 0%, 0.7843137254901961%)" },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(0, 0%, 100%)" },
          }}
          transition={transition}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke="hsl(0, 0%, 0%)"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346", stroke: "hsl(0, 0%, 0%)" },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(0, 0%, 100%)" },
          }}
          transition={transition}
        />
      </svg>
    </Button>
  );
}