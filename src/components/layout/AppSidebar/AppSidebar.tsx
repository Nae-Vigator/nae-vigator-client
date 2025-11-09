import { useEffect, useState } from 'react';

import {
  ChartPie,
  ChevronRight,
  ChevronsUpDown,
  Ellipsis,
  GalleryVerticalEnd,
  LogOut,
  Plus,
  Star,
  StretchHorizontal,
  User,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Link, useLocation, useParams } from 'react-router';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import LogoIcon from '@/components/common/LogoIcon';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import LogoTitle from '@/components/common/LogoTitle';

const COMPANY_LIST = ['회사명 1', '회사명 2', '회사명 3'];
const MENU_LIST = [
  { name: '기본 정보', Icon: User },
  { name: '경험 정리 도움받기', Icon: ChartPie },
  { name: '설정', Icon: Ellipsis },
];

function AppSidebar() {
  const { open, toggleSidebar } = useSidebar();
  const [isContentVisible, setIsContentVisible] = useState(open);
  const [isCompanySectionOpen, setIsCompanySectionOpen] = useState(false);
  const [companyOpenMap, setCompanyOpenMap] = useState<{
    [key: string]: boolean;
  }>({});

  const location = useLocation();
  const params = useParams();
  const lastPath = location.pathname.split('/').pop() ?? '';

  const handleSidebarOpenIconClick = () => {
    if (open) return;
    toggleSidebar();
  };

  const handleCompanyListClick = () => {
    if (open) setIsCompanySectionOpen((prev) => !prev);
    else handleSidebarOpenIconClick();
  };

  const toggleCompaniesMenu = (company: string, isOpen: boolean) => {
    setCompanyOpenMap((prev) => ({ ...prev, [company]: isOpen }));
  };

  /** 사이드바 열림/닫힘 애니메이션에 맞춰 콘텐츠 표시 제어 */
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setIsContentVisible(true), 200);
      return () => clearTimeout(timer);
    } else {
      setIsContentVisible(false);
    }
  }, [open]);

  return (
    <Sidebar className="absolute text-zinc-50 px-5 py-8 bg-[var(--sidebar)]">
      <SidebarHeader className="flex justify-between items-center mb-2">
        {isContentVisible && (
          <div className="flex items-center gap-2">
            <LogoIcon />
            <LogoTitle />
          </div>
        )}

        {isContentVisible ? (
          <SidebarTrigger />
        ) : (
          <button
            className="size-8 shrink-0"
            onClick={handleSidebarOpenIconClick}
          >
            <LogoIcon />
          </button>
        )}
      </SidebarHeader>

      <SidebarContent className="scrollbar -mr-3 pr-3">
        <SidebarGroup>
          <SidebarMenu className={cn(isContentVisible && 'p-2')}>
            <SidebarMenuItem className="flex items-center">
              <button
                className="bg-zinc-700 size-8 flex justify-center items-center rounded-lg shrink-0"
                onClick={handleSidebarOpenIconClick}
              >
                <GalleryVerticalEnd className="size-4" />
              </button>

              {isContentVisible && (
                <>
                  <div className="flex flex-col w-full ml-2">
                    <strong className="font-semibold text-sm">직무 분야</strong>
                    <span className="text-xs">상세 직무</span>
                  </div>

                  <ChevronsUpDown className="size-4 shrink-0" />
                </>
              )}
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <Collapsible
                open={isCompanySectionOpen}
                onOpenChange={handleCompanyListClick}
              >
                <CollapsibleTrigger asChild>
                  <Link to="/companies">
                    <SidebarMenuButton
                      className={cn(
                        'transition-[height,padding]',
                        !isContentVisible && 'size-8 min-w-8',
                      )}
                    >
                      <StretchHorizontal />
                      {isContentVisible && (
                        <>
                          <span className="w-full ">회사별 맞춤 관리</span>
                          <ChevronRight
                            className={cn(
                              'transition-transform',
                              isCompanySectionOpen && 'rotate-90',
                            )}
                          />
                        </>
                      )}
                    </SidebarMenuButton>
                  </Link>
                </CollapsibleTrigger>

                {isContentVisible && (
                  <CollapsibleContent>
                    <SidebarMenu>
                      {COMPANY_LIST.map((company, i) => (
                        <SidebarMenuItem key={company} className="pl-3.5 ">
                          <Collapsible
                            open={!!companyOpenMap[company]}
                            onOpenChange={(open) =>
                              toggleCompaniesMenu(company, open)
                            }
                          >
                            <CollapsibleTrigger asChild>
                              <SidebarMenu>
                                <SidebarMenuItem>
                                  <SidebarMenuButton>
                                    <Star />
                                    <span className="w-full">{company}</span>
                                    <ChevronRight
                                      className={cn(
                                        'transition-transform',
                                        !!companyOpenMap[i] && 'rotate-90',
                                      )}
                                    />
                                  </SidebarMenuButton>
                                </SidebarMenuItem>
                              </SidebarMenu>
                            </CollapsibleTrigger>

                            <CollapsibleContent>
                              <SidebarMenuSub>
                                <Link to={`/companies/${company}/experience`}>
                                  <SidebarMenuSubButton
                                    isActive={
                                      params.company === company &&
                                      lastPath === 'experience'
                                    }
                                  >
                                    경험정리
                                  </SidebarMenuSubButton>
                                </Link>
                                <Link to={`/companies/${company}/coverletter`}>
                                  <SidebarMenuSubButton
                                    isActive={
                                      params.company === company &&
                                      lastPath === 'coverletter'
                                    }
                                  >
                                    자기소개서
                                  </SidebarMenuSubButton>
                                </Link>
                                <SidebarMenuSubButton>
                                  예상 면접 질문
                                </SidebarMenuSubButton>
                              </SidebarMenuSub>
                            </CollapsibleContent>
                          </Collapsible>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </CollapsibleContent>
                )}
              </Collapsible>
            </SidebarMenuItem>

            {isContentVisible && (
              <SidebarMenuItem>
                <SidebarMenuButton className="flex justify-between">
                  <span className="text-sidebar-foreground/70">회사 추가</span>

                  <Plus />
                </SidebarMenuButton>
              </SidebarMenuItem>
            )}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarMenu className="text-sm">
            {MENU_LIST.map(({ name, Icon }) => (
              <SidebarMenuItem key={name} className="flex items-center">
                <SidebarMenuButton
                  className={cn(!isContentVisible && 'size-8 min-w-8')}
                  onClick={handleSidebarOpenIconClick}
                >
                  <Icon className="size-4" />

                  {isContentVisible && <span>{name}</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenuButton
          className={cn(!isContentVisible && 'size-8 min-w-8')}
          onClick={handleSidebarOpenIconClick}
        >
          <LogOut className="size-4" />
          {isContentVisible && <span>로그아웃</span>}
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
