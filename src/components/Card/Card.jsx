import React from 'react';
import {
  CardContainer,
  CardImage,
  CardText,
  CardTitle,
  CardSubtitle,
  CardButton,
  CardButtonIcon,
} from '../../styles/components/Card/styles';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const cardVariants = {
  in: { opacity: 1 },
  out: { opacity: 0 },
}

const cardTransition = {
  duration: 0.6,
  delay: 0.6,
  type: "tween",
  ease: "easeInOut"
}

export default function Card(props) {
  return (
    <CardContainer
      initial="out"
      animate="in"
      exit="out"
      variants={ cardVariants }
      transition={ cardTransition }
    >
      <CardImage src={props.image} />
      <CardText>
        <CardTitle>{props.title}
          <CardSubtitle>{props.subtitle}</CardSubtitle>
        </CardTitle>
        <Link to={props.url} style={{ textDecoration: 'none' }}>
          <CardButton>Ver projeto
            <CardButtonIcon>
              <FiArrowRight/>
            </CardButtonIcon>
          </CardButton>
        </Link>
      </CardText>
    </CardContainer>
  );
}