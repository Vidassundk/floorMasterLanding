import React from "react";

interface GoogleIconProps {
  size?: number;
  fill?: string | null;
}

const GoogleIcon: React.FC<GoogleIconProps> = ({ size = 23, fill = null }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.0485 11.2469C22.0485 10.5062 21.9879 9.76833 21.8613 9.03809H11.6074V13.221H17.4797C17.2369 14.5705 16.4534 15.7643 15.3086 16.5208V19.2383H18.8144C20.8668 17.3511 22.0485 14.5546 22.0485 11.2469Z"
        fill={fill ? fill : "#4285F4"}
      />
      <path
        d="M11.6074 21.8639C14.541 21.8639 17.0128 20.9019 18.8144 19.2413L15.3086 16.5239C14.3325 17.1855 13.0768 17.5624 11.6074 17.5624C8.77169 17.5624 6.36578 15.6516 5.50321 13.0791H1.89453V15.8781C3.74103 19.5498 7.49755 21.8639 11.6074 21.8639Z"
        fill={fill ? fill : "#19D34B"}
      />
      <path
        d="M5.50507 13.0775C5.04879 11.7307 5.04879 10.2679 5.50507 8.91856V6.12207H1.89384C0.350492 9.19251 0.350492 12.8087 1.89384 15.8793L5.50507 13.0775Z"
        fill={fill ? fill : "#FBBC04"}
      />
      <path
        d="M11.6074 4.43865C13.1586 4.41492 14.6543 4.99751 15.7781 6.06759L18.883 2.96794C16.9151 1.12309 14.3088 0.108305 11.6074 0.137324C7.49755 0.137324 3.73848 2.45398 1.89453 6.12289L5.50577 8.92194C6.36578 6.34684 8.77169 4.43865 11.6074 4.43865Z"
        fill={fill ? fill : "#EA4335"}
      />
    </svg>
  );
};

export default GoogleIcon;
