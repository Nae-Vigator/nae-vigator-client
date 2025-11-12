import { Button } from '@/components/ui/button';
import { appFetch } from '@/lib/appFetch';
import { useQuery } from '@tanstack/react-query';

function HomePage() {
  const { data, isPending, error } = useQuery({
    queryKey: ['test'],
    queryFn: () => appFetch<{ text: string }>('/hello'),
  });

  return (
    <>
      <div>
        <Button>버튼</Button>
        <Button>버튼</Button>
        <Button>버튼</Button>
        <Button>버튼</Button>
      </div>
      <div>
        {isPending && <span>데이터 로딩중</span>}
        {error && <span>{error.message}</span>}
        <p>{data?.text}</p>
      </div>
    </>
  );
}

export default HomePage;
