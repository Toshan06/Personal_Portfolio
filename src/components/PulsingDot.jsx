import React, { useEffect, useState } from "react";

const PulsingDot = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((previous) => !previous);
    }, 500);
    return () => clearInterval(interval)
  }, []);

  return (
    <div className="border-1 w-3 h-3 border-blue-50 rounded-full">
      {visible && <div className="w-3 h-3 bg-blue-500 rounded-full"></div>}
    </div>
  );
};

export default PulsingDot;
