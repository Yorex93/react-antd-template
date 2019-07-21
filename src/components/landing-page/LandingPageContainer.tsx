import * as React from 'react';
import './LandingPageStyles.scss';

export interface LandingPageContainerProps {
  name?: any
}

const LandingPageContainer : React.FC<LandingPageContainerProps> = ({ name }) => {
    return (
        <div className={`landing-page`}>
            Landing Page
        </div>
    )
}

export default LandingPageContainer;
