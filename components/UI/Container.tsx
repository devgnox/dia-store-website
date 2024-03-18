import React from "react";

interface IContainerProps {
  children: React.ReactNode;
}

const container: React.FC<IContainerProps> = ({ children }) => {
  return <div className="mx-auto max-x-7xl">{children}</div>;
};

export default container;
