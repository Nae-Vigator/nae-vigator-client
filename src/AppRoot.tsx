import { Outlet } from 'react-router';
import { SidebarProvider } from './components/ui/sidebar';
import AppSidebar from './components/layout/AppSidebar';

function AppRoot() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <Outlet />
      </SidebarProvider>
    </>
  );
}

export default AppRoot;
