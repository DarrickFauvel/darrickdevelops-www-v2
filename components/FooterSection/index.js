import Container from "../shared/Container"
import ScrollOffset from "../shared/ScrollOffset"

const FooterSection = () => {
  const classesContainer =
    "flex flex-col items-center flex-wrap w-full md:flex-row md:justify-center md:max-w-3xl lg:max-w-5xl"

  return (
    <footer>
      <ScrollOffset>
        <Container>
          <div className={`${classesContainer}`}>
            <div className="text-center font-light text-white mb-4 md:mb-0">
              Made with{" "}
              <span role="img" aria-label="heart emoji">
                ❤️
              </span>{" "}
              in Massachusetts.
            </div>
          </div>
        </Container>
      </ScrollOffset>
    </footer>
  )
}

export default FooterSection
