import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>The page or session you are looking for does not exist.</p>
      <Link to="/" className="back-home-link">
        &larr; Back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;