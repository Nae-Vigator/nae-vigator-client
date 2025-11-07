import { useParams } from 'react-router';

function CoverLetterPage() {
  const params = useParams();

  return <div>{params.company} 자기소개서 페이지</div>;
}

export default CoverLetterPage;
