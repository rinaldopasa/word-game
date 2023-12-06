interface Props {
  status: "happy" | "sad";
  children: React.ReactNode;
}
export default function Banner({ status, children }: Props) {
  return <div className={`${status} banner`}>{children}</div>;
}
