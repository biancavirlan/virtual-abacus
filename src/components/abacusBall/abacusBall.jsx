const AbacusBall = ({themeChanger}) => {

  return (
    themeChanger ? <svg
      xmlns="http://www.w3.org/2000/svg"
      width="90"
      height="30"
      viewBox="0 0 90 30"
    >
      <linearGradient
        id="a"
        gradientUnits="userSpaceOnUse"
        x1="44.997"
        y1="-16224.045"
        x2="44.997"
        y2="-16253.94"
        gradientTransform="matrix(1 0 0 -1 0 -16224)"
      >
        <stop offset="0" stopColor="#1f9b93" />
        <stop offset=".546" stopColor="#07b052" />
        <stop offset=".648" stopColor="#20a399" />
        <stop offset="1" stopColor="#00d4ff" />
      </linearGradient>
      <path
        fill="url(#a)"
        d="M88.252 11.664L74.396.835a4.12 4.12 0 0 0-2.425-.79H19.077c-.872 0-1.721.277-2.425.79L1.959 11.545c-2.241 1.44-2.741 4.936-.218 6.775l14.856 10.828c.704.514 1.554.79 2.425.79H71.917a4.12 4.12 0 0 0 2.425-.79l13.693-10.71c2.241-1.439 2.741-4.934.217-6.774z"
      />
      <linearGradient
        id="b"
        gradientUnits="userSpaceOnUse"
        x1=".19"
        y1="-16239.5"
        x2="90.042"
        y2="-16239.5"
        gradientTransform="matrix(1 0 0 -1 0 -16224)"
      >
        <stop offset="0" stopColor="#1f9b93" />
        <stop offset=".345" stopColor="#22b4a4" />
        <stop offset=".466" stopColor="#21ac9e" />
        <stop offset=".753" stopColor="#1f9b93" />
        <stop offset="1" stopColor="#1f9b93" />
      </linearGradient>
      <path
        fill="url(#b)"
        d="M89.405 17H.827c-.352 0-.637-.89-.637-1.5S.475 14 .827 14h88.578c.352 0 .637.89.637 1.5s-.285 1.5-.637 1.5z"
      />
    </svg>
    :
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="90"
      height="30"
      viewBox="0 0 90 30"
    >
      <linearGradient
        id="c"
        gradientUnits="userSpaceOnUse"
        x1="44.997"
        y1="-16224.045"
        x2="44.997"
        y2="-16253.94"
        gradientTransform="matrix(1 0 0 -1 0 -16224)"
      >
        <stop offset="0" stopColor="#fb3fae" />
        <stop offset=".546" stopColor="#fb3fae" />
        <stop offset=".648" stopColor="#fc466b" />
        <stop offset="1" stopColor="#fc466b" />
      </linearGradient>
      <path
        fill="url(#c)"
        d="M88.252 11.664L74.396.835a4.12 4.12 0 0 0-2.425-.79H19.077c-.872 0-1.721.277-2.425.79L1.959 11.545c-2.241 1.44-2.741 4.936-.218 6.775l14.856 10.828c.704.514 1.554.79 2.425.79H71.917a4.12 4.12 0 0 0 2.425-.79l13.693-10.71c2.241-1.439 2.741-4.934.217-6.774z"
      />
      <linearGradient
        id="d"
        gradientUnits="userSpaceOnUse"
        x1=".19"
        y1="-16239.5"
        x2="90.042"
        y2="-16239.5"
        gradientTransform="matrix(1 0 0 -1 0 -16224)"
      >
        <stop offset="0" stopColor="#9b1f79" />
        <stop offset=".345" stopColor="#9b1f79" />
        <stop offset=".466" stopColor="rgba(163,32,120,0.28335084033613445)" />
        <stop offset=".753" stopColor="#9b1f79" />
        <stop offset="1" stopColor="#9b1f79" />
      </linearGradient>
      <path
        fill="url(#d)"
        d="M89.405 17H.827c-.352 0-.637-.89-.637-1.5S.475 14 .827 14h88.578c.352 0 .637.89.637 1.5s-.285 1.5-.637 1.5z"
      />
    </svg>
    );
};

export default AbacusBall;
