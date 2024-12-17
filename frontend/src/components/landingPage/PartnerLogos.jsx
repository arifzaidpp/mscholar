import React from 'react';

const logos = [
  {
    name: "SKIMV Board",
    logo: "https://res.cloudinary.com/dkykfxzpx/image/upload/v1734415416/111605_Fotor_elkwii.jpg",
  },
  {
    name: "KNM Education Board",
    logo: "https://res.cloudinary.com/dkykfxzpx/image/upload/v1734415041/logo_ztfqaa.png",
  },
  {
    name: "Madian Academy",
    logo: "https://res.cloudinary.com/dkykfxzpx/image/upload/v1734415041/MADIN_ACADEMY_j1muiu.png",
  },
  {
    name: "SKSV Board",
    logo: "https://res.cloudinary.com/dkykfxzpx/image/upload/v1734415041/1613631728-Samastha_Logo_final_cnktgp.jpg",
  },
  {
    name: "Markaz",
    logo: "https://res.cloudinary.com/dkykfxzpx/image/upload/v1734415041/markaz-logo_k4u39s.png",
  },
  {
    name: "Hadia CSE",
    logo: "https://res.cloudinary.com/dkykfxzpx/image/upload/v1734415040/HADIA_CSE_dv4pmt.png",
  },
  {
    name: "IECI",
    logo: "https://res.cloudinary.com/dkykfxzpx/image/upload/v1734415040/409468175_680296920895601_4215946763448166403_n_u6cqpg.jpg",
  },
];

const LogoScroll = () => {
  return (
    <>
    <div className="relative w-full overflow-hidden py-8">
      {/* Main container with continuous animation */}
      <div className="flex animate-infinite-scroll">
        {/* Generate three sets of logos for seamless looping */}
        {[...Array(3)].map((_, setIndex) => (
          <div
            key={`set-${setIndex}`}
            className="flex justify-around items-center"
            style={{ minWidth: '100%' }}
          >
            {logos.map((logo, logoIndex) => (
              <div
                key={`${setIndex}-${logoIndex}`}
                className="flex flex-col items-center mx-4"
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="h-24 w-24 rounded-full object-contain"
                />
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                  {logo.name}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default LogoScroll;