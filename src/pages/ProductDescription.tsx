import { Header } from '../components';
import Description from '../components/Description';
import Warranty from '../components/Warranty';
import { LastReleases } from '../views';

function ProductDescription() {
  return (
    <>
      <Description />
      <Warranty />
    </>
  );
}

export default ProductDescription;
