import { Outlet } from 'react-router';

function CompaniesLayout() {
  return (
    <div>
      <span>레이아웃</span>
      <Outlet />
    </div>
  );
}

export default CompaniesLayout;
