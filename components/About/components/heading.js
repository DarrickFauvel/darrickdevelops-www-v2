export default function Heading({ classModifier }) {
  return (
    <h1
      className={`${classModifier} text-3xl leading-9 mb-4 font-medium sm:text-4xl sm:leading-10`}>
      Hi, I'm Darrick.
      <br className="inline-block" /> I build web apps.
    </h1>
  )
}
