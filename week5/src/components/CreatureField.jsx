import Creature from './Creature.jsx';
function CreatureField() {
  const fieldStyle = {
    width: '800px',
    height: '800px',
    position: 'relative',
    margin: '0 auto',
    overflow: 'hidden',
    borderRadius: '12px',
    backgroundColor:'#f4f4f9' 
  };

  
  const creaturesArray = [
    { id: 1, name: "Bell", age: 5, imageUrl: "/images/first_sleep.png", x: 50, y: 100 },
    { id: 2, name: "Mittens", age: 4, imageUrl: "/images/second_sleep.png", x: 300, y: 50},
    { id: 3, name: "Jack", age: 6, imageUrl: "/images/third_sleep.png", x: 150, y: 400},
    { id: 4, name: "Cokkie", age: 3, imageUrl: "/images/fourth_sleep.png", x: 450, y: 200},
    { id: 5, name: "Soppo", age: 5, imageUrl: "/images/fifth_sleep.png", x: 600, y: 500}
  ];

  return (
    <div style={fieldStyle}>
      {creaturesArray.map((creature) => (
        <Creature
          key={creature.id}
          name={creature.name}
          age={creature.age}
          imageUrl={creature.imageUrl}
          x={creature.x}
          y={creature.y}
          color={creature.color}
          mood={creature.mood}
        />
      ))}
    </div>
  );
}

export default CreatureField;