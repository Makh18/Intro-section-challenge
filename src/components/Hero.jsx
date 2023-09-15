import imgHero from "../assets/image-hero-desktop.png"
import imgmobile from "../assets/image-hero-mobile.png"
import databiz from "../assets/client-databiz.svg"
import audiophile from "../assets/client-audiophile.svg"
import meet from "../assets/client-meet.svg"
import marker from "../assets/client-maker.svg"
const Hero = () => {
  return (
    <div className="overflow-hidden">
    <div className="hero min-h-screen ">
  <div className="hero-content flex-col  lg:flex-row-reverse lg:gap-32 sm:gap-14 lg:overflow-hidden">
  <picture>
     <source media='(max-width: 768px)' srcSet={imgmobile} className="object-contain" />
     <source media='(min-width: 768px)' srcSet={imgHero} className="object-cover max-w-full" />
     <img src={imgHero} alt='hero'  className="object-cover max-w-full" />
 </picture>
    <div>
      <h1 className="lg:text-[60px] sm:text-[60px] font-bold lg:text-left sm:text-center">Make <br/>remote work</h1>
      <p className="py-8  lg:text-justify leading-tight  sm:text-center lg:text-[16px] md:text-[16px] sm:text-[12px]">Provident cupiditate voluptatem et in. Provident cupiditate voluptatem et in.Quaerat fugiat <br/>ut assumenda excepturi exercitationem quasiIn deleniti eaque aut repudiandae et a id nisi.</p>
      <div className="flex lg:!items-left md:items-center sm:!items-center"><button className="btn btn-outline rounded ">Learn more</button></div>
      <div className="flex lg:gap-10 sm:gap-8 lg:flex-row sm:object-contain pt-28 ">
        <img src={databiz} className="object-contain "/>
        <img src={audiophile} className="object-contain"/>
        <img src={meet} className="object-contain"/>
        <img src={marker} className="object-contain"/>

      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Hero