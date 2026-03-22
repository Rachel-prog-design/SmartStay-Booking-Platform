import { useBookingStore } from "../store/bookingStore";

const Bookings = () => {
  const { bookings, cancelBooking } = useBookingStore();

  return (
    <div>
      {bookings.map((b: any) => (
        <div key={b.id}>
          <p>{b.title}</p>
          <button onClick={() => cancelBooking(b.id)}>Cancel</button>
        </div>
      ))}
    </div>
  );
};

export default Bookings;