function LogoIcon({ ...props }: React.ComponentProps<'img'>) {
  return <img src="/logo.svg" alt="내비게이터 로고" {...props} />;
}

export default LogoIcon;
