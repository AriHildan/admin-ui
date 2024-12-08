const Card = (props) => {
<<<<<<< HEAD
  const { title = false, desc, variant } = props;

  return (
      <div className={`flex flex-col flex-1 mb-6 ${variant}`}>
          {title && (
              title.length == 1 ? (
                  <div className="hidden md:block md:text-lg md:text-gray-02 md:mb-4">
                      {title}
                  </div>
              ) : (
                  <div className="text-lg text-gray-02 mb-4">{title}</div>
              )
          )}
          <div className="bg-white rounded-lg px-6 py-5 shadow-xl flex-1">
              {desc}
          </div>
      </div>
  );
};
=======
  // eslint-disable-next-line react/prop-types
  const { title = false, desc, variant } = props;
  
  if (!title && !desc) {
    console.error("Card component requires either a title or a description prop.");
    return null; // Or you can throw an error
  }
>>>>>>> f6b0764778b792a0a4546ffff5908d15305072aa

  return (
      <div className={`flex flex-col flex-1 mb-6${variant}`}>
          {title && (
              <>
                  {title.length == 1 ? (
                      <div className="hidden md:block md:text-lg md:text-gray-02 md:mb-4">
                          {title}
                      </div>
                  ) : (
                      <div className="text-lg text-gray-02 mb-4">{title}</div>
                  )}
              </>
          )}
          <div className="bg-white rounded-lg px-6 py-5 shadow-xl flex-1">
              {desc}
          </div>
      </div>
  );
};

export default Card;