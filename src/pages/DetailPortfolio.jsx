import {useParams} from 'react-router-dom';
function DetailPortfolio() {
    const { id } = useParams();
  return (
    <div>Hello world ${id}</div>
  )
}

export default DetailPortfolio