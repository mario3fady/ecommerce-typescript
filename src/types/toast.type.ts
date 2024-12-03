export type TToast = {
  id?: string;
  type: "primary" | "success" | "warning" | "danger";
  title?: string | null;
  info: string;
  delayAnimation?: boolean;
  onCloseToast?: () => void;
};
