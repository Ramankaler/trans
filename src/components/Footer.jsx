// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="text-center py-6 border-t mt-10 text-sm text-gray-600 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">TranspoX</h3>
            <p className="text-sm text-gray-600">
              Reliable trucking and transport solutions across the nation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:text-blue-600">Home</a></li>
              <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Contact Info</h4>
            <p className="text-sm text-gray-600">
              📞 +91 94787-50773 <br />
              📧 info@piertrans.com<br />
              🏢 Jalandhar, Punjab, India
            </p>
          </div>
        </div>
        <div className="border-t pt-4">
          © {new Date().getFullYear()} TranspoX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
