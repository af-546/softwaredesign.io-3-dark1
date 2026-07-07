import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export type Toast = {
  id: string;
  message: string;
  type: "success" | "error" | "info";
};

type AppContextType = {
  preloaderDone: boolean;
  setPreloaderDone: (v: boolean) => void;
  commandOpen: boolean;
  setCommandOpen: (v: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (v: boolean) => void;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  chatOpen: boolean;
  setChatOpen: (v: boolean) => void;
  lightboxImage: string | null;
  setLightboxImage: (v: string | null) => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  reducedMotion: boolean;
  toggleReducedMotion: () => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
  fontSize: "normal" | "large";
  toggleFontSize: () => void;
  language: "en" | "es" | "fr";
  setLanguage: (l: "en" | "es" | "fr") => void;
  cookiesAccepted: boolean | null;
  acceptCookies: () => void;
  toasts: Toast[];
  addToast: (message: string, type?: Toast["type"]) => void;
  removeToast: (id: string) => void;
  shortcutsOpen: boolean;
  setShortcutsOpen: (v: boolean) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<"normal" | "large">("normal");
  const [language, setLanguage] = useState<"en" | "es" | "fr">("en");
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean | null>(() => {
    try {
      const v = localStorage.getItem("sd-cookies");
      return v === null ? null : v === "true";
    } catch {
      return null;
    }
  });
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [shortcutsOpen, setShortcutsOpen] = useState(false);

  const addToast = useCallback((message: string, type: Toast["type"] = "info") => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const acceptCookies = useCallback(() => {
    setCookiesAccepted(true);
    try {
      localStorage.setItem("sd-cookies", "true");
    } catch {
      /* ignore */
    }
  }, []);

  const toggleSound = useCallback(() => setSoundEnabled((v) => !v), []);
  const toggleReducedMotion = useCallback(() => setReducedMotion((v) => !v), []);
  const toggleHighContrast = useCallback(() => setHighContrast((v) => !v), []);
  const toggleFontSize = useCallback(
    () => setFontSize((v) => (v === "normal" ? "large" : "normal")),
    [],
  );

  return (
    <AppContext.Provider
      value={{
        preloaderDone,
        setPreloaderDone,
        commandOpen,
        setCommandOpen,
        searchOpen,
        setSearchOpen,
        menuOpen,
        setMenuOpen,
        chatOpen,
        setChatOpen,
        lightboxImage,
        setLightboxImage,
        soundEnabled,
        toggleSound,
        reducedMotion,
        toggleReducedMotion,
        highContrast,
        toggleHighContrast,
        fontSize,
        toggleFontSize,
        language,
        setLanguage,
        cookiesAccepted,
        acceptCookies,
        toasts,
        addToast,
        removeToast,
        shortcutsOpen,
        setShortcutsOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
