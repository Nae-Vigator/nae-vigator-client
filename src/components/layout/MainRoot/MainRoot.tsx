import { SidebarProvider } from '@/components/ui/sidebar';
import { Outlet } from 'react-router';
import AppSidebar from '../AppSidebar/AppSidebar';

function MainRoot() {
  return (
    <SidebarProvider>
      <div className="flex w-full">
        <AppSidebar />

        <main className="flex-1 py-8 px-20">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}

export default MainRoot;
