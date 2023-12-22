const Footer = () => {
  const classesContainer =
    "flex flex-col items-center flex-wrap w-full mx-auto md:flex-row md:justify-center md:max-w-3xl lg:max-w-5xl"

  return (
    <footer className="footer">
      <div className={`${classesContainer} p-5`}>
        <div className="text-center font-light text-white mb-4 md:mb-0">
          Made with{" "}
          <span role="img" aria-label="heart emoji">
            ❤️
          </span>{" "}
          in Massachusetts.
        </div>
      </div>
    </footer>
  )
}

export default Footer
