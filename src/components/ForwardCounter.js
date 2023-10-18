import useCounter from '../hooks/use-counter';
import Card from './Card';

const ForwardCounter = () => {



  return <Card>{useCounter(0,1)}</Card>;
};

export default ForwardCounter;
