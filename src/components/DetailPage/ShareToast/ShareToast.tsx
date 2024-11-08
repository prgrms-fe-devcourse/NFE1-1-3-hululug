import styled from '@emotion/styled';
import Link from '@/assets/icons/Link';
import { ChipText } from '@/styles/Typography';

interface ShareToastProps {
  type?: 'default' | 'icon'; // 'default' 타입은 텍스트만, 'icon' 타입은 아이콘 + 텍스트
  message: string;
}

const ToastContainer = styled(ChipText)`
  display: inline-flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 20px;
  background-color: #1d222870;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.875rem;
  gap: 8px;
`;

const IconWrapper = styled.div`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShareToast = ({ type = 'default', message }: ShareToastProps) => {
  return (
    <ToastContainer>
      {type === 'icon' && (
        <IconWrapper>
          <Link width={18} height={18} color="currentColor" />
        </IconWrapper>
      )}
      <span>{message}</span>
    </ToastContainer>
  );
};
