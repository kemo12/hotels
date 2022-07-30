import { Suspense } from 'react';
import './Loadable.css';
export const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <div className="loadContainer">
          <div className="loader"></div>
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );
};
