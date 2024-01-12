import Card from "./card/card";

export default function CarsHolder(props) {
  const { cars } = props;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-3">
      {cars.length > 0 &&
        cars.map((car) => {
          return <Card key={car._id} car={car} />;
        })}
    </div>
  );
}
