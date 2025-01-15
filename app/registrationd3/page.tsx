import { title } from "@/components/primitives";
import  Design3 from "@/components/design3";
import App  from "@/components/navbar";
import { TiTick } from "react-icons/ti";


export default function About() {
  return (
    <>
    <div className="h-[100vh] relative">
    <App />
    <div className=" flex  items-center h-full w-full  pl-32 ">
      <div className=" flex gap-10 w-[60%] h-full items-center justify-center pt-20">
      <Design3 />
      </div>
      <div className="w-[40%] flex justify-center items-center h-full pr-14 relative">
      <img src="./therapy4.jpg" alt="Circular Masked Image  " className="h-80 absolute top-[42%] left-[-3%] z-[100]" />
      <div  className="h-[310px] w-[320px] backdrop-blur-md  absolute top-[39%] z-[80] left-[1%] border border-gray-300 border-opacity-30   "></div>
      <img src="./therpy3.jpg" alt="Circular Masked Image  " className="h-[400px] absolute right-12 top-[20%]" />
      </div>
      {/* <div className="circle-mask ">
        <img src="./therapy2.jpg" alt="Circular Masked Image  " />
    </div> */}
    </div>
   
    </div>
    <div className="h-28"></div>
    <div className="justify-between items-start px-32 pb-10 flex gap-20" id='data'>
      <div className="flex flex-col gap-4">
      <img src="./data.png" alt="Circular Masked Image  " className="w-[800px] right-12 top-[20%]" />


      </div>
      <div className="">

  <div className="flex flex-col font-bold gap-1  text-3xl  text-[#D5BA7F] mb-7">Protection de Vos Données</div>
                <div>

                Les informations recueillies dans le cadre de ce questionnaire seront traitées par Annecy Behavioral Science Lab. La confidentialité et l’anonymat seront préservés lors du traitement.
                <br /><br />
                Conformément au Règlement Général sur la Protection des Données du 27 avril 2016, vous disposez :<br /><br />
<div className="flex justify-between">
  
<div className="flex flex-col gap-4">

<span className=' flex items-center justify-start  gap-2'>
<TiTick color="#D5BA7F" />
D'un droit d'accès
</span>
<span className=' flex items-center justify-start  gap-2'>
<TiTick color="#D5BA7F" />
D'un droit d'effacement

</span>

<span className=' flex items-center justify-start  gap-2'>
<TiTick color="#D5BA7F" />
D'un droit de rectification

</span>

<span className=' flex items-center justify-start  gap-2'>

<TiTick color="#D5BA7F"/>
D'un droit de limitation

</span>

<span className=' flex items-center justify-start  gap-2'>
<TiTick color="#D5BA7F" />
D'un droit à la portabilité


</span>
<span className=' flex items-center justify-start  gap-2'>
<TiTick color="#D5BA7F" />
D'un droit d'opposition sur les données personnelles vous concernant
</span>
</div>
</div>

<br />
Vous pouvez également révoquer vos consentements aux traitements à tout moment.<br /><br />
Pour exercer ces droits, vous pouvez contacter directement <span className='text-[#D5BA7F] underline font-semibold'>Annecy Behavioral Science Lab</span>, qui s’engage à le faire dans les délais légaux et à en informer Annecy Behavioral Science Lab.
                </div>
              
                </div>
     
    </div>
    </>

  );
}
