"use client";

import { useEffect, useState } from "react";
import { SettingModal } from "../modals/setting-modal";
import { CoverImageModal } from "../modals/cover-image-modal";

export const ModalProvider = () => {
  const [isMouted, setIsMouted] = useState(false);

  useEffect(() => {
    setIsMouted(true);
  }, []);

  if (!isMouted) {
    return null;
  }

  return (
    <>
      <SettingModal />
      <CoverImageModal />
    </>
  );
};
