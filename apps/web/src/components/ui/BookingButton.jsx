import { ArrowUpRight } from 'lucide-react';
import { BOOKING_LINK } from '../../data/site';

// The single conversion action used across the site.
const BookingButton = ({ className = 'btn-primary', children = 'Book a Consultation' }) => (
  <a href={BOOKING_LINK} target="_blank" rel="noopener" className={className}>
    {children}
    <ArrowUpRight size={17} aria-hidden="true" />
    <span className="sr-only">(opens the booking page in a new tab)</span>
  </a>
);

export default BookingButton;
