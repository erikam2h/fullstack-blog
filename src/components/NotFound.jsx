export default function NotFound() {
  return (
    <>
      <div className="min-h-[80vh] grid place-content-center">
        <p className="font-bold text-center text-4xl">404 - Page Not Found</p>
        <p className="font-bold text-center text-xl text-slate-400">
          Try again
        </p>
        <img
          src="https://picsum.photos/660/400"
          alt="Page not found"
          className="flex content-center mt-6 rounded-xl"
        />
      </div>
    </>
  );
}
