import { SidebarProvider } from '@/components/ui/sidebar';
import AppSidebar from '../AppSidebar';
import { Outlet } from 'react-router';

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
