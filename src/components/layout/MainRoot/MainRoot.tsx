import { SidebarProvider } from '@/components/ui/sidebar';
import { Outlet } from 'react-router';
import AppSidebar from '../AppSidebar/AppSidebar';

function MainRoot() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full py-8 px-20">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

export default MainRoot;
