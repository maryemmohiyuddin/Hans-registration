'use client'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { TiTick } from "react-icons/ti";
import { useState } from "react";

export default function Design() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isChecked, setIsChecked] = useState(false);
  const [onlineConsultation, setOnlineConsultation] = useState("Yes");
  const [faceToFaceConsultation, setFaceToFaceConsultation] = useState("Yes");
  const [clinicNotification, setClinicNotification] = useState("Yes");
  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className=" flex flex-col text-[#d7d7d7]  gap-2 text-start justify-start items-start">
      <h1 className="text-5xl font-bold ">
        Soon a support space dedicated to human connections
      </h1>
      <div className="w-[90%] flex flex-col gap-5 mt-2 justify-center items-start">
        <p className="text-[#D5BA7F] text-md">Whether you are experiencing loneliness, relationship challenges, career changes or life-changing events, we envision opening a clinic that offers compassionate, research-based support to help you create meaningful connections and strengthen your emotional well-being.</p>
        <input
          className="w-full custom-input px-4 mt-7 py-2 rounded-lg"
          placeholder="Enter your email"
          type="email"
        />
        <div className="flex flex-col justify-start items-start gap-2 text-md w-full">
          <div className="flex justify-between w-full">
            <p>Are you interested in online consultations (teleconsultation)?</p>
            <div
              className="relative flex border rounded-lg items-center justify-between border-[#D5BA7F] w-[100px] h-[35px]"
              onClick={() =>
                setOnlineConsultation((prev) => (prev === "Yes" ? "No" : "Yes"))
              }
            >
              <div
                className={`absolute top-0 left-0 h-full w-1/2 rounded-lg bg-[#3E3E3E] transition-transform duration-300 ${onlineConsultation === "No" ? "translate-x-full" : ""
                  }`}
              ></div>
              <div className="z-10 flex w-full justify-around text-[#D5BA7F] font-bold">
                <div className="flex-1 text-center py-1 cursor-pointer">Yes</div>
                <div className="flex-1 text-center py-1 cursor-pointer">No</div>
              </div>
            </div>
          </div>

          {/* Face-to-Face Consultation */}
          <div className="flex justify-between w-full">
            <p>
              Are you interested in face-to-face consultations at the Annecy
              clinic?
            </p>
            <div
              className="relative flex border rounded-lg items-center justify-between border-[#D5BA7F] w-[100px] h-[35px]"
              onClick={() =>
                setFaceToFaceConsultation((prev) =>
                  prev === "Yes" ? "No" : "Yes"
                )
              }
            >
              <div
                className={`absolute top-0 left-0 h-full w-1/2 rounded-lg bg-[#3E3E3E] transition-transform duration-300 ${faceToFaceConsultation === "No" ? "translate-x-full" : ""
                  }`}
              ></div>
              <div className="z-10 flex w-full justify-around text-[#D5BA7F] font-bold">
                <div className="flex-1 text-center py-1 cursor-pointer">Yes</div>
                <div className="flex-1 text-center py-1 cursor-pointer">No</div>
              </div>
            </div>
          </div>

          {/* Clinic Notifications */}
          <div className="flex justify-between w-full">
            <p>
              Would you like to be notified about the clinic opening and its
              services?
            </p>
            <div
              className="relative flex border rounded-lg items-center justify-between border-[#D5BA7F] w-[100px] h-[35px]"
              onClick={() =>
                setClinicNotification((prev) => (prev === "Yes" ? "No" : "Yes"))
              }
            >
              <div
                className={`absolute top-0 left-0 h-full w-1/2 rounded-lg bg-[#3E3E3E] transition-transform duration-300 ${clinicNotification === "No" ? "translate-x-full" : ""
                  }`}
              ></div>
              <div className="z-10 flex w-full justify-around text-[#D5BA7F] font-bold">
                <div className="flex-1 text-center py-1 cursor-pointer">Yes</div>
                <div className="flex-1 text-center py-1 cursor-pointer">No</div>
              </div>
            </div>
          </div>
          <label className="text-md flex items-center ">
            <input className="mr-2 custom-checkbox" type="checkbox"
              onChange={handleCheckboxChange}
              style={{ transform: "scale(1.2)" }}

            />
            I accept the <button
              className="text-[#D5BA7F] ml-1 mr-1 cursor-pointer font-semibold bg-transparent p-0"

              onClick={onOpen}
            >
              data processing conditions
            </button>
            described.
          </label>

        </div>
        <button
          className={`mt-2 text-[#3E3E3E] bg-[#D5BA7F] font-bold rounded-lg px-4 py-2 max-w-xs w-[150px] ${isChecked ? '' : 'opacity-50 cursor-not-allowed'}`} // Conditionally apply opacity and cursor style
          disabled={!isChecked}
        >
          Submit
        </button>      </div>
      <Modal size={'4xl'} backdrop={'blur'} placement={'center'} isOpen={isOpen} onOpenChange={onOpenChange} className='w-[1000px]'>
        <ModalContent className='w-[12000px]'>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col  border-b border-[#D5BA7F] gap-1 bg-[#1c1c1c] text-2xl  text-[#D5BA7F] ">Protection de Vos Données</ModalHeader>
              <ModalBody className='bg-[#1c1c1c] pt-8'>
                <div>

                  Les informations recueillies dans le cadre de ce questionnaire seront traitées par Annecy Behavioral Science Lab. La confidentialité et l’anonymat seront préservés lors du traitement.
                  <br /><br />
                  Conformément au Règlement Général sur la Protection des Données du 27 avril 2016, vous disposez :<br /><br />
                  <div className="flex justify-between">

                    <div className="">
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
                    </div>
                    <div className="">

                      <span className=' flex items-center justify-start  gap-2 pr-10'>

                        <TiTick color="#D5BA7F" />
                        D'un droit de limitation
                      </span>
                      <span className=' flex items-center justify-start  gap-2'>
                        <TiTick color="#D5BA7F" />
                        D'un droit à la portabilité
                      </span>
                      <span className=' flex items-center justify-start  gap-2'>
                        <TiTick color="#D5BA7F" />
                        D'un droit d'opposition
                      </span>
                    </div>
                  </div>
                  <br />
                  Vous pouvez également révoquer vos consentements aux traitements à tout moment.<br /><br />
                  Pour exercer ces droits, vous pouvez contacter directement <span className='text-[#D5BA7F] underline font-semibold'>Annecy Behavioral Science Lab</span>, qui s’engage à le faire dans les délais légaux et à en informer Annecy Behavioral Science Lab.
                </div>
              </ModalBody>
              <ModalFooter className='bg-[#1c1c1c]'>
                <button className=" mt-2  text-[#3E3E3E]  bg-[#D5BA7F]   font-bold rounded-lg px-4 py-2 max-w-xs w-[150px]" onClick={onClose}>
                  Close
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
