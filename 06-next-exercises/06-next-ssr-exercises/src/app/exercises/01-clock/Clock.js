'use client';
import React from 'react';
import format from 'date-fns/format';

import Spinner from '../../../components/Spinner'


function Clock() {
  const [time, setTime] = React.useState();

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 50);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const result = !time ? <Spinner /> : format(time, 'hh:mm:ss.S a')

  return (
    <p className="clock">{result}</p>
  );
}

export default Clock;
