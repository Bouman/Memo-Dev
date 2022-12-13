import { lazy, Suspense } from 'react';

const Loader = ({name, submenu}) => {
    let DynamicComponent = lazy(() => import(`./../pages/Home`));
    if (submenu) {
        DynamicComponent = lazy(() => import(`./../components/${name}/${submenu}`)); 
    } else {
        DynamicComponent = lazy(() => import(`./../pages/${name}`));
    }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicComponent/>
    </Suspense>
  );
};
export default Loader