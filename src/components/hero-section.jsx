export function HeroSection() {
    return (
      <section id="home" className="w-full py-12 md:py-24 mt-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center tracking-wider">
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              When your brand whispers,{" "}
              <span className="block">
              <p>
                <span className="text-[#48A8A5]">We make</span> the world <span className="text-[#FEA250]">listen</span>.
              </p>

              </span>
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl">Results that speak, strategies that deliver</p>
            <a
            href="https://chat.whatsapp.com/JXBf9cplRi286eBJhrxapx"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FEA250] hover:bg-[#E4A853]/90 text-white px-8 py-2 rounded-md"
          >
            Join WhatsApp Community
          </a>
            <div className="mt-16 space-y-8">
              <p className="text-3xl font-semibold max-w-3xl mx-auto">
                "Crafting excellence with every step,{" "}
                <span className="block">
                  <span className="text-[#FEA250]">delivering results</span>{" "}
                  <span className="text-[#48A8A5]">you can trust.</span>"
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }