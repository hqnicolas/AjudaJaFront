
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Container } from './ProgressBar.styles';

export default function ProgressBarComponent({ arrecadado, meta }) {

  const percentual = meta > 0 ? Math.round((arrecadado / meta) * 100) : 0;

  const formatarReal = (valor) => 
    valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <Container>
      <ProgressBar 
        now={percentual} 
        label={`${percentual}%`} 
        visuallyHidden={false} 
      />
      <div className='arrecadation'>
        <span>{formatarReal(arrecadado)}</span>
        <span>Meta: {formatarReal(meta)}</span>
      </div>
    </Container>
  );
}
