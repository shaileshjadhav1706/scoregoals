import { useState, useEffect } from 'react';
// import throttle from 'lodash.throttle';

const getDeviceConfig = (width) => {
    if (width < 720) {
        return 'sm';
    } else if (width >= 720 && width < 1024) {
        return 'md';
    } else if (width >= 1024) {
        return 'lg';
    }
};


const useBreakpoint = () => {
    const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(window.innerWidth));


    const checkIsMobile = () => {
        return brkPnt == 'sm'
    }

    useEffect(() => {
        const calcInnerWidth = function () {
            setBrkPnt(getDeviceConfig(window.innerWidth))
        };
        window.addEventListener('resize', calcInnerWidth);
        return () => window.removeEventListener('resize', calcInnerWidth);
    }, []);

    // return brkPnt;
    return {
        isMobile: checkIsMobile()
    }
}
export default useBreakpoint;