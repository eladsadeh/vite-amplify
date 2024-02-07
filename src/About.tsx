export const About = () => {
  const { MY_APP_NAME, MY_APP_VERSION, BUILD_TIME } = import.meta.env;
  return (
    <div>
      <p>{MY_APP_NAME}</p>
      <p>Version {MY_APP_VERSION}</p>
      <p>{BUILD_TIME}</p>
    </div>
  );
};
