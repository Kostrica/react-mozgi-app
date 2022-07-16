import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/Routes';

import styles from './App.module.scss';

const TRANSITION_MULTIPLIER = 5;

const App = () => {
  const [coordinates, setCoordinates] = useState({ pageX: 0, pageY: 0 });
  const [pageSize, setPageSize] = useState({ height: 0, width: 0 });
  const [textData, setTextData] = useState({ x: 0, y: 0, height: 0, width: 0 });
  const [animationIsActive, setAnimationIsActive] = useState(false);
  const [animationOn, setAnimationOn] = useState(false);

  const pageRef = useRef(null);
  const textRef = useRef(null);

  const { pathname } = useLocation();

  const { translateX, translateY } = useMemo(() => {
    const x = textData.x + textData.width / 2;
    const y = textData.y + textData.height / 2;
    const translateX =
      ((coordinates.pageX - x) / pageSize.width) * TRANSITION_MULTIPLIER;
    const translateY =
      ((coordinates.pageY - y) / pageSize.height) * TRANSITION_MULTIPLIER;

    return { translateX, translateY };
  }, [textData, coordinates, pageSize]);

  useEffect(() => {
    if (pageRef.current) {
      const { clientHeight, clientWidth } = pageRef.current;
      setPageSize({ height: clientHeight, width: clientWidth });
    }

    if (textRef.current) {
      const { clientHeight, clientWidth, offsetLeft, offsetTop } =
        textRef.current;
      setTextData({
        x: offsetLeft,
        y: offsetTop,
        height: clientHeight,
        width: clientWidth,
      });
    }
  }, []);

  useEffect(() => {
    if (pathname && animationOn) {
      setAnimationIsActive(true);
    }

    setAnimationOn(true);

    setTimeout(() => {
      setAnimationIsActive(false);
    }, 1500);
  }, [pathname]);

  return (
    <div
      className={styles.app}
      ref={pageRef}
      onMouseMove={({ pageX, pageY }) => setCoordinates({ pageX, pageY })}
    >
      {animationIsActive && <div className={styles.wraperAnimation} />}
      <Header />
      <AppRoutes
        translateX={translateX}
        translateY={translateY}
        setCoordinates={setCoordinates}
        textRef={textRef}
      />
      <Footer />
    </div>
  );
};

export default App;
