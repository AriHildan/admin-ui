const Label = () => {
  return (
    <>
    <div className="mb-6">
        <label htmlFor="email" className="block text-sm mb-2">
            Email Address
        </label>
    </div>
    <div className="mb-6">
        <label htmlFor="password" className="block text-sm mb-2">
            Password
        </label>

    </div>
    </>
  );
};

export default Label;