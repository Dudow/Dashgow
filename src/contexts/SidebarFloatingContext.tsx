import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarFloatingContextProps {
  children: ReactNode;
}

type SidebarFloatingContextData = UseDisclosureReturn;

const SidebarFloatingContext = createContext({} as SidebarFloatingContextData);

export function SidebarFloatingProvider({
  children,
}: SidebarFloatingContextProps) {
  const disclosure = useDisclosure();
  const { asPath } = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [asPath]);

  return (
    <SidebarFloatingContext.Provider value={disclosure}>
      {children}
    </SidebarFloatingContext.Provider>
  );
}

export const useSidebarFloating = () => useContext(SidebarFloatingContext);
