interface LogoSmallProps {
  width?: number;
  height?: number;
  className?: string;
}

const LogoSmall = ({ width = 97, height = 36, className }: LogoSmallProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 97 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.9565 6.2471C37.9565 4.55127 39.3136 3.17651 40.9878 3.17651H56.144H58.1649C60.397 3.17651 62.2065 5.00951 62.2065 7.27064V9.31769V15.4589V17.5059C62.2065 19.767 60.397 21.6 58.1649 21.6H56.144H45.0294C44.4714 21.6 44.019 22.0583 44.019 22.6236V26.7177C44.019 27.283 44.4714 27.7412 45.0294 27.7412H59.1753C60.8495 27.7412 62.2065 29.1159 62.2065 30.8118C62.2065 32.5077 60.8495 33.8824 59.1753 33.8824H44.019H41.9982C39.7661 33.8824 37.9565 32.0494 37.9565 29.7882V27.7412V21.6V19.553C37.9565 17.2919 39.7661 15.4589 41.9982 15.4589H44.019H55.1337C55.6917 15.4589 56.144 15.0006 56.144 14.4353V10.3412C56.144 9.77595 55.6917 9.31769 55.1337 9.31769H40.9878C39.3136 9.31769 37.9565 7.94293 37.9565 6.2471Z"
        fill="#1D2228"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M71.6956 6.2471C71.6956 4.55127 73.0526 3.17651 74.7268 3.17651H89.8831H91.9039C94.136 3.17651 95.9456 5.00951 95.9456 7.27064V9.31769V15.4589V17.5059C95.9456 19.767 94.136 21.6 91.9039 21.6H89.8831H78.7684C78.2104 21.6 77.7581 22.0583 77.7581 22.6236V26.7177C77.7581 27.283 78.2104 27.7412 78.7684 27.7412H92.9143C94.5885 27.7412 95.9456 29.1159 95.9456 30.8118C95.9456 32.5077 94.5885 33.8824 92.9143 33.8824H77.7581H75.7372C73.5051 33.8824 71.6956 32.0494 71.6956 29.7882V27.7412V21.6V19.553C71.6956 17.2919 73.5051 15.4589 75.7372 15.4589H77.7581H88.8727C89.4307 15.4589 89.8831 15.0006 89.8831 14.4353V10.3412C89.8831 9.77595 89.4307 9.31769 88.8727 9.31769H74.7268C73.0526 9.31769 71.6956 7.94293 71.6956 6.2471Z"
        fill="#1D2228"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4073 1.08647L18.3334 3.98358C19.9749 4.5836 20.8214 6.40638 20.2239 8.05491C20.1714 8.1998 20.1095 8.33852 20.039 8.47064H26.3587C28.1056 8.47064 29.5217 9.89279 29.5217 11.6471C29.5217 13.4015 28.1056 14.8236 26.3587 14.8236H21.8814C24.9126 16.8426 26.8859 20.1182 26.8859 23.8236C26.8859 29.9743 21.4483 34.9412 14.7609 34.9412C8.07341 34.9412 2.63587 29.9743 2.63587 23.8236C2.63587 20.1183 4.60918 16.8426 7.6403 14.8236H3.16304C1.41615 14.8236 0 13.4015 0 11.6471C0 9.89279 1.41615 8.47064 3.16304 8.47064H12.1132L8.24364 7.05628C6.60209 6.45628 5.75571 4.63348 6.35318 2.98496C6.95065 1.33644 8.76574 0.48646 10.4073 1.08647ZM14.7609 19.0589C11.0492 19.0589 8.96196 21.68 8.96196 23.8236C8.96196 25.9672 11.0492 28.5883 14.7609 28.5883C18.4725 28.5883 20.5598 25.9672 20.5598 23.8236C20.5598 21.68 18.4725 19.0589 14.7609 19.0589Z"
        fill="#FF9500"
      />
    </svg>
  );
};

export default LogoSmall;