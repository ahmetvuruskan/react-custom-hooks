import Card from './Card';
import useCounter from "../hooks/use-counter";

const BackwardCounter = () => {


  return <Card>{useCounter(0,-1)}</Card>;
};

export default BackwardCounter;
