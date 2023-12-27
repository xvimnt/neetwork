import React from "react";
import SignaturePad from "react-signature-canvas";
import type SignatureCanvas from "react-signature-canvas";
import UIModal from "../UI/UIModal";
import { UIButton } from "../UI/UIButton";

export const FormSignature = ({
  setSignatureCanvas,
}: {
  setSignatureCanvas: React.Dispatch<
    React.SetStateAction<HTMLCanvasElement | null>
  >;
}) => {
  const padRef = React.useRef<SignatureCanvas>(null);
  const [showModal, setShowModal] = React.useState(false);

  const reload = () => {
    if (padRef.current) padRef.current.clear();
  };
  const save = () => {
    if (padRef.current) {
      setSignatureCanvas(padRef.current.getCanvas());
      setShowModal(false);
    }
  };

  return (
    <div className="my-2">
      <UIModal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Firma"
        onSave={save}
      >
        <SignaturePad
          ref={padRef}
          canvasProps={{ className: "signatureCanvas w-full h-80" }}
        />
      </UIModal>
      {padRef.current && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={padRef.current.toDataURL()}
          alt="signature"
          className="h-full w-full object-contain"
        />
      )}
      <UIButton
        label="Firma"
        type="button"
        onClick={() => setShowModal(true)}
      />
    </div>
  );
};
