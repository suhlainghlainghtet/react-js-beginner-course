import React from "react";

const FcInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} />
    </div>
  );
});
export default FcInput;
