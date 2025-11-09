import { SidebarProvider } from '@/components/ui/sidebar';
import { Outlet, useLocation } from 'react-router';
import AppSidebar from '../AppSidebar/AppSidebar';

function MainRoot() {
  const location = useLocation();
  const isStickyPage = location.pathname === '/user-info';

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        {isStickyPage ? (
          <div className="sticky top-0 h-screen overflow-y-auto">
            <AppSidebar />
          </div>
        ) : (
          <AppSidebar />
        )}
        <main className="flex-1 py-8 px-20">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}

export default MainRoot;
