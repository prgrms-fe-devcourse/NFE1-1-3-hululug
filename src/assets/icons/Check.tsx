interface CheckProps {
  width?: number;
  height?: number;
  fill?: string;
}

const Check = ({ width = 24, height = 24, fill = '#1D2228' }: CheckProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.2071 6.29289C20.5976 6.68342 20.5976 7.31658 20.2071 7.70711L10.2071 17.7071C9.81658 18.0976 9.18342 18.0976 8.79289 17.7071L3.79289 12.7071C3.40237 12.3166 3.40237 11.6834 3.79289 11.2929C4.18342 10.9024 4.81658 10.9024 5.20711 11.2929L9.5 15.5858L18.7929 6.29289C19.1834 5.90237 19.8166 5.90237 20.2071 6.29289Z"
        fill={fill}
      />
    </svg>
  );
};

export default Check;
