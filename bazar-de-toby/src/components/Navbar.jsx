export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="container-app h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-yellow-400" />
          <span className="font-semibold">Bazar de Toby</span>
        </div>
        <div className="text-sm text-gray-500">Navbar OK</div>
      </div>
    </header>
  );
}
