export default function Heading({ classModifier }) {
  return (
    <h1 className={`${classModifier} leading-9 sm:leading-10 mb-4 font-medium`}>
      <div className="text-4xl">Hi, I'm Darrick.👋</div>
      <div className="text-3xl">I'm a web developer.</div>
    </h1>
  )
}
