// function Greet() {
//   return (
//     <div>
//       <h3>Hello functional Component...</h3>
//     </div>
//   );
// }
const Greet = ({ name, age }) => {
  return (
    <div>
      <h3>Hello functional Component...</h3>
      <h4>
        Name: {name} age: {age}
      </h4>
    </div>
  );
};
export default Greet;
