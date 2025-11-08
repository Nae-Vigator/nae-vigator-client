function LogoTitle({ ...props }: React.ComponentProps<'img'>) {
  return (
    <h1>
      <img src="/logo-title.svg" alt="내비게이터" {...props} />
    </h1>
  );
}

export default LogoTitle;
