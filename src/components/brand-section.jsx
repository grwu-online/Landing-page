export function BrandsSection() {
  const brands = [
    {
      name: "Mens Martin",
      image: "https://res.cloudinary.com/drsdtqcnp/image/upload/v1739739441/mens-martin_zddxr9.png",
      reelUrl: "https://www.instagram.com/reel/DCJVtmxvHzc/?igsh=Ym90b29pZmN2MWhn" // Add reel URL
    },
    {
      name: "Akansha Haat",
      image: "https://res.cloudinary.com/drsdtqcnp/image/upload/v1739739440/haat_w9ce55.png",
      reelUrl: "https://www.instagram.com/reel/DCJUsOuPh_L/?igsh=bGxlY2FrbXB1OXlr" // Add reel URL
    },
    {
      name: "Under Armour",
      image: "https://res.cloudinary.com/drsdtqcnp/image/upload/v1739739440/under_xae0nf.png",
      reelUrl: "https://www.instagram.com/reel/DCZGyGfNXx8/?igsh=cWxuMmlxcGtjOXhsr" // Add reel URL
    },
    {
      name: "MC Donalds",
      image: "https://res.cloudinary.com/drsdtqcnp/image/upload/v1739739440/mcDonalds_unsxkb.png",
      reelUrl: "https://example.com/reel/mc-donalds" // Add reel URL
    },
  ];

  return (
    <section id="brands" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="flex items-center space-x-2">
            <span className="font-medium">Brands We </span>
            <span className="text-[#FEA250] font-medium">Have</span>
            <span className="font-medium"> Worked With</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tighter">Names You Know, Trust We Earned</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl mt-8">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="group relative bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out"
              >
                <div className="aspect-square flex items-center justify-center overflow-hidden">
                  <img 
                    src={brand.image} 
                    alt={brand.name} 
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg">
                  <span className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {brand.name}
                  </span>
                  <a
                    href={brand.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 px-4 py-2 bg-[#FEA250] text-white rounded-md text-sm font-medium hover:bg-[#E4A853]/90 transition-colors duration-300"
                  >
                    View Reel
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}