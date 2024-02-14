import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <section>
      <div className="error-centre">
        <h2>Oops</h2>
        <h3>This page is not found</h3>
        <Link to={'/'} className='btn btn-primary' >Go Back Home</Link>
      </div>
    </section>
  );
}
