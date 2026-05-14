export default function Footer() {
  return (
    <footer className="border-t border-border bg-white mt-20">
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} AI Blog. All rights reserved.</p>
        <p>用文字记录思考，用代码改变世界</p>
      </div>
    </footer>
  );
}