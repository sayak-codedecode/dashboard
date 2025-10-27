export default function Topbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-8 shadow-sm  border-gray-200">
       <div className="p-4">
          <img height={70} width={90} src="fnp_logo.png" alt="fnp_logo"/>
        </div>
      <div className="flex items-center gap-2 text-sm text-gray-600">
          <p className="font-semibold">User</p>
          <img className="size-8.5" src="profile.png" alt="user_logo" />
      </div>
    </header>
  );
}
