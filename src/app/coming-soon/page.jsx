import ComingSoon from "@/components/comming";
import HeaderOne from "@/components/HeaderOne";
import Animation from "@/helper/Animation";
import Breadcrumb from "@/components/Breadcrumb";
import FooterThree from "@/components/FooterThree";


export default function ComingPage() {

    return(
        <>

      <Animation />

      <HeaderOne />

      <Breadcrumb title={"Coming Soon"} />


        <ComingSoon />
      <FooterThree />


        </>
    )
}