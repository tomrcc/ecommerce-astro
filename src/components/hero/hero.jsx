export default ({ title, button, image, image_alt }) => {
  return (
    <div className="relative flex flex-col justify-items-center px-5 py-10 md:px-10 md:py-20 lg:px-20 lg:py-40">
      <h1 className="relative z-10 text-5xl lg:text-6xl font-bold py-3 md:py-5 text-white">
        {title}
      </h1>
      {button.button_text && (
        <a
          href={button.button_path}
          className="relative z-10 bg-gray-100 w-fit py-3 px-8 rounded-lg"
        >
          {button.button_text}
        </a>
      )}
      <img
        src={image}
        alt={image_alt}
        className="absolute inset-0 scale-x-[-1]"
      />
    </div>
  );
};
