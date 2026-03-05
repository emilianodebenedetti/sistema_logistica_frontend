export default function AppFooter() {
    const year = new Date().getFullYear();

    return (
      <footer className="fixed bottom-0 left-0 w-full py-3 text-center text-sm text-gray-500 bg-white flex items-center justify-center gap-2">
        © {year} - Desarrollado por ChiliDev
        <span className="text-lg">🌶️</span>
      </footer>
    );
}
