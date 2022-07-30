import { Suspense } from 'react';

export const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<div>lodaing ....</div>}>
      <Component {...props} />
    </Suspense>
  );
};
