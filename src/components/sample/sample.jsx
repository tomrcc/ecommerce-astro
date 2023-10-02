export default ({ title, subtitle }) => {
  return (
    <div className="c-hero">
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};
