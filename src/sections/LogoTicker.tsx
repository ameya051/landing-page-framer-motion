import acmeLogo from "@/assets/logo-acme.png"
import apexLogo from "@/assets/logo-apex.png"
import celestialLogo from "@/assets/logo-celestial.png"
import quantumLogo from "@/assets/logo-quantum.png"
import pulseLogo from "@/assets/logo-pulse.png"
import echoLogo from "@/assets/logo-echo.png"

export const LogoTicker = () => {
  const logos = [acmeLogo, apexLogo, celestialLogo, quantumLogo, pulseLogo, echoLogo]
  return <div className="container py-20 md:py-24">
    <div className="flex items-center gap-5">
      <div className="flex-1 md:flex-none"><h1>Trusted by top innovative teams</h1></div>
      <div className="flex-1 overflow-hidden">
        <div className="flex flex-none gap-14 [mask-image:linear-gradient(to_right,transparent,black,black_20%,black_80%,transparent)]">
          {
            logos.map((logo) => <img src={logo.src} key={logo.src} className="h-6 w-auto" />)
          }
        </div>
      </div>
    </div>
  </div>;
};
