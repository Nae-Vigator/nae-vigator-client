import { useEffect, useState } from 'react';
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
} from '../ui/sidebar';
import LogoIcon from '../common/LogoIcon';
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible';
import { cn } from '@/lib/utils';

const COMPANY_LIST = ['회사명 1', '회사명 2', '회사명 3'];
const MENU_LIST = [
  { name: '기본 정보', Icon: User },
  { name: '경험 정리 도움받기', Icon: ChartPie },
  { name: '설정', Icon: Ellipsis },
];

function AppSidebar() {
  const { open, toggleSidebar } = useSidebar();
  const [isShowContent, setIsShowContent] = useState(open);
  const [isCompanyListOpen, setIsCompanyListOpen] = useState(false);
  const [openCompanies, setOpenCompanies] = useState<{
    [key: number]: boolean;
  }>({ 0: true });

  const handleSidebarOpenClick = () => {
    if (open) return;

    toggleSidebar();
  };

  const handleCompanyListClick = () => {
    if (isShowContent) setIsCompanyListOpen((prev) => !prev);
    else handleSidebarOpenClick();
  };

  const toggleCompaniesMenu = (i: number, isOpen: boolean) => {
    setOpenCompanies((prev) => ({ ...prev, [i]: isOpen }));
  };

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
      <SidebarHeader className="flex justify-between items-center mb-2">
        {isShowContent && (
          <div className="flex items-center gap-2">
            <LogoIcon />
            <h1 className="font-bold text-[15px]">내:비게이터</h1>
          </div>
        )}

        {isShowContent ? (
          <SidebarTrigger />
        ) : (
          <button className="size-8 shrink-0" onClick={handleSidebarOpenClick}>
            <LogoIcon />
          </button>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className={cn(isShowContent && 'p-2')}>
            <SidebarMenuItem className="flex items-center">
              <button
                className="bg-zinc-700 size-8 flex justify-center items-center rounded-lg shrink-0"
                onClick={handleSidebarOpenClick}
              >
                <GalleryVerticalEnd className="size-4" />
              </button>

              {isShowContent && (
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
                open={isCompanyListOpen}
                onOpenChange={handleCompanyListClick}
              >
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    className={cn(
                      'transition-[height,padding]',
                      !isShowContent && 'size-8 min-w-8',
                    )}
                  >
                    <StretchHorizontal />
                    {isShowContent && (
                      <>
                        <span className="w-full ">회사별 맞춤 관리</span>
                        <ChevronRight
                          className={cn(
                            'transition-transform',
                            isCompanyListOpen && 'rotate-90',
                          )}
                        />
                      </>
                    )}
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                {isShowContent && (
                  <CollapsibleContent>
                    <SidebarMenu>
                      {COMPANY_LIST.map((company, i) => (
                        <SidebarMenuItem key={company} className="pl-3.5 ">
                          <Collapsible
                            open={!!openCompanies[i]}
                            onOpenChange={(open) =>
                              toggleCompaniesMenu(i, open)
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
                                        !!openCompanies[i] && 'rotate-90',
                                      )}
                                    />
                                  </SidebarMenuButton>
                                </SidebarMenuItem>
                              </SidebarMenu>
                            </CollapsibleTrigger>

                            <CollapsibleContent>
                              <SidebarMenuSub>
                                <SidebarMenuSubButton isActive={i === 0}>
                                  경험정리
                                </SidebarMenuSubButton>
                                <SidebarMenuSubButton>
                                  자기소개서
                                </SidebarMenuSubButton>
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

            {isShowContent && (
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
                  className={cn(!isShowContent && 'size-8 min-w-8')}
                  onClick={handleSidebarOpenClick}
                >
                  <Icon className="size-4" />

                  {isShowContent && <span>{name}</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenuButton
          className={cn(!isShowContent && 'size-8 min-w-8')}
          onClick={handleSidebarOpenClick}
        >
          <LogOut className="size-4" />
          {isShowContent && <span>로그아웃</span>}
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
