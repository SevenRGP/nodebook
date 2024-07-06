import React from 'react';

const Container = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <>
      <div className={`w-full grid gap-3 ${className}`}
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        {...props}
      >
        {children}
      </div>
    </>
  )
}

export default Container;