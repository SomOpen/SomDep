export default function Card({ title, description, icon }: {title: string, description: string, icon: React.ReactElement}) {
  return (
    <div className="max-w-[380px] w-full flex gap-3 flex-col justify-center items-center min-h-[150px] bg-slate-50 p-2 border-2 border-slate-200 shadow-md rounded-md">
      <h1 className="text-emerald-600 text-center flex gap-2 items-center justify-center bg-emerald-50 p-2 border-2 border-slate-100 rounded-full font-bold italic">
        {icon}
        {title}
      </h1>
      <p className="text-center text-slate-600">{description}</p>
    </div>
  );
}
