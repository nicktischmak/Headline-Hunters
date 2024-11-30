function ContainerUI(props) {
  return (
    <div className={`container${props.fluid ? '-fluid' : ''}`}>
      {props.children}
    </div>
  );
}

export default ContainerUI;