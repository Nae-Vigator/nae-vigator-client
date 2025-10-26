import logo from '@/assets/images/logo.svg';

function Login() {
  return (
    <div className="min-h-screen bg-[#1a1d29] flex items-center justify-center">
      <div className="w-full max-w-[400px] px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center">
            <img src={logo} alt="로고" className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-white text-3xl font-bold mb-2">내:비게이터</h1>
          </div>
          <p className="text-zinc-400 text-sm">
            로그인 하고 서비스를 이용해보세요!
          </p>
        </div>

        <div className="space-y-3">
          <button className="w-full h-12 bg-[#03C75A] hover:bg-[#02b350] text-white font-medium rounded-lg transition-colors">
            네이버로 로그인
          </button>

          <button className="w-full h-12 bg-[#FEE500] hover:bg-[#fdd800] text-[#191919] font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
            <span className="text-lg">●</span>
            카카오톡으로 로그인
          </button>

          <button className="w-full h-12 bg-white hover:bg-zinc-100 text-[#1a1d29] font-medium rounded-lg transition-colors">
            로그인 없이 서비스 둘러보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
