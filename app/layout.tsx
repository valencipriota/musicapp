export const metadata = {
  title: "musicapp",
  description: "Tu Letterboxd de canciones",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
