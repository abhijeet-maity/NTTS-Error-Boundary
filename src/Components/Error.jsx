export const Error = () => {
  // Error Boundary will not work in case of event handlers, thats why error boundary will not catch any error on the click of button
  const handleClick = () => {
    try {
      throw new Error("Failed to load data... ");
    } catch (error) {
      console.error(error)
    }
  };

  throw new Error("Failed to load data... ");

  return (
    <div>
      <button onClick={handleClick}>Get Details</button>
    </div>
  );
};
