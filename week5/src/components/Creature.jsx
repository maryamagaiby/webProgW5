// Christyn Tayar, Maryam Agaiby, Hope Aijidiru
  
  function Creature(props) {
    const style = {
      position: 'absolute',
      left: props.x + 'px',
      top: props.y + 'px',
      textAlign: 'center',
      
    };
  
    return (
      <div style={style}>
        <img
          src={props.imageUrl}
          alt={props.name}
          style={{ width: '120px', height: '120px',imageRendering: 'pixelated' }}
        />
        <h3>{props.name}</h3>
        <p>Age: {props.age}</p>
      </div>
    );
  }
  
  export default Creature;