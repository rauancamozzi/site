import React from 'react';
import {
    PortfolioContainer,
    PortfolioSection,
    PortfolioTitle
} from '../../styles/pages/Portfolio/styles';

import Card from '../../components/Card/Card';
import rhaastProjectIcon from '../../assets/rhaast/icon.png';

const containerVariants = {
    in: { opacity: 1 },
    out: { opacity: 0 },
}
  
const containerTransition = {
    duration: 0.6,
    delay: 0.4,
    type: "tween",
    ease: "easeInOut"
}

export default function Portfolio() {
    return (
        <PortfolioContainer
            initial="out"
            animate="in"
            exit="out"
            variants={ containerVariants }
            transition={ containerTransition }
        >
            <PortfolioSection>
                <PortfolioTitle>Portofolio</PortfolioTitle>
            </PortfolioSection>
            <Card image={rhaastProjectIcon} title='Rhaast' subtitle='BOT' url='/portfolio/rhaast' />
        </PortfolioContainer>
        
    );
}