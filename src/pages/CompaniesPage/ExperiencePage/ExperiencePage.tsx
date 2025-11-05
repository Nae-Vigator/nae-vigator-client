import { useParams } from 'react-router';

function ExperiencePage() {
  const params = useParams();

  return <div>{params.company} 경험정리 페이지</div>;
}

export default ExperiencePage;
