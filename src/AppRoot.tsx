import { Outlet } from 'react-router';
import { SidebarProvider } from './components/ui/sidebar';
import AppSidebar from './components/layout/AppSidebar';

function AppRoot() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full py-8 px-20">
          <Outlet />
        </main>
      </SidebarProvider>
    </>
  );
}

export default AppRoot;
