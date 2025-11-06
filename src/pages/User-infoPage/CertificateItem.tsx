import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CertificateItem as CertificateType } from './types';

interface CertificateItemProps {
  certificate: CertificateType;
  onUpdate: (id: string, field: keyof CertificateType, value: string) => void;
  onRemove: (id: string) => void;
}

export function CertificateItem({ certificate, onUpdate, onRemove }: CertificateItemProps) {
  return (
    <div className="bg-zinc-50 p-6 rounded-lg border border-gray-200 mb-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => onRemove(certificate.id)}
          className="text-gray-500 hover:text-black"
        >
          ×
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label
            htmlFor={`certificateName-${certificate.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            자격증 명
          </Label>
          <Input
            id={`certificateName-${certificate.id}`}
            value={certificate.certificateName}
            onChange={(e) => onUpdate(certificate.id, 'certificateName', e.target.value)}
            placeholder="자격증 명 검색"
            className="bg-white text-foreground h-11"
          />
        </div>
        <div>
          <Label
            htmlFor={`issuer-${certificate.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            발행처
          </Label>
          <Input
            id={`issuer-${certificate.id}`}
            value={certificate.issuer}
            onChange={(e) => onUpdate(certificate.id, 'issuer', e.target.value)}
            placeholder="발행처"
            className="bg-white text-foreground h-11"
          />
        </div>
        <div>
          <Label
            htmlFor={`acquisitionDate-${certificate.id}`}
            isRequired
            className="text-sm font-medium text-foreground mb-2 block"
          >
            취득월
          </Label>
          <Input
            id={`acquisitionDate-${certificate.id}`}
            value={certificate.acquisitionDate}
            onChange={(e) => onUpdate(certificate.id, 'acquisitionDate', e.target.value)}
            placeholder="0000.00"
            className="bg-white text-foreground h-11"
          />
        </div>
      </div>
    </div>
  );
}
