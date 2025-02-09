export default function ProjectCard(props) {
  return (
    <div className="w-64">
      <h1 className="text-3xl">{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}
