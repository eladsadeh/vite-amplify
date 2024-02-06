export const About = () => {
  const name = import.meta.env.VITE_APP_NAME;
  return (
    <div>
      <p>{name}</p>
      <p>Version {APP_VERSION}</p>
      <p>{BUILD_TIME}</p>
    </div>
  );
};
