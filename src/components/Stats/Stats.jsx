import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export const Stats = () => {
  return (
    <div className="stats">
      <CountUp start={0} end={6666} delay={0} duration={3} startOnMount>
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
            <div className="stats-holder">
              <span ref={countUpRef} />
              <p>Tons of lettuce produced annually</p>
            </div>
          </VisibilitySensor>
        )}
      </CountUp>
      <CountUp start={0} end={13} delay={0} duration={1}>
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
            <div className="stats-holder">
              <span ref={countUpRef} />
              <p>Subsidiary Companies</p>
            </div>
          </VisibilitySensor>
        )}
      </CountUp>

      <div className="stats-holder">
        <span>000</span>
        <p>Loyal Shareholders</p>
      </div>
      <CountUp start={0} end={333} delay={0} duration={2}>
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
            <div className="stats-holder">
              <span ref={countUpRef} />
              <p>Daily Investment Performance</p>
            </div>
          </VisibilitySensor>
        )}
      </CountUp>
      <div></div>
    </div>
  );
};
