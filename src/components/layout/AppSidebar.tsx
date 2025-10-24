import { useEffect, useState } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from '../ui/sidebar';
import LogoIcon from '../common/LogoIcon';

function AppSidebar() {
  const { open, toggleSidebar } = useSidebar();
  const [isShowContent, setIsShowContent] = useState(open);

  /** 사이드바 열림/닫힘 애니메이션에 맞춰 콘텐츠 표시 제어 */
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setIsShowContent(true), 200);
      return () => clearTimeout(timer);
    } else {
      setIsShowContent(false);
    }
  }, [open]);

  return (
    <Sidebar className="absolute text-zinc-50 px-5 py-8 bg-[var(--sidebar)]">
      <SidebarHeader className="flex justify-between items-center">
        {isShowContent && (
          <div className="flex items-center gap-2">
            <LogoIcon />
            <h1 className="font-bold text-[15px]">내:비게이터</h1>
          </div>
        )}

        {isShowContent ? (
          <SidebarTrigger />
        ) : (
          <button className="size-8 shrink-0" onClick={toggleSidebar}>
            <LogoIcon />
          </button>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

export default AppSidebar;
