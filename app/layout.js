
import './globals.css';

export const metadata = {
  title: 'Home Buyer Guide Builder',
  description: 'White-label first-time home buyer guide builder',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
