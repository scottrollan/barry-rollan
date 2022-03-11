import React, { useState, useEffect } from 'react';

const MetricClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 864);
    return () => clearInterval(interval);
  }, []);

  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();
  const mTime = ((h * 3600 + m * 60 + s) / 0.864).toFixed(0);
  const mTimeStr = mTime.toString();
  const mTimeArray = mTimeStr.split('');
  const mTimeFormatted = `${mTimeArray[0]}.${mTimeArray[1]}${mTimeArray[2]}${mTimeArray[3]}${mTimeArray[4]}`;

  return (
    <span>
      <h4 style={{ margin: '0' }}>(the current metric time)</h4>
      <h1>{mTimeFormatted}</h1>
      <p style={{ margin: '0' }}>For fun, I made a "metric" clock</p>
      <p>
        It has 10 hours in a day, 100 minutes in an hour and 100 seconds in a
        minute.
      </p>
      <p>It makes much more sense than our current 24-hour/60-minute setup.</p>
      <p>
        Some adjustments the world will have to make before adopting this system
        of time:
      </p>
      <div style={{ paddingLeft: '2.5em', marginBottom: '12px' }}>
        The 24 time zones will have to condense into 10 time zones;
      </div>
      <div style={{ paddingLeft: '2.5em', marginBottom: '12px' }}>
        everyone has to grow accustomed to lunch starting at 5.00, and;
      </div>
      <div style={{ paddingLeft: '2.5em', marginBottom: '12px' }}>
        "one Mississippi..." will have to change to "one Nevada..."
      </div>
    </span>
  );
};

export default MetricClock;
