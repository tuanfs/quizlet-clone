import React, { createContext, useState } from "react";

const StateContext = createContext();

function StateProvider({ children }) {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [showModalMobile, setShowModalMobile] = useState(false);
  const [inputSearchRef, setInputSearchRef] = useState(null);
  const [showModalAuth, setShowModalAuth] = useState(false);
  const [showModalCreateFolder, setShowModalCreateFolder] = useState(false);
  const [showModalEditFolder, setShowModalEditFolder] = useState(false);
  const [showModalAddTerm, setShowModalAddTerm] = useState(false);
  const [showModalLearn, setShowModalLearn] = useState(false);
  const [showModalShare, setShowModalShare] = useState(false);
  const [showModalCreateClass, setShowModalCreateClass] = useState(false);
  const [tabAuth, setTabAuth] = useState("");

  const value = {
    showMenuMobile,
    onShowMenuMobile: setShowMenuMobile,
    showModalMobile,
    onShowModalMobile: setShowModalMobile,
    inputSearchRef,
    onInputSearchRef: setInputSearchRef,
    showModalAuth,
    onShowModalAuth: setShowModalAuth,
    tabAuth,
    onTabAuth: setTabAuth,
    showModalCreateFolder,
    onShowModalCreateFolder: setShowModalCreateFolder,
    showModalEditFolder,
    onShowModalEditFolder: setShowModalEditFolder,
    showModalAddTerm,
    onShowModalAddTerm: setShowModalAddTerm,
    showModalLearn,
    onShowModalLearn: setShowModalLearn,
    showModalShare,
    onShowModalShare: setShowModalShare,
    showModalCreateClass,
    onShowModalCreateClass: setShowModalCreateClass,
  };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}

export { StateProvider, StateContext };
