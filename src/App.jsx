import { useState } from 'react';
import { MapPin } from 'lucide-react';

export default function App() {
  const [nextAppointment] = useState({
    client: "Emma García",
    service: "Corte",
    start: "9:00",
    end: "10:00",
    travelTime: 25,
    leaveAt: "8:30",
    notes: "Quiere estilo clásico y elegante.",
    images: ["/img1.jpg", "/img2.jpg"],
  });

  const [availability] = useState([
    { from: "12:30", to: "14:00" },
    { from: "15:00", to: "16:00" },
  ]);

  const [upcomingAppointments] = useState([
    { client: "Luisa Medina", service: "Maquillaje boda", from: "11:00", to: "14:00" },
    { client: "Claudia Pérez", service: "Tinte", from: "16:30", to: "17:30" },
  ]);

  return (
    <div>
      <h1>Hoy</h1>

      <div className="card">
        <div className="flex space-between">
          <div>
            <h2>{nextAppointment.client}</h2>
            <p>{nextAppointment.service}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p>{nextAppointment.start} – {nextAppointment.end}</p>
            <small>{nextAppointment.travelTime} min de trayecto</small>
          </div>
        </div>

        <div>
          <small>SALIDA ESTIMADA</small>
          <p>{nextAppointment.leaveAt}</p>
        </div>

        <div>
          <strong>Notas:</strong>
          <p>{nextAppointment.notes}</p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {nextAppointment.images.map((img, idx) => (
            <img key={idx} src={img} alt="nota visual" style={{ width: 64, height: 64, borderRadius: 8, objectFit: 'cover' }} />
          ))}
        </div>

        <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={16} />
          <a href="#">Ver ruta</a>
        </div>
      </div>

      <div>
        <strong>DISPONIBILIDAD REAL</strong>
        <ul>
          {availability.map((slot, idx) => (
            <li key={idx}>{slot.from} – {slot.to}</li>
          ))}
        </ul>
      </div>

      {upcomingAppointments.map((appt, idx) => (
        <div className="card" key={idx}>
          <p><strong>{appt.client}</strong></p>
          <p>{appt.service}</p>
          <p>{appt.from} – {appt.to}</p>
        </div>
      ))}
    </div>
  );
}
