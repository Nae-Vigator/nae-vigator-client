import naver from '@/assets/images/naver-logo.svg';
import kakao from '@/assets/images/kakao-logo.svg';
import LogoIcon from '@/components/common/LogoIcon';
import LogoTitle from '@/components/common/LogoTitle';
import { cn } from '@/lib/utils';
// import { appFetch } from '@/lib/appFetch';

const PROVIDERS = [
  {
    provider: 'naver',
    img: naver,
    name: '네이버',
    bg: '#03C75A',
    hover: '#02b350',
  },
  {
    provider: 'kakao',
    img: kakao,
    name: '카카오',
    bg: '#FEE500',
    hover: '#fdd800',
  },
];

function LoginPage() {
  const handleLoginClick = (provider: string) => {
    // appFetch(
    //   (window.location.href = `${
    //     import.meta.env.VITE_SERVER_API_URL
    //   }/api/v1/auth/social/${provider}/url`),
    // );
    window.location.href = `${
      import.meta.env.VITE_SERVER_API_URL
    }/api/v1/auth/social/${provider}/url`;
  };

  return (
    <div className="min-h-screen w-full bg-[#1D1B2B] flex justify-center items-center p-4">
      <div className="w-full max-w-[1600px] flex flex-col items-center justify-center">
        <div className="flex items-center gap-6 mb-2">
          <LogoIcon className="w-[150px]" />
          <LogoTitle className="w-[373px]" />
        </div>

        <p className="text-zinc-300  text-2xl font-semibold tracking-tight mb-16 text-center">
          로그인 하고 서비스를 이용해보세요!
        </p>

        <div className="w-full max-w-[450px] flex flex-col gap-4">
          {PROVIDERS.map(({ provider, img, name, bg, hover }) => (
            <button
              className={cn(
                `w-full h-[45px] bg-[${bg}] hover:bg-[${hover}] text-white text-[14px] font-medium rounded-lg transition-colors flex items-center justify-center gap-6`,
              )}
              style={{ fontFamily: 'Inter, sans-serif' }}
              onClick={() => handleLoginClick(provider)}
            >
              <img src={img} alt="네이버" className="w-4 h-4" />
              {name}로 로그인
            </button>
          ))}

          <button
            className="w-full h-[45px] bg-white hover:bg-zinc-100 text-[#2B2838] text-[14px] font-medium rounded-lg transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            로그인 없이 서비스 둘러보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
